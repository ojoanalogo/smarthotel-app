import { Injectable } from "@angular/core";
import {Http, Response, Headers } from "@angular/http";
import { Configuracion } from "../../compartido/configuracion";
import { Usuario } from "../../compartido/usuario/Usuario";
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/map';
import "rxjs/add/operator/do";

@Injectable()
export class ServicioUsuario {
  constructor(private http : Http) { }

  login(usuario : Usuario) {
    let cabeceras = new Headers();
    cabeceras.append("Content-Type", "application/json");
    return this.http.get(
  Configuracion.apiURL + "usuario/clave/",
  JSON.stringify({
    cuarto: usuario.cuarto,
    clave: usuario.clave,
  })
)
.map(response => response.json())
.do(data => {
  console.dir(data);
  //Configuracion.token = data.Result.access_token;
})
.catch(this.handleErrors);
  }

  handleErrors(error: Response) {
    console.log("ERRORRR");
    return Observable.throw(error);
  }

}
