import { Component, OnInit } from '@angular/core';
import { Page } from "ui/page";
import { TNSFontIconService } from 'nativescript-ngx-fonticon';
import { Router } from "@angular/router";
import { PlacesService } from "../../services/places.service";
import { Place } from "../../models/place.model";
var mapbox = require("nativescript-mapbox");

@Component({
  selector: 'menu',
  templateUrl: 'pages/menu/menu.html',
  styleUrls: ["pages/menu/menu-global.css", "pages/menu/menu.css"],
})

export class MenuComponent implements OnInit {
  public places : Array<Place> = [];
  constructor(private page: Page, private router : Router, private fonticon: TNSFontIconService, private placesService : PlacesService) {}
  ngOnInit() : void {
    this.placesService.getPlaces("24.7880443", "-107.3983973").subscribe((placesResponse) => {
      placesResponse.forEach(place => {
          this.places.unshift(place);
      });
    });
  }
  onMapReady(args) {
    this.places.forEach((place) => {
      var lat = place["location"]["latitude"];
      var long = place["location"]["longitude"];
      args.map.addMarkers([
        {
          lat: lat,
          lng: long,
          title: place["name"],
          subtitle: place["about"],
          selected: true,
          onCalloutTap: function(){console.log("'Nice location' marker callout tapped");}
        }]
      );
    });
}
}
