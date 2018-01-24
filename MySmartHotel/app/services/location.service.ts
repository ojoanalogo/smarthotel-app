import { Injectable } from '@angular/core';
import * as geolocation from "nativescript-geolocation";
import { Accuracy } from "ui/enums";

@Injectable()
export class LocationService {

  constructor() { }

  isEnabled() : Promise<Boolean> {
    return geolocation.isEnabled();
  }

  requestEnable() :Promise<Boolean> {
    geolocation.enableLocationRequest().then(
      (success) => {
        return true;
      },
     (error)=> {
       return false;
     });
     return;
  }

  getLocation() {
    return geolocation.getCurrentLocation({ desiredAccuracy: Accuracy.high, maximumAge: 5000, timeout: 20000 });
  }
}
