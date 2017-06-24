/**
 * @name login.componente.ts
 *
 * Componente para la página Login
 *
 * @author Alfonso Reyes Cortés | hola@mrarc.xyz
 */

/**
* Imports
*/
import {Component, OnInit } from '@angular/core';
import { Page } from "ui/page";
import { Usuario } from "../../compartido/usuario/Usuario";

@Component({
  selector: 'login',
  templateUrl: 'paginas/login/login.html',
  styleUrls: ["paginas/login/login-global.css", "paginas/login/login.css"]
})
export class ComponenteLogin implements OnInit {
  usuario: Usuario;
  constructor(private page : Page) {
    this.usuario = new Usuario();
   }
  ngOnInit() {
    this.page.actionBarHidden = true;
    this.page.backgroundImage = "~/recursos/playa.jpg";
  }
  touch(){
    console.log("HOLA");
  }
  acceder() {
    alert(this.usuario.correo);
  }
}