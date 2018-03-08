/**
@name: MySmartHotel
@author: Alfonso Reyes Cortés (arc980103@gmail.com)
@desc: Servicio de lugares Google Places
**/

// Imports del servicio
import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { forkJoin } from "rxjs/observable/forkJoin";
import { Place, PlaceType } from "../models/place.model";
import { Location } from "../models/location.model";
import { BackendService } from "../services/backend.service";
import { LocationService } from "../services/location.service";
import { SecureStorage } from "nativescript-secure-storage";
import * as connectivity from "tns-core-modules/connectivity";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";

// Registro del servicio
@Injectable()
export class PlacesService {
  private secureStorage : SecureStorage;

  // Constructor del servicio
  constructor(private http: Http, private locationService : LocationService) {
    this.secureStorage = new SecureStorage();
  }

  /**
  * Retorna un arreglo con los lugares del servicio de Google Places
  * @param {Location} location - Objeto location con latitud y longitud
  * @return {Observable<data>} - Retorna un objeto observable con los datos de lugares en caso de que la solicitud haya sido correcta
  */
  public getPlaces(location: Location): Observable<any> {
    // checa si hay conexión activa
    if (connectivity.getConnectionType() == connectivity.connectionType.none) {
      return Observable.throw("");
    }
    let places: Array<Place> = []; //array places
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
    // unir todas las promesas en un observable
    return Observable.forkJoin([parks, restaurants, museums, art_galleries, cafes,
      casinos, zoo, shopping, bars, night_clubs]).map((data: any[]) => {
        let i = 0; // id lugar
        // ciclar datos de lugar
        data.forEach(dataTypes => {
          dataTypes["results"].forEach(place => {
            let ref;
            // fix por si no tiene imagen
            if ('photos' in place) {
              ref = place.photos[0].photo_reference;
            } else {
              ref = "null";
            }
            // guardar objetos Place en el arreglo
            places.push(new Place(place.place_id, place.name,
              place.geometry.location, this.getPlaceType(i), ref));
          });
          i++; //incrementar id lugar
        });
        return places;
      });
  }

  /**
  * Retorna la distancia que existe entre la ubicación del usuario y el lugar
  * @param {Location} placeLocation - Ubicación del lugar
  * @return {string} - Distancia del lugar en km o metros
  */
  public getDistancePlace(placeLocation : Location) : string {
     let distance = this.locationService.getDistance(this.locationService.getLocation(), placeLocation);
     if(distance >= 1) {
       return (distance).toFixed(1) + " kilometros";
     }
     return (distance*1000).toFixed(0) + " metros";
   }

   /**
   * Retorna el tipo de lugar para clasificarlo
   * van de incrementos de 1 en 1 de acuerdo a las solicitud http hecha en donde se invoca esta Función
   * @param {number} i - ID del tipo de lugar
   * @return {PlaceType} - Retorna el objeto PlaceType
   */
  private getPlaceType(i : number) : PlaceType {
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
    }
  }

  /**
  * Guarda los lugares en la base de datos local
  * @param {Array<Place>} places | Arreglo de lugares
  * @return {Promise<any>} - Promesa de si se termino la solicitud de datos
  */
  public storePlaces(places: Array<Place>) : Promise<any> {
    return this.secureStorage.set({key: "placesData", value: JSON.stringify(places)});
  }

  /**
  * Retorna si hay lugares guardados en la base de datos local
  * @return {Promise<places>} - Función asyncrona que indica si hay lugars guardados
  */
  public placesExist(): Promise<any> {
    return this.secureStorage.get({key: "placesData"});
    // let val = this.secureStorage.getSync({key: "placesData"});
    // return (val==null) ? false : true;
  }

  /**
  * Retorna los lugares guardados en la base de datos local
  * @return {Promise<places>} Promesa de si se pudieron obtener los datos
  */
  public getSavedPlaces() : Promise<any> {
    return this.secureStorage.get({key: "placesData"});
  }

}
