/**
 * app.routing.ts
 *
 * Manejo de rutas de la aplicación
 *
 * @author Alfonso Reyes Cortés | hola@mrarc.xyz
 * @version 0.0.1
 */

/**
* Imports
*/
import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ComponenteLogin } from "./paginas/login/login.componente";

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: ComponenteLogin }
    //{ path: "item/:id", component: ItemDetailComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
