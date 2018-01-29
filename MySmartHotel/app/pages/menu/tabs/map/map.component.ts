import { Component, OnInit } from '@angular/core';
import * as geolocation from "nativescript-geolocation";
import { Accuracy } from "ui/enums";
import { PlacesService } from "../../../../services/places.service"
import { LocationService } from "../../../../services/location.service"
import { Location } from "../../../../models/location.model";
import { Place } from "../../../../models/place.model";
import { SnackBar } from "nativescript-snackbar";
import { LoadingIndicator } from "nativescript-loading-indicator";
import { trigger, state, style, animate, transition } from "@angular/animations";
import { TNSFancyAlert } from 'nativescript-fancyalert';
import * as dialogs from "ui/dialogs";
import { Mapbox, MapStyle, OfflineRegion, LatLng, Viewport, DownloadProgress, MapboxMarker } from "nativescript-mapbox";
import * as connectivity from "tns-core-modules/connectivity";

@Component({
  selector: 'Map',
  templateUrl: 'pages/menu/tabs/map/map.html',
  styleUrls: ['pages/menu/tabs/map/map.css']
})

export class MapComponent implements OnInit {
  private places: Array<Place> = [];
  private location: Location;
  private loader: LoadingIndicator;
  private snackBar: SnackBar;
  private mapEnabled: boolean = false;
  private mapObject;
  private mapbox: Mapbox;
  constructor(private placesService: PlacesService, private locationService: LocationService) {
    this.mapbox = new Mapbox();
   }

  ngOnInit(): void {
    this.loader = new LoadingIndicator();
    this.snackBar = new SnackBar;
    this.locationService.locationSetChange.subscribe(() => {
      this.location = this.locationService.getLocation();
      if(!this.hasConnectivity()) {
        this.mapEnabled = true;
      }
    });
  }
  private hasConnectivity() : boolean {
     return connectivity.getConnectionType() == connectivity.connectionType.none;
   }

   private showMapInternet() : void {
     if(!this.hasConnectivity()) {
     this.onMapReady(this.mapObject);
     this.mapEnabled = true;
   } else {
     this.snackBar.simple("No tienes conexión a internet para ver el mapa");
   }
   }

  private allowLocation(): void {
    this.loader.show({ message: "Obteniendo ubicación" });
    this.locationService.setupLocation().subscribe((location) => {
      this.onMapReady(this.mapObject);
      this.location = this.locationService.getLocation();
      this.mapEnabled = true;
      this.loader.hide();
      this.snackBar.simple('Ubicación obtenida');
    }, (error) => {
      this.loader.hide();
      this.snackBar.simple('No se pudo obtener la ubicación');
    })
  }
  private onMapReady(mapObject): void {
    this.mapObject = mapObject;
    this.loadMarks(mapObject);
  }
  private loadMarks(mapObject): void {
    if (this.placesService.placesExist()) {
      this.loader.show({ message: "Obteniendo lugares cercanos" });
      this.placesService.getSavedPlaces().then((response) => {
        this.places = JSON.parse(response);
        this.putMarks(mapObject);
        this.loader.hide();
      });
    } else {
      dialogs.confirm({
        title: "Información",
        message: "Para mejorar la experiencia de usuario necesitamos descargar información extra de los sitios cercanos a tu ubicación, se recomienda estar conectado a la red Wi-Fi del hotel.",
        okButtonText: "Confirmar (descargar)",
        cancelButtonText: "Rechazar",
        neutralButtonText: null
      }).then(result => {
        if (result) {
          this.loader.show({ message: "Obteniendo lugares cercanos" });
          this.placesService.getPlaces(this.location).subscribe((placesResponse) => {
            this.placesService.storePlaces(placesResponse).then((success) => {
              if (success) {
                this.snackBar.simple("Lugares guardados", "#AED581");
                this.placesService.getSavedPlaces().then((response) => {
                  this.places = JSON.parse(response);
                  this.putMarks(mapObject);
                  this.loader.hide();
                });
              } else {
                this.loader.hide();
                TNSFancyAlert.showError("Error al guardar lugares", "No se pudieron guardar los lugares cercanos a ti", "Entendido");
              }
            });
          }, (error) => {
            this.loader.hide();
            this.snackBar.simple('No se pudieron obtener los lugares cercanos');
          });
        } else {
          TNSFancyAlert.showError("No hay información turisticas", "La aplicación no funcionara de manera completa", "Entendido");
        }
      });
    }
  }
  private putMarks(mapObject): void {
    this.places.forEach(place => {
      mapObject.map.addMarkers([{
        lat: place.location["lat"],
        lng: place.location["lng"],
        title: place.name,
        iconPath: this.getIcon(place.placeType),
        onCalloutTap: function() { console.log("'Nice location' marker callout tapped"); }
      }]
      );
    });
  }
      private goCenter() : void {
        this.mapObject.map.setCenter({
          lat: this.locationService.getLocation().latitude,
          lng: this.locationService.getLocation().longitude,
          animated: true
        })
      }
  private getIcon(type): string {
    switch (type) {
      case "park": return "assets/map/park.png";
      case "restaurant": return "assets/map/restaurant.png";
      case "museum": return "assets/map/museum.png";
      case "art_gallery": return "assets/map/art_gallery.png";
      case "cafe": return "assets/map/cafe.png";
      case "casino": return "assets/map/casino.png";
      case "zoo": return "assets/map/zoo.png";
      case "shopping_mall": return "assets/map/shopping.png";
      case "bar": return "assets/map/bar.png";
      case "night_club": return "assets/map/bar.png";
      case "point_of_interest": return "assets/map/point_of_interest.png";
    }
  }
}
