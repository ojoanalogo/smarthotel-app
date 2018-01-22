import * as application from 'application';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { LoginComponent } from "./pages/login/login.component";
import { MenuComponent } from "./pages/menu/menu.component";
import { TopbarComponent } from "./components/topbar";

import { AuthGuard } from "./services/authguard.service";
import { BackendService } from "./services/backend.service";
import { LoginService } from "./services/login.service";

import { TNSFontIconModule } from 'nativescript-ngx-fonticon';
import { registerElement } from "nativescript-angular";

let nsFacebook = require('nativescript-facebook');

application.on(application.launchEvent, function (args) {
    nsFacebook.init("1981880128746622");
});

registerElement("Gradient", () => require("nativescript-gradient").Gradient);
registerElement("Mapbox", () => require("nativescript-mapbox").MapboxView);
registerElement("CardView", () => require("nativescript-cardview").CardView);

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule,
        TNSFontIconModule.forRoot({
    			'fa': './assets/font-awesome.css'
    		})
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        MenuComponent,
        TopbarComponent
    ],
    providers: [
      BackendService,
       AuthGuard,
       LoginService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class AppModule { }
