/**
@name: MySmartHotel
@author: Alfonso Reyes Cortés (arc980103@gmail.com)
@desc: Servicio Backend
**/

// Imports del servicio
import { Injectable } from "@angular/core";
import { getString, setString } from "application-settings";
import { User } from "../models/user.model";
const userToken = "token";

// Registro del servicio
@Injectable()
export class BackendService {

  static apiURL = "http://mrarc.xyz"; //url del servidor con API
  static placesGoogleURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
  static photosGoogleURL = "https://maps.googleapis.com/maps/api/place/photo?";
  static fbURL = "https://graph.facebook.com/v2.12/";
  static weatherURL = "https://api.openweathermap.org/data/2.5/";

  // retorna si hay token guardado
  static isLoggedIn(): boolean {
    return !!getString("token");
  }

  // retorna el token de usuario
  static get token(): string {
    return getString("token");
  }

  // establece el token de usuario
  static set token(userToken: string) {
    setString("token", userToken);
  }

  // establece el token FCM
  static set fcmToken(fcmToken : string) {
    setString("fcmToken", fcmToken);
  }

  // obtiene el token FCM
  static get fcmToken() : string {
    return getString("fcmToken");
  }

  /**
  * Retorna los datos de usuario guardados
  * @return {User} objeto usuario almacenado en la base de datos local
  */
  static get userData(): User {
    return JSON.parse(getString("userData"));
  }

  /**
  * Guarda el usuario en la base de datos local
  * @param {User} user - Objeto usuario
  */
  static set userData(user : User) {
    setString("userData", JSON.stringify(user));
  }
}
