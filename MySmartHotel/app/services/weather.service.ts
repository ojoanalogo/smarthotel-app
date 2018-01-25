import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Weather } from "../models/weather.model";
import { BackendService } from "../services/backend.service";
import { getString, setString } from "application-settings";
import * as connectivity from "tns-core-modules/connectivity";
import "rxjs/add/operator/map";

@Injectable()
export class WeatherService {

  constructor(private http: Http) {}

  public getWeather(lat : string, long : string) {
    if (connectivity.getConnectionType() == connectivity.connectionType.none) {
      return Observable.throw("");
    }
    let headers = new Headers();
    let accessToken: string = "8abdb88ab21a393eb41ab41610eb50a2";
    headers.append("Content-Type", "application/json");
    return this.http.get(BackendService.weatherURL +
       "weather?APPID=" + accessToken + "&units=metric&lat=" + lat + "&lon=" + long)
     .map(response => response.json())
     .map(data => {
       let weatherObj;
       weatherObj = new Weather(data["weather"]["icon"], data["name"], data["sys"]["country"], data["main"]["temp"], data["dt"]);
       return weatherObj;
     })
     .catch(this.handleErrors);
  }
     handleErrors(error: Response) {
       console.log(JSON.stringify(error.json()));
       return Observable.throw(error);
     }

     storeWeather(weather : Weather) {
       setString("weatherData", JSON.stringify(weather));
     }

}
