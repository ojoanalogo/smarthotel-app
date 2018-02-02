import { Component, OnInit, ViewChild, ElementRef, ViewContainerRef } from '@angular/core';
import { View } from 'tns-core-modules/ui/core/view';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { TNSFontIconService } from 'nativescript-ngx-fonticon';
import { ScrollView, ScrollEventData } from 'tns-core-modules/ui/scroll-view';
import { Color } from "color";
import { Place } from "../../models/place.model";
import { Location } from "../../models/location.model";
import { Page } from "ui/page";
import { PlacesService } from "../../services/places.service";
import { LoadingIndicator } from "nativescript-loading-indicator";
import { Image } from "ui/image";
import { ModalDialogOptions, ModalDialogService } from "nativescript-angular";
import { InfoModalComponent } from "../../info-modal/info-modal";

@Component({
  selector: 'places',
  templateUrl: 'pages/places/places.html',
  styleUrls: ["pages/places/places-global.css", "pages/places/places.css"]
})

export class PlacesComponent implements OnInit {
  private places: Array<Place> = [];
  private place_type: PlaceType;
  private places_list = new Array<PlaceType>(
    { id: "park", type: "Parques", icon: "~/assets/park.png", desc: "Para disfrutar el aire libre", img: "~/assets/park.jpg", color: "#80388E3C", barColor: "#388E3C" },
    { id: "restaurant", type: "Restaurantes", icon: "~/assets/restaurant.png", desc: "Tienes hambre? mira los restaurantes cercanos", img: "~/assets/restaurant.jpg", color: "#805D4037", barColor: "#5D4037" },
    { id: "museum", type: "Museos", icon: "~/assets/museum.png", desc: "Visita museos cercanos", img: "~/assets/museum.jpg", color: "#80F57C00", barColor: "#F57C00" },
    { id: "bar", type: "Bares", icon: "~/assets/bar.png", desc: "Bares cercanos", img: "~/assets/bar.jpg", color: "#80512DA8", barColor: "#512DA8" },
    { id: "shopping_mall", type: "Compras", icon: "~/assets/shopping_mall.png", desc: "Compra cosas chilas", img: "~/assets/shopping_mall.jpg", color: "#8000796B", barColor: "#00796B" }
  );
  private loader: LoadingIndicator;
  constructor(private route: ActivatedRoute, private page: Page, private placesService: PlacesService, private vcRef: ViewContainerRef,
    private modalService: ModalDialogService) { }
  ngOnInit(): void {
    this.loader = new LoadingIndicator();
    const id = this.route.snapshot.params["id"];
    this.place_type = this.getPlaceType(id);
    this.getPlacesByID(id);
    this.page.actionBarHidden = true;
  }

  private showModal(place: Place) {
    const info = place;
    const options: ModalDialogOptions = {
      viewContainerRef: this.vcRef,
      context: info,
      fullscreen: false,
    };
    this.modalService.showModal(InfoModalComponent, options).then(() => { });
  }

  private getPlacesByID(id) {
    this.loader.show({ message: "Cargando..." });
    let storedPlaces: Array<Place>;
    this.placesService.placesExist().then(val => {
      if (val!=null) {
        this.placesService.getSavedPlaces().then((places) => {
          storedPlaces = JSON.parse(places);
          this.places = storedPlaces.filter(item => item.placeType === id);
          this.loader.hide();
        });
      } else {
        // TODO: Añadir que no hay lugares
      }
    });
  }
  private getPlaceType(id): PlaceType {
    return this.places_list.filter(item => item.id === id)[0];
  }

  private getDistance(place : Place) {
    let location = new Location();
    location.latitude = place.location["lat"];
    location.longitude = place.location["lng"];
    return this.placesService.getDistancePlace(location);
  }

}

class PlaceType {
  id: string;
  type: string;
  icon: string;
  desc: string;
  img: string;
  color: string;
  barColor: string;
}
