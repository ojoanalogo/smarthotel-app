import { Injectable } from "@angular/core";
import { getString, setString } from "application-settings";
import { User } from "../models/user.model";
const userToken = "token";

@Injectable()
export class BackendService {

  static apiURL = "http://b3fbcd86.ngrok.io";
  static placesGoogleURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
  static photosGoogleURL = "https://maps.googleapis.com/maps/api/place/photo?";
  static weatherURL = "https://api.openweathermap.org/data/2.5/";

  static isLoggedIn(): boolean {
    return !!getString("token");
  }

  static get token(): string {
    return getString("token");
  }
  
  static set token(userToken: string) {
    setString("token", userToken);
  }

  static get userData(): User {
    return JSON.parse(getString("userData"));
  }

  static set userData(user : User) {
    setString("userData", JSON.stringify(user));
  }
}
