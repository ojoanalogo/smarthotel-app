/**
 * app.module.ts
 *
 * Declaracion de modulos y componentes
 *
 * @author Alfonso Reyes Cortés | hola@mrarc.xyz
 * @version 0.0.1
 */

/**
* Imports
*/
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { HttpModule }    from '@angular/http';

import { ComponenteLogin } from "./paginas/login/login.componente";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        ComponenteLogin,
    ],
    providers: [
        //ItemService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
