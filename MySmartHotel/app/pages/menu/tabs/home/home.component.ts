import { Component, OnInit } from '@angular/core';
import { Page } from "ui/page";
import { TNSFontIconService } from 'nativescript-ngx-fonticon';
import { Router } from "@angular/router";
import { ScrollView, ScrollEventData } from 'tns-core-modules/ui/scroll-view';
import { View } from 'tns-core-modules/ui/core/view';
import { WeatherService } from "../../../../services/weather.service";
import { Weather } from "../../../../models/weather.model";
import { User } from "../../../../models/user.model";
import { DateReservation } from "../../../../models/date.model";
import { LocationService } from "../../../../services/location.service";
import { BackendService } from "../../../../services/backend.service";
import { Color } from "Color";
import { SnackBar, SnackBarOptions } from "nativescript-snackbar";

@Component({
  selector: 'Home',
  templateUrl: 'pages/menu/tabs/home/home.html',
  styleUrls: ['pages/menu/tabs/home/home.css']
})

export class HomeComponent implements OnInit {
  private weather: Weather;
  private snackBar: SnackBar;
  private user : User;
  private arrival : DateReservation;
  private departure : DateReservation;
  constructor(private page: Page, private router: Router, private fonticon: TNSFontIconService,
    private weatherService: WeatherService, private locationService: LocationService) {
    this.weather = new Weather("0", "-", "-", "-", "-");
  }
  ngOnInit(): void {
    this.snackBar = new SnackBar();
    this.locationService.locationSetChange.subscribe(() => {
      let location = this.locationService.getLocation();
      if (this.weatherService.shouldUpdate()) {
        this.weatherService.getWeather(location).subscribe(
          (weatherObj) => {
            this.weather = weatherObj;
            this.snackBar.simple('Clima actualizado');
          });
      } else {
        this.weather = this.weatherService.getSavedWeather();
      }
    });
    this.user = BackendService.userData;
    let dateArrival = new Date(this.user.arrival);
    let dateDeparture = new Date(this.user.departure);
    this.arrival = new DateReservation(dateArrival.getMonth(), dateArrival.getDate(), dateArrival.getDay());
    this.departure = new DateReservation(dateDeparture.getMonth(), dateDeparture.getDate(), dateDeparture.getDay());
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
