import { Injectable } from "@angular/core";
import { getString, setString } from "application-settings";

const userToken = "token";

@Injectable()
export class BackendService {

  static apiURL = "http://2b44b59f.ngrok.io";
  static fbURL = "https://graph.facebook.com/v2.9";

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
