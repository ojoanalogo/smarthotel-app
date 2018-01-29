import { Component } from "@angular/core";
import { initializeOnAngular } from 'nativescript-image-cache';

@Component({
    selector: "app",
    template: "<page-router-outlet></page-router-outlet>",
})
export class AppComponent {
  constructor() {
    initializeOnAngular();
  }
}
