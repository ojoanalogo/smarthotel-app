import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { HttpModule }    from '@angular/http';

import { LoginComponent } from "./pages/login/login.component";
import { MenuComponent } from "./pages/menu/menu.component";
import { TopbarComponent } from "./components/topbar";

import { AuthGuard } from "./services/authguard.service";
import { BackendService } from "./services/backend.service";

import { TNSFontIconModule } from 'nativescript-ngx-fonticon';
import { registerElement } from "nativescript-angular";

registerElement("Gradient", () => require("nativescript-gradient").Gradient);
registerElement("Ripple", () => require("nativescript-ripple").Ripple);
registerElement("CardView", () => require("nativescript-cardview").CardView);
registerElement("Fab", () => require("nativescript-floatingactionbutton").Fab);

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule,
        HttpModule,
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
       AuthGuard
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class AppModule { }
