import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing";

import { TopbarComponent } from "./components/topbar/topbar";
import { LoginComponent } from "./pages/login/login.component";
import { MenuComponent } from "./pages/menu/menu.component";
import { HomeComponent } from "./pages/menu/tabs/home/home.component";
import { MapComponent } from "./pages/menu/tabs/map/map.component";

import { AuthGuard } from "./services/authguard.service";
import { BackendService } from "./services/backend.service";
import { LoginService } from "./services/login.service";
import { PlacesService } from "./services/places.service";
import { LocationService } from "./services/location.service";
import { WeatherService } from "./services/weather.service";
import { PlacesStorage } from "./services/places-storage.service";

import { TNSFontIconModule } from 'nativescript-ngx-fonticon';
import { registerElement } from "nativescript-angular";

registerElement("Gradient", () => require("nativescript-gradient").Gradient);
registerElement("Mapbox", () => require("nativescript-mapbox").MapboxView);
registerElement("CardView", () => require("nativescript-cardview").CardView);
registerElement("Ripple", () => require("nativescript-ripple").Ripple);
registerElement("Fab", () => require("nativescript-floatingactionbutton").Fab);

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
      TopbarComponent,
      LoginComponent,
      MenuComponent,
      HomeComponent,
      MapComponent
    ],
    providers: [
      BackendService,
      AuthGuard,
      LoginService,
      PlacesService,
      PlacesStorage,
      LocationService,
      WeatherService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class AppModule { }
