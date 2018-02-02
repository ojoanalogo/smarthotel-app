import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Weather } from "../models/weather.model";
import { Location } from "../models/location.model";
import { BackendService } from "../services/backend.service";
import * as appSettings from "application-settings";
import * as connectivity from "tns-core-modules/connectivity";
import "rxjs/add/operator/map";

@Injectable()
export class WeatherService {

  constructor(private http: Http) { }

  public getWeather(location: Location): Observable<any> {
    if (connectivity.getConnectionType() == connectivity.connectionType.none) {
      return Observable.throw("");
    }
    let accessToken: string = "8abdb88ab21a393eb41ab41610eb50a2";
    return this.http.get(BackendService.weatherURL +
      "weather?APPID=" + accessToken + "&units=metric&lat=" + location.latitude.toString() + "&lon=" + location.longitude.toString())
      .map(response => response.json())
      .map(data => {
        let weatherObj: Weather;
        let date = new Date().toString();
        weatherObj = new Weather(data["weather"]["icon"], data["name"], data["sys"]["country"], data["main"]["temp"], date);
        this.storeWeather(weatherObj);
        return weatherObj;
      })
      .catch((response: Response) => {
        return Observable.throw(response);
      });
  }

  public shouldUpdate(): boolean {
    if (appSettings.getString("weatherData") == undefined) {
      return true;
    }
    let currentDate = new Date();
    let storedDate = new Date(this.getSavedWeather().date);
    let diff = currentDate.getTime() - storedDate.getTime();
    return diff / 60000 > 80;
  }
  public storeWeather(weather: Weather): void {
    appSettings.setString("weatherData", JSON.stringify(weather));
  }
  public getSavedWeather(): Weather {
    return JSON.parse(appSettings.getString("weatherData", "novalue"));
  }

}
