import { Component, OnInit } from '@angular/core';
import { Page } from "ui/page";
import { Router } from "@angular/router";
import { User } from "../../models/user.model";
import { LoginService } from "../../services/login.service";
import { TNSFontIconService } from 'nativescript-ngx-fonticon';
import { TNSFancyAlert } from 'nativescript-fancyalert';
import { Validator } from "class-validator";
import { LoadingIndicator } from "nativescript-loading-indicator";
import { BackendService } from "../../services/backend.service";
import { Color } from "color";

@Component({
  selector: 'login',
  templateUrl: 'pages/login/login.html',
  styleUrls: ["pages/login/login-global.css", "pages/login/login.css"]
})

export class LoginComponent implements OnInit {
  user: User;
  registering = false;
  loader: LoadingIndicator;
  constructor(private page : Page, private router : Router, private icon : TNSFontIconService, private loginService : LoginService) {
    this.user = new User("","","","","","",0);
    this.loader = new LoadingIndicator();
   }
  ngOnInit() : void {
    this.page.actionBarHidden = true;
    this.page.backgroundColor = "#03A9F4";
    this.page.backgroundSpanUnderStatusBar = true;
  }

  login() : void {
    if(this.validate(this.user)) {
      this.loader.show({message:"Comprobando datos"});
    this.loginService.login(this.user).subscribe((res)=>{
      this.loader.hide();
      if (res.code === 1 && res.response.token) {
        let dRes = res.response.userData[0];
        BackendService.userData = new User(dRes.huesped_correo, "", dRes.huesped_nombre,
         dRes.huesped_apellido, dRes.reservacion_desde, dRes.reservacion_hasta, dRes.habitacion_numero);
        BackendService.token = res.response.token;
        this.router.navigate(["/menu"]);
      }
      if (res.code === 2) {
        TNSFancyAlert.showWarning("No estás hospedado", "Ve a recepción si crees que es un error", "Entendido");
      }
    },
    (res) => {
      this.loader.hide();
      console.dir(res);
      TNSFancyAlert.showError("Datos incorrectos", "Correo/clave no validos", "Entendido");
    });
    }
  }

  validate(user) : boolean {
    const validator = new Validator();
    if(validator.isEmpty(user.email)) {
      TNSFancyAlert.showWarning("Campo vacío", "Introduce tu e-mail", "Entendido");
      return false;
    }
    if(!validator.isEmail(user.email)) {
      TNSFancyAlert.showWarning("E-mail no valido", "Introduce un e-mail valido", "Entendido");
      return false;
    }
    if(validator.isEmpty(user.password)) {
      TNSFancyAlert.showWarning("Contraseña no valida", "Debes introducir una constraseña", "Entendido");
      return false;
    }
    if(validator.min(user.password, 8)) {
      TNSFancyAlert.showWarning("Contraseña muy corta", "Debes introducir una constraseña mayor a 8 caracteres", "Entendido");
      return false;
    }
    return true;
  }
}
