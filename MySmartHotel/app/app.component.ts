/**
@name: MySmartHotel
@author: Alfonso Reyes Cortés (arc980103@gmail.com)
@desc: Componente principal para registrar Page Outlet
**/

// Imports del componente
import { Component } from "@angular/core";
import { initializeOnAngular } from 'nativescript-image-cache';

// Registro del componente
@Component({
    selector: "app",
    template: "<page-router-outlet></page-router-outlet>",
})

export class AppComponent {
  constructor() {
    initializeOnAngular();
  }
}
