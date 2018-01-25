import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { User } from "../models/user.model";
import { BackendService } from "../services/backend.service";
import * as connectivity from "tns-core-modules/connectivity";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

@Injectable()
export class LoginService {

    constructor(private http: Http) {}

    login(user: User) {
      if (connectivity.getConnectionType() == connectivity.connectionType.none) {
        return Observable.throw("");
      }
      let headers = new Headers();
      headers.append("Content-Type", "application/json");
      return this.http.post(
        BackendService.apiURL + "/authme",
        JSON.stringify({
          correo: user.email,
          clave: user.password
        }),
        { headers: headers }
      )
      .map(response => response.json())
      .do(data => {
         if (data.code === 1 && data.response.token) {
           BackendService.token = data.response.token;
           return data;
         }
      })
      .catch(this.handleErrors);
    }

      handleErrors(error: Response) {
        console.log(JSON.stringify(error.json()));
        return Observable.throw(error);
      }
}
