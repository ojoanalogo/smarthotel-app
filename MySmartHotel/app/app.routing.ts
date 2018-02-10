import { NgModule } from "@angular/core";
import { Routes, CanActivate } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { MenuComponent } from "./pages/menu/menu.component";
import { CleaningComponent } from "./pages/menu/tabs/room/cleaning/cleaning.component";
import { LoginComponent } from "./pages/login/login.component";
import { PlacesComponent } from "./pages/places/places.component";
import { AuthGuard } from "./services/authguard.service";

const routes: Routes = [
    { path: "", redirectTo: "/menu", pathMatch: "full" },
    { path: "login", component: LoginComponent},
    { path: "menu", component: MenuComponent, canActivate:[AuthGuard]},
    { path: "cleaning", component: CleaningComponent, canActivate:[AuthGuard]},
    { path: "places/:id", component: PlacesComponent, canActivate:[AuthGuard]}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
