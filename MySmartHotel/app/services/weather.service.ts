/**
@name: MySmartHotel
@author: Alfonso Reyes Cortés (arc980103@gmail.com)
@desc: Servicio de clima de la aplicación
**/

// Imports del servicio
import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Weather } from "../models/weather.model";
import { Location } from "../models/location.model";
import { BackendService } from "../services/backend.service";
import * as appSettings from "application-settings";
import * as connectivity from "tns-core-modules/connectivity";
import "rxjs/add/operator/map";

// Registro del servicio
@Injectable()
export class WeatherService {

  // Constructor del servicio
  constructor(private http: Http) { }

  /**
  * Retorna un objeto de tipo "Weather" al hacer una llamada al servicio de OpenWeather
  * @param {Location} location - Objeto location con latitud y longitud.
  * @returns {Observable<Weather>} - Retorna un observable con el objeto Weather
  */
  public getWeather(location: Location): Observable<Weather> {
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

  /**
  * Retorna un condicional si el clima guardado en la base de datos local ya tiene más de 1 hora almacenado
  * @returns {boolean} - Retorna si es necesario actualizar
  */
  public shouldUpdate(): boolean {
    if (appSettings.getString("weatherData") == undefined) {
      return true;
    }
    let currentDate = new Date();
    let storedDate = new Date(this.getSavedWeather().date);
    let diff = currentDate.getTime() - storedDate.getTime();
    return diff / 60000 > 80;
  }

  /**
  * Almacena el objeto Weather en la base de datos local
  * @param {Weather} weather - Objeto Weather
  */
  public storeWeather(weather: Weather): void {
    appSettings.setString("weatherData", JSON.stringify(weather));
  }

  /**
  * Retorna el objeto Weather almacenado en la base de datos local
  * @return {Weather} - Objeto Weather
  */
  public getSavedWeather() : Weather {
    return JSON.parse(appSettings.getString("weatherData", "novalue"));
  }

}
