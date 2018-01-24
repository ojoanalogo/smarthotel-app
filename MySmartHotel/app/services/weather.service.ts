import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Weather } from "../models/weather.model";
import { BackendService } from "../services/backend.service";
import "rxjs/add/operator/map";

@Injectable()
export class WeatherService {
  constructor(private http: Http) {}

  getWeather(lat : string, long : string) {
    let headers = new Headers();
    let accessToken: string = "8abdb88ab21a393eb41ab41610eb50a2";
    headers.append("Content-Type", "application/json");
    return this.http.get(BackendService.weatherURL + "APPID=" + accessToken + "&units=metric&weather?lat=" + lat + "&lon=" + long)
     .map(response => response.json())
     .map(data => {
       console.dir(data);
       let weatherObj;
       weatherObj = new Weather(data["weather"]["icon"], data["name"], data["sys"]["country"], data["main"]["temp"]);
       return weatherObj;
     })
     .catch(this.handleErrors);
   }
     handleErrors(error: Response) {
       console.log(JSON.stringify(error.json()));
       return Observable.throw(error);
     }
}
