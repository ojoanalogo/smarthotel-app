/**
@name: MySmartHotel
@author: Alfonso Reyes Cortés (arc980103@gmail.com)
@desc: Servicio Authguard
**/

// Imports del servicio
import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

import { BackendService } from "../services/backend.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate() {
    if (BackendService.isLoggedIn()) {
      return true;
    }
    else {
      this.router.navigate(["/login"]);
      return false;
    }
  }
}
