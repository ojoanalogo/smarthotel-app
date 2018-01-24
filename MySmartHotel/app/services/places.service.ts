import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Place } from "../models/place.model";
import { BackendService } from "../services/backend.service";
import { PlacesStorage } from "../services/places-storage.service";
import "rxjs/add/operator/map";

@Injectable()
export class PlacesService {
  constructor(private http: Http) {}

  public getPlaces(lat : string, long : string) {
    let headers = new Headers();
    let accessToken: string = "1981880128746622|oEaM5iMIKzbe6640AfT9ABjlmkU";
    headers.append("Content-Type", "application/json");
    return this.http.get(BackendService.fbURL +
    "search?type=place&categories=['FOOD_BEVERAGE','ARTS_ENTERTAINMENT', 'SHOPPING_RETAIL']&fields=name,location,about,category_list,cover&center=" + lat + ", " + long +
     "&distance=1000&access_token=" + accessToken)
     .map(response => response.json())
     .map(data => {
       console.dir(data);
       let places = [];
       data["data"].forEach(place => {
           places.push(new Place(place["id"], place["name"], place["location"], place["about"]));
       });
       return places;
     })
     .catch(this.handleErrors);
   }
     private handleErrors(error: Response) {
       console.log(JSON.stringify(error.json()));
       return Observable.throw(error);
     }
}
