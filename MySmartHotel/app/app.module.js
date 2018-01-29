"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var http_1 = require("nativescript-angular/http");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var topbar_1 = require("./components/topbar/topbar");
var login_component_1 = require("./pages/login/login.component");
var menu_component_1 = require("./pages/menu/menu.component");
var home_component_1 = require("./pages/menu/tabs/home/home.component");
var map_component_1 = require("./pages/menu/tabs/map/map.component");
var room_component_1 = require("./pages/menu/tabs/room/room.component");
var places_component_1 = require("./pages/places/places.component");
var info_modal_1 = require("./info-modal/info-modal");
var authguard_service_1 = require("./services/authguard.service");
var backend_service_1 = require("./services/backend.service");
var login_service_1 = require("./services/login.service");
var places_service_1 = require("./services/places.service");
var location_service_1 = require("./services/location.service");
var weather_service_1 = require("./services/weather.service");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var nativescript_angular_1 = require("nativescript-angular");
nativescript_angular_1.registerElement("Gradient", function () { return require("nativescript-gradient").Gradient; });
nativescript_angular_1.registerElement("Mapbox", function () { return require("nativescript-mapbox").MapboxView; });
nativescript_angular_1.registerElement("CardView", function () { return require("nativescript-cardview").CardView; });
nativescript_angular_1.registerElement("Ripple", function () { return require("nativescript-ripple").Ripple; });
nativescript_angular_1.registerElement("Fab", function () { return require("nativescript-floatingactionbutton").Fab; });
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_1.AppRoutingModule,
                forms_1.NativeScriptFormsModule,
                http_1.NativeScriptHttpModule,
                nativescript_ngx_fonticon_1.TNSFontIconModule.forRoot({
                    'fa': './assets/font-awesome.css'
                })
            ],
            declarations: [
                app_component_1.AppComponent,
                topbar_1.TopbarComponent,
                login_component_1.LoginComponent,
                menu_component_1.MenuComponent,
                home_component_1.HomeComponent,
                map_component_1.MapComponent,
                room_component_1.RoomComponent,
                places_component_1.PlacesComponent,
                info_modal_1.InfoModalComponent
            ],
            entryComponents: [info_modal_1.InfoModalComponent],
            providers: [
                backend_service_1.BackendService,
                authguard_service_1.AuthGuard,
                login_service_1.LoginService,
                places_service_1.PlacesService,
                location_service_1.LocationService,
                weather_service_1.WeatherService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        }),
        __metadata("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFFM0QsZ0ZBQThFO0FBQzlFLG9EQUFxRTtBQUNyRSxrREFBbUU7QUFFbkUsaURBQStDO0FBQy9DLDZDQUFpRDtBQUVqRCxxREFBNkQ7QUFDN0QsaUVBQStEO0FBRS9ELDhEQUE0RDtBQUM1RCx3RUFBc0U7QUFDdEUscUVBQW1FO0FBQ25FLHdFQUFzRTtBQUV0RSxvRUFBa0U7QUFFbEUsc0RBQTZEO0FBRTdELGtFQUF5RDtBQUN6RCw4REFBNEQ7QUFDNUQsMERBQXdEO0FBQ3hELDREQUEwRDtBQUMxRCxnRUFBOEQ7QUFDOUQsOERBQTREO0FBRTVELHVFQUE4RDtBQUM5RCw2REFBdUQ7QUFFdkQsc0NBQWUsQ0FBQyxVQUFVLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFFBQVEsRUFBekMsQ0FBeUMsQ0FBQyxDQUFDO0FBQzdFLHNDQUFlLENBQUMsUUFBUSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQyxVQUFVLEVBQXpDLENBQXlDLENBQUMsQ0FBQztBQUMzRSxzQ0FBZSxDQUFDLFVBQVUsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUMsUUFBUSxFQUF6QyxDQUF5QyxDQUFDLENBQUM7QUFDN0Usc0NBQWUsQ0FBQyxRQUFRLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLE1BQU0sRUFBckMsQ0FBcUMsQ0FBQyxDQUFDO0FBQ3ZFLHNDQUFlLENBQUMsS0FBSyxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxHQUFHLEVBQWhELENBQWdELENBQUMsQ0FBQztBQXdDL0U7SUFDRTtJQUNBLENBQUM7SUFGVSxTQUFTO1FBdENyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDUCx3Q0FBa0I7Z0JBQ2xCLDhCQUFnQjtnQkFDaEIsK0JBQXVCO2dCQUN2Qiw2QkFBc0I7Z0JBQ3RCLDZDQUFpQixDQUFDLE9BQU8sQ0FBQztvQkFDMUIsSUFBSSxFQUFFLDJCQUEyQjtpQkFDakMsQ0FBQzthQUNGO1lBQ0QsWUFBWSxFQUFFO2dCQUNaLDRCQUFZO2dCQUNaLHdCQUFlO2dCQUNmLGdDQUFjO2dCQUNkLDhCQUFhO2dCQUNiLDhCQUFhO2dCQUNiLDRCQUFZO2dCQUNaLDhCQUFhO2dCQUNiLGtDQUFlO2dCQUNmLCtCQUFrQjthQUNuQjtZQUNELGVBQWUsRUFBRSxDQUFDLCtCQUFrQixDQUFDO1lBQ3JDLFNBQVMsRUFBRTtnQkFDVCxnQ0FBYztnQkFDZCw2QkFBUztnQkFDVCw0QkFBWTtnQkFDWiw4QkFBYTtnQkFDYixrQ0FBZTtnQkFDZixnQ0FBYzthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7O09BRVcsU0FBUyxDQUdyQjtJQUFELGdCQUFDO0NBQUEsQUFIRCxJQUdDO0FBSFksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcclxuXHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XHJcblxyXG5pbXBvcnQgeyBUb3BiYXJDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3RvcGJhci90b3BiYXJcIjtcclxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IE1lbnVDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9tZW51L21lbnUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9tZW51L3RhYnMvaG9tZS9ob21lLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBNYXBDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9tZW51L3RhYnMvbWFwL21hcC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUm9vbUNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL21lbnUvdGFicy9yb29tL3Jvb20uY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBQbGFjZXNDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9wbGFjZXMvcGxhY2VzLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgSW5mb01vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4vaW5mby1tb2RhbC9pbmZvLW1vZGFsXCI7XHJcblxyXG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tIFwiLi9zZXJ2aWNlcy9hdXRoZ3VhcmQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2JhY2tlbmQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9sb2dpbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFBsYWNlc1NlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9wbGFjZXMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBMb2NhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9sb2NhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFdlYXRoZXJTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvd2VhdGhlci5zZXJ2aWNlXCI7XHJcblxyXG5pbXBvcnQgeyBUTlNGb250SWNvbk1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtZm9udGljb24nO1xyXG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcclxuXHJcbnJlZ2lzdGVyRWxlbWVudChcIkdyYWRpZW50XCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZ3JhZGllbnRcIikuR3JhZGllbnQpO1xyXG5yZWdpc3RlckVsZW1lbnQoXCJNYXBib3hcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1tYXBib3hcIikuTWFwYm94Vmlldyk7XHJcbnJlZ2lzdGVyRWxlbWVudChcIkNhcmRWaWV3XCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtY2FyZHZpZXdcIikuQ2FyZFZpZXcpO1xyXG5yZWdpc3RlckVsZW1lbnQoXCJSaXBwbGVcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1yaXBwbGVcIikuUmlwcGxlKTtcclxucmVnaXN0ZXJFbGVtZW50KFwiRmFiXCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZmxvYXRpbmdhY3Rpb25idXR0b25cIikuRmFiKTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBib290c3RyYXA6IFtcclxuICAgICAgICBBcHBDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcclxuICAgICAgQXBwUm91dGluZ01vZHVsZSxcclxuICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXHJcbiAgICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXHJcbiAgICAgIFROU0ZvbnRJY29uTW9kdWxlLmZvclJvb3Qoe1xyXG4gICAgXHRcdCdmYSc6ICcuL2Fzc2V0cy9mb250LWF3ZXNvbWUuY3NzJ1xyXG4gICAgXHR9KVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICBBcHBDb21wb25lbnQsXHJcbiAgICAgIFRvcGJhckNvbXBvbmVudCxcclxuICAgICAgTG9naW5Db21wb25lbnQsXHJcbiAgICAgIE1lbnVDb21wb25lbnQsXHJcbiAgICAgIEhvbWVDb21wb25lbnQsXHJcbiAgICAgIE1hcENvbXBvbmVudCxcclxuICAgICAgUm9vbUNvbXBvbmVudCxcclxuICAgICAgUGxhY2VzQ29tcG9uZW50LFxyXG4gICAgICBJbmZvTW9kYWxDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtJbmZvTW9kYWxDb21wb25lbnRdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgIEJhY2tlbmRTZXJ2aWNlLFxyXG4gICAgICBBdXRoR3VhcmQsXHJcbiAgICAgIExvZ2luU2VydmljZSxcclxuICAgICAgUGxhY2VzU2VydmljZSxcclxuICAgICAgTG9jYXRpb25TZXJ2aWNlLFxyXG4gICAgICBXZWF0aGVyU2VydmljZVxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcbn1cclxuIl19