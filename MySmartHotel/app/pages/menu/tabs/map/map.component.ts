import { Component, OnInit } from '@angular/core';
import * as geolocation from "nativescript-geolocation";
import { Accuracy } from "ui/enums";
import { PlacesService } from "../../../../services/places.service"
import { Place } from "../../../../models/place.model";
import { SnackBar, SnackBarOptions } from "nativescript-snackbar";
import { trigger, state, style, animate, transition } from "@angular/animations";
var mapbox = require("nativescript-mapbox");

@Component({
  selector: 'Map',
  templateUrl: 'pages/menu/tabs/map/map.html',
  styleUrls: ['pages/menu/tabs/map/map.css']
})

export class MapComponent implements OnInit {
  private places : Array<Place> = [];
  private hasLocationEnabled : false;
  constructor(private placesService : PlacesService) {  }
  ngOnInit() {
    // mapbox.hasFineLocationPermission().then(
    //     function(granted) {
    //       if(!granted) {
    //         this.hasLocationEnabled = false;
    //         this.requestPermission();
    //       } else {
    //         this.hasLocationEnabled = true;
    //       }
    //     }
    // );
  }
  // requestPermission() {
  //   mapbox.requestFineLocationPermission().then(
  //     function() {
  //      console.log("Permiso de ubicación solicitado");
  //      this.loadMarks(this.mapboxObj);
  //    });
  // }
  onMapReady(args) {
    this.loadMarks(args);
  }
loadMarks(args) {
  geolocation.getCurrentLocation({ desiredAccuracy: Accuracy.high, maximumAge: 5000, timeout: 10000 }).then((location) => {
    this.placesService.getPlaces(location.latitude.toString(), location.longitude.toString()).subscribe((placesResponse) => {
      placesResponse.forEach(place => {
        var lat = place["location"]["latitude"];
        var long = place["location"]["longitude"];
        args.map.addMarkers([{
            lat: lat,
            lng: long,
            title: place["name"],
            subtitle: place["about"],
            selected: true,
            onCalloutTap: function(){console.log("'Nice location' marker callout tapped");}
          }]
        );
      });
    });
  }).catch((error) => {
    let snackbar = new SnackBar();
    snackbar.simple('No se pudo obtener la ubicación');
  });
}
}
