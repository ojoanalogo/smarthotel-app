/**
 * app.component.ts
 *
 * Declaraciones e inicializar el modulo app con NativeScript
 *
 * @author Alfonso Reyes Cortés | hola@mrarc.xyz
 * @version 0.0.1
 */

/**
* Imports
*/
import { Component } from "@angular/core";
//import { Sidedrawer } from "./sidedrawer";

@Component({
    selector: "app",
    template: "<page-router-outlet></page-router-outlet>",
})
export class AppComponent {
  constructor() {
    //new Sidedrawer().construir();
  }
}
