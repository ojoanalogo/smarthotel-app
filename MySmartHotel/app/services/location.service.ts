import { Injectable } from '@angular/core';
import * as Geolocation from "nativescript-geolocation";
import { Accuracy } from "ui/enums";
import { Location } from "../models/location.model";
import { Observable, Subject } from "rxjs/Rx";

@Injectable()
export class LocationService {
  private location : Location;
  private locationSet : boolean;
  locationSetChange: Subject<boolean> = new Subject<boolean>();
   constructor() {
       this.location = new Location();
       this.locationSetChange.subscribe((value) => {
       this.locationSet = value
   });
  }
     public setupLocation() : Observable<Location> {
       return Observable.create(observer => {
 Geolocation.enableLocationRequest().then(() => {
                 Geolocation.getCurrentLocation({ desiredAccuracy: Accuracy.high, maximumAge: 5000, timeout: 10000 }).then(locationData => {
                   this.location.latitude = locationData.latitude;
                   this.location.longitude = locationData.longitude;
                   this.locationSetChange.next(!this.locationSet);
                   observer.next(this.location);
                   observer.complete();
                 }).catch(error => {
                   observer.error(error);
                 });
             }).catch(error => {
               observer.error(error);
             });
           });
     }

     public getLocation() : Location {
       return this.location;
     }
}
