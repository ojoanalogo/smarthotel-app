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
import { RoomComponent } from "./pages/menu/tabs/room/room.component";
import { CleaningComponent } from "./pages/menu/tabs/room/cleaning/cleaning.component";

import { PlacesComponent } from "./pages/places/places.component";

import { InfoModalComponent } from "./info-modal/info-modal";

import { AuthGuard } from "./services/authguard.service";
import { BackendService } from "./services/backend.service";
import { LoginService } from "./services/login.service";
import { PlacesService } from "./services/places.service";
import { LocationService } from "./services/location.service";
import { WeatherService } from "./services/weather.service";
import { RoomService } from "./services/room.service";

import { TNSFontIconModule } from 'nativescript-ngx-fonticon';
import { TNSCheckBoxModule } from 'nativescript-checkbox/angular';
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
      TNSCheckBoxModule,
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
      MapComponent,
      RoomComponent,
      CleaningComponent,
      PlacesComponent,
      InfoModalComponent
    ],
    entryComponents: [InfoModalComponent],
    providers: [
      BackendService,
      AuthGuard,
      LoginService,
      PlacesService,
      LocationService,
      WeatherService,
      RoomService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class AppModule {
  constructor() {
  }
}
