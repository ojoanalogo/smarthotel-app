/**
@name: MySmartHotel
@author: Alfonso Reyes Cortés (arc980103@gmail.com)
@desc: Servicio de login
**/

// Imports del servicio
import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { User } from "../models/user.model";
import { BackendService } from "../services/backend.service";
import { Router } from "@angular/router";
import * as connectivity from "tns-core-modules/connectivity";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

// Registro del servicio
@Injectable()
export class LoginService {
  // Constructor del servicio
  constructor(private http: Http, private router: Router) { }

  /**
  * Validar datos de usuario para acceder
  * @param {User} user - Objeto usuario
  * @returns {Observable<data>} - Retorna un objeto observable con el estatus de la solicitud y datos en caso de valida
  */
  login(user: User) : Observable<any> {
    if (connectivity.getConnectionType() == connectivity.connectionType.none) {
      return Observable.throw("");
    }
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.post(
      BackendService.apiURL + "/authme",
      JSON.stringify({
        correo: user.email,
        clave: user.password,
        fcm: BackendService.fcmToken
      }),
      { headers: headers }
    )
      .map(response => response.json())
      .do(data => {
        return data;
      })
      .catch(this.handleErrors);
  }

  /**
  * Valida que el usuario aun tenga acceso a la aplicación
  * @param {User} user - Objeto usuario
  * @returns {Observable<any>} - Retorna un objeto observable con el estatus
  */
  checkReservation(user: User) : Observable<any> {
    if (connectivity.getConnectionType() == connectivity.connectionType.none) {
      return Observable.throw("");
    }
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.post(
      BackendService.apiURL + "/api/huespedes/checarReservacion",
      JSON.stringify({
        correo: user.email
      }),
      { headers: headers }
    )
      .map(response => response.json())
      .do(data => {
        return data;
      })
      .catch(this.handleErrors);
  }

  /**
  * Cierra la sesión del usuario y borra los datos almacenados
  */
  logout() : void {
    BackendService.token = "";
    BackendService.userData = new User("", "", "", "", "", "", 0);
    this.router.navigate(["/login"]);
  }

  /**
  * Handler errores
  * @param {Response} error - Objeto response Http
  * @return {Observable<error>} - Retorna un objeto observable de tipo error
  */
  handleErrors(error: Response) : Observable<any> {
    return Observable.throw(error.json());
  }
}
