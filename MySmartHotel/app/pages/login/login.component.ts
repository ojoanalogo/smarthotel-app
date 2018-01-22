import { Component, OnInit } from '@angular/core';
import { Page } from "ui/page";
import { Router } from "@angular/router";
import { User } from "../../models/user.model";
import { LoginService } from "../../services/login.service";
import { TNSFontIconService } from 'nativescript-ngx-fonticon';
import { TNSFancyAlert, TNSFancyAlertButton } from 'nativescript-fancyalert';
import { Validator } from "class-validator";
import { LoadingIndicator } from "nativescript-loading-indicator";

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
    this.user = new User();
    this.user.email = "arc980103@gmail.com";
    this.user.password = "comodorops3";
    this.loader = new LoadingIndicator();
   }
  ngOnInit() : void {
    this.page.actionBarHidden = true;
    this.page.backgroundColor = "#03A9F4";
  }

  login() : void {
    if(this.validate(this.user)) {
      this.loader.show({message:"Comprobando datos"});
    this.loginService.login(this.user).subscribe(()=>{
      this.loader.hide();
      this.router.navigate(["/menu"])
    },
    (res) => {
      this.loader.hide();
      TNSFancyAlert.showError("Datos incorrectos", "Correo/clave no validos", "Entendido");
    }
   );
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
