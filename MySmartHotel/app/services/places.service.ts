import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { forkJoin } from "rxjs/observable/forkJoin";
import { Place, PlaceType } from "../models/place.model";
import { Location } from "../models/location.model";
import { BackendService } from "../services/backend.service";
import { SecureStorage } from "nativescript-secure-storage";
import * as connectivity from "tns-core-modules/connectivity";

import "rxjs/add/operator/map";
import "rxjs/add/operator/do";

@Injectable()
export class PlacesService {
  private secureStorage : SecureStorage;
  constructor(private http: Http) {
    this.secureStorage = new SecureStorage();
   }

  public getPlaces(location: Location): Observable<any> {
    if (connectivity.getConnectionType() == connectivity.connectionType.none) {
      return Observable.throw("");
    }
    let places: Array<Place> = [];
    let apiKEY = "AIzaSyC3t37wmitrNWtfbKcIyfjRbKN8yp7duLk";
    let url = BackendService.placesGoogleURL + "key=" + apiKEY + "&location="
      + location.latitude.toString() + "," + location.longitude.toString() + "&radius=10000&language=es&types=";
    let parks = this.http.get(url + PlaceType.PARK).map(res => res.json());
    let restaurants = this.http.get(url + PlaceType.RESTAURANT).map(res => res.json());
    let museums = this.http.get(url + PlaceType.MUSEUM).map(res => res.json());
    let art_galleries = this.http.get(url + PlaceType.ART_GALLERY).map(res => res.json());
    let cafes = this.http.get(url + PlaceType.CAFE).map(res => res.json());
    let casinos = this.http.get(url + PlaceType.CASINO).map(res => res.json());
    let zoo = this.http.get(url + PlaceType.ZOO).map(res => res.json());
    let shopping = this.http.get(url + PlaceType.SHOPPING_MALL).map(res => res.json());
    let bars = this.http.get(url + PlaceType.BAR).map(res => res.json());
    let night_clubs = this.http.get(url + PlaceType.NIGHT_CLUB).map(res => res.json());
    let points_of_interest = this.http.get(url + PlaceType.POINT_OF_INTEREST).map(res => res.json());
    return Observable.forkJoin([parks, restaurants, museums, art_galleries, cafes,
      casinos, zoo, shopping, bars, night_clubs, points_of_interest]).map((data: any[]) => {
        let placeType;
        let i = 0;
        data.forEach(dataTypes => {
          dataTypes["results"].forEach(place => {
            let ref;
            if ('photos' in place) {
              ref = place.photos[0].photo_reference;
            } else {
              ref = "null";
            }
            places.push(new Place(place.place_id, place.name,
              place.geometry.location, this.getPlaceType(i), ref));
          });
          i++;
        });
        return places;
      });
  }

  public placesExist(): boolean {
    let val = this.secureStorage.getSync({key: "placesData"});
    return (val==null) ? false : true;
  }

  private getPlaceType(i): PlaceType {
    let place: PlaceType;
    switch (i) {
      case 0: return PlaceType.PARK;
      case 1: return PlaceType.RESTAURANT;
      case 2: return PlaceType.MUSEUM;
      case 3: return PlaceType.ART_GALLERY;
      case 4: return PlaceType.CAFE;
      case 5: return PlaceType.CASINO;
      case 6: return PlaceType.ZOO;
      case 7: return PlaceType.SHOPPING_MALL;
      case 8: return PlaceType.BAR;
      case 9: return PlaceType.NIGHT_CLUB;
      case 10: return PlaceType.POINT_OF_INTEREST;
    }
  }
  public storePlaces(places: Array<Place>) {
    return this.secureStorage.set({key: "placesData", value: JSON.stringify(places)});
  }
  public getSavedPlaces() {
    return this.secureStorage.get({key: "placesData"});
  }

}
