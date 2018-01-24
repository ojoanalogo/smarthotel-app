import { Injectable } from "@angular/core";
import { getString, setString } from "application-settings";

const userToken = "token";

@Injectable()
export class BackendService {

  static apiURL = "http://c9c9ffeb.ngrok.io";
  static fbURL = "https://graph.facebook.com/v2.9/";
  static weatherURL = "https://api.openweathermap.org/data/2.5/";

static isLoggedIn() : boolean {
  return !!getString("token");
}

  static get token() : string {
    return getString("token");
  }
  static set token(userToken : string) {
    setString("token", userToken);
  }

}
