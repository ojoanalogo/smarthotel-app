import { Injectable } from "@angular/core";
import { getString, setString } from "application-settings";

@Injectable()
export class PlacesStorage {

  static get token() : string {
    return getString("token");
  }
  static set places(userToken : string) {
    setString("places", userToken);
  }

}
