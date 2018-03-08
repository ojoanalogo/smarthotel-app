/**
@name: MySmartHotel
@author: Alfonso Reyes Cortés (arc980103@gmail.com)
@desc: Servicio de habitación de la aplicación
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
export class RoomService {

  // Constructor del servicio
  constructor(private http: Http, private router : Router) {}

  /**
  * Hace una llamada al servidor e introduce una solicitud de limpieza
  * @param {User} user - Objeto User
  * @param {string} notes - Una cadena de texto con algun texto
  * @return {Observable<data>} Retorna un objeto observable con el estatus de la solicitud
  */
  cleaningRequest(user: User, notes : string) : Observable<any> {
     if (connectivity.getConnectionType() == connectivity.connectionType.none) {
      return Observable.throw("");
    }
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.post(
      BackendService.apiURL + "/api/hotel/solicitarLimpieza",
      JSON.stringify({
        token: BackendService.token,
        correo: user.email,
        habitacion: user.room,
        notas: notes
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
  * Modifica un estatus de la habitación
  * @param {number} room - Numero de la habitación
  * @param {string} feed - El id a modificar (ej: tv, a/c, foco)
  * @param {number} data? - valor opcional
  * @return {Observable<data>} - Retorna un objeto observable con el estatus de la solicitud
  */
  setRoomData(room : number, feed : string, data? : number) : Observable<any> {
     if (connectivity.getConnectionType() == connectivity.connectionType.none) {
      return Observable.throw("");
    }
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.post(
      BackendService.apiURL + "/api/mobile/iot/" + room + "/modificarDato",
      JSON.stringify({
        token: BackendService.token,
        feed : feed,
        data: data
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
  * Obtiene la información de la habitación
  * @param {number} room - Numero de la habitación
  * @return {Observable<data>} - Retorna un objeto observable con el estatus de la solicitud
  */
  getRoomData(room : number) : Observable<any> {
     if (connectivity.getConnectionType() == connectivity.connectionType.none) {
      return Observable.throw("");
    }
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.post(
      BackendService.apiURL + "/api/mobile/iot/" + room + "/obtenerDatos",
      JSON.stringify({
        token: BackendService.token
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
  * Handler errores
  * @param {Response} error - Objeto response Http
  * @return {Observable<error>} - Retorna un objeto observable de tipo error
  */
    handleErrors(error: Response) : Observable<any> {
      console.log(JSON.stringify(error.json()));
      return Observable.throw(error);
    }
  }
