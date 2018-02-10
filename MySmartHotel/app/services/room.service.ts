import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { User } from "../models/user.model";
import { BackendService } from "../services/backend.service";
import * as connectivity from "tns-core-modules/connectivity";
import { Router } from "@angular/router";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

@Injectable()
export class RoomService {
  constructor(private http: Http, private router : Router) {}
  cleaningRequest(user: User, notes : String) {
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

  getRoomData(room : number) {
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

    handleErrors(error: Response) {
      console.dir(JSON.stringify(error.json()));
      return Observable.throw(error);
    }
  }
