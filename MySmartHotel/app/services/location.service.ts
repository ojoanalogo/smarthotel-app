/**
@name: MySmartHotel
@author: Alfonso Reyes Cortés (arc980103@gmail.com)
@desc: Servicio de ubicación
**/

// Imports del servicio
import { Injectable } from '@angular/core';
import { Accuracy } from "ui/enums";
import { Location } from "../models/location.model";
import { Observable, Subject } from "rxjs/Rx";
import * as Geolocation from "nativescript-geolocation";

// Registro del servicio
@Injectable()
export class LocationService {
  private location: Location;
  private locationSet: boolean;
  public locationSetChange: Subject<boolean> = new Subject<boolean>(); //subject para subscribirse a cambio

  // Constructor del servicio
  constructor() {
    this.location = new Location();
    this.locationSetChange.subscribe((value) => {
      this.locationSet = value;
    });
  }

  /**
  * Pide permiso al sistema para obtener la ubicación del telefono
  * @return {Observable<Location>} retorna un observable con el estatus de la solicitud de ubicación
  */
  public setupLocation(): Observable<Location> {
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

  /**
  * Retorna la ubicación del usuario
  * @returns {Location} ubicación del usuario
  */
  public getLocation(): Location {
    return this.location;
  }

  /**
  * Obtiene la distancia en float que existe de una coordenada a otra
  * @param {Location} location1 - Objeto location 1
  * @param {Location} location2 - Objeto location 2
  * @return {double} - distancia en formato float
  */
  public getDistance(location1 : Location, location2: Location) {
   var R = 6371; // Radius of the earth in km
   var dLat = this.deg2rad(location2.latitude-location1.latitude);  // deg2rad below
   var dLon = this.deg2rad(location2.longitude-location1.longitude);
   var a =
     Math.sin(dLat/2) * Math.sin(dLat/2) +
     Math.cos(this.deg2rad(location1.latitude)) * Math.cos(this.deg2rad(location2.latitude)) *
     Math.sin(dLon/2) * Math.sin(dLon/2);
   var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
   var d = R * c; // Distance in km
   return d;
 }

 /**
 * Convierte de grados a radianes
 * @param {number} deg - grados
 * @return {rad} grados convertidos en radianes
 */
 private deg2rad(deg : number) : number {
   return deg * (Math.PI/180);
 }
}
