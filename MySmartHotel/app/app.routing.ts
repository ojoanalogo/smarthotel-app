import { NgModule } from "@angular/core";
import { Routes, CanActivate } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { MenuComponent } from "./pages/menu/menu.component";
import { LoginComponent } from "./pages/login/login.component";
import { AuthGuard } from "./services/authguard.service";

const routes: Routes = [
    { path: "", redirectTo: "/menu", pathMatch: "full" },
    { path: "login", component: LoginComponent},
    { path: "menu", component: MenuComponent, canActivate:[AuthGuard]}
    //{ path: "item/:id", component: ItemDetailComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
