import { Component, OnInit } from '@angular/core';
import { Page } from "ui/page";
import { TNSFontIconService } from 'nativescript-ngx-fonticon';
import { Router } from "@angular/router";
import { ScrollView, ScrollEventData } from 'tns-core-modules/ui/scroll-view';
import { View } from 'tns-core-modules/ui/core/view';
import { WeatherService } from "../../../../services/weather.service";
import { Weather } from "../../../../models/weather.model";
import { LocationService } from "../../../../services/location.service";
import { Color } from "Color";

@Component({
  selector: 'Home',
  templateUrl: 'pages/menu/tabs/home/home.html',
  styleUrls: ['pages/menu/tabs/home/home.css']
})

export class HomeComponent implements OnInit {
   weather : Weather;

  constructor(private page: Page, private router : Router, private fonticon: TNSFontIconService,
    private weatherService : WeatherService, private locationService : LocationService) {
      this.weather = new Weather("0", "-", "-", "-", "-");
    }
  ngOnInit() : void {
    this.locationService.locationSetChange.subscribe(()=>{
      let location = this.locationService.getLocation();
      this.weatherService.getWeather(location.latitude.toString(), location.longitude.toString()).subscribe(
        (weatherObj) => {
          this.weather = weatherObj;
      }, (error) => {
        this.weather = new Weather("0", "Desconocido", "-", "-", "-");
      });
    }, ()=>{
      this.weather = new Weather("0", "Desconocido", "-", "-", "-");
    });
  }
  onScroll(event: ScrollEventData, scrollView: ScrollView, topView: View) {
    if (scrollView.verticalOffset < 250) {
        const offset = scrollView.verticalOffset / 2;
        if (scrollView.ios) {
            // iOS adjust the position with an animation to create a smother scrolling effect.
            topView.animate({ translate: { x: 0, y: offset } }).then(() => { }, () => { });
        } else {
            // Android, animations are jerky so instead just adjust the position without animation.
            topView.translateY = Math.floor(offset);
        }
    }
  }
}
