import { Injectable } from "@angular/core";
import { getString, setString } from "application-settings";

const userToken = "token";

@Injectable()
export class BackendService {

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
