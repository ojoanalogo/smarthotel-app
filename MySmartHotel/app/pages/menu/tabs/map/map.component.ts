import { Component, OnInit } from '@angular/core';
import * as geolocation from "nativescript-geolocation";
import { Accuracy } from "ui/enums";
import { PlacesService } from "../../../../services/places.service"
import { LocationService } from "../../../../services/location.service"
import { Location } from "../../../../models/location.model";
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
  private location : Location;
  mapEnabled : boolean = false;
  constructor(private placesService : PlacesService, private locationService : LocationService) {  }
  ngOnInit() {
    this.locationService.locationSetChange.subscribe(()=>{
      this.location = this.locationService.getLocation();
      this.mapEnabled = true;
    });
  }
  onMapReady(args) {
    this.loadMarks(args);
  }
loadMarks(args) {
    this.placesService.getPlaces(this.location.latitude.toString(), this.location.longitude.toString()).subscribe((placesResponse) => {
      placesResponse.forEach(place => {
        var lat = place["location"]["latitude"];
        var long = place["location"]["longitude"];
        args.map.addMarkers([{
            lat: lat,
            lng: long,
            title: place["name"],
            subtitle: place["about"],
            onCalloutTap: function(){console.log("'Nice location' marker callout tapped");}
          }]
        );
      });
    });
}
}
