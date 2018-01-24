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
var authguard_service_1 = require("./services/authguard.service");
var backend_service_1 = require("./services/backend.service");
var login_service_1 = require("./services/login.service");
var places_service_1 = require("./services/places.service");
var location_service_1 = require("./services/location.service");
var weather_service_1 = require("./services/weather.service");
var places_storage_service_1 = require("./services/places-storage.service");
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
                map_component_1.MapComponent
            ],
            providers: [
                backend_service_1.BackendService,
                authguard_service_1.AuthGuard,
                login_service_1.LoginService,
                places_service_1.PlacesService,
                places_storage_service_1.PlacesStorage,
                location_service_1.LocationService,
                weather_service_1.WeatherService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFFM0QsZ0ZBQThFO0FBQzlFLG9EQUFxRTtBQUNyRSxrREFBbUU7QUFFbkUsaURBQStDO0FBQy9DLDZDQUFpRDtBQUVqRCxxREFBNkQ7QUFDN0QsaUVBQStEO0FBQy9ELDhEQUE0RDtBQUM1RCx3RUFBc0U7QUFDdEUscUVBQW1FO0FBRW5FLGtFQUF5RDtBQUN6RCw4REFBNEQ7QUFDNUQsMERBQXdEO0FBQ3hELDREQUEwRDtBQUMxRCxnRUFBOEQ7QUFDOUQsOERBQTREO0FBQzVELDRFQUFrRTtBQUVsRSx1RUFBOEQ7QUFDOUQsNkRBQXVEO0FBRXZELHNDQUFlLENBQUMsVUFBVSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxRQUFRLEVBQXpDLENBQXlDLENBQUMsQ0FBQztBQUM3RSxzQ0FBZSxDQUFDLFFBQVEsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUMsVUFBVSxFQUF6QyxDQUF5QyxDQUFDLENBQUM7QUFDM0Usc0NBQWUsQ0FBQyxVQUFVLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFFBQVEsRUFBekMsQ0FBeUMsQ0FBQyxDQUFDO0FBQzdFLHNDQUFlLENBQUMsUUFBUSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQyxNQUFNLEVBQXJDLENBQXFDLENBQUMsQ0FBQztBQUN2RSxzQ0FBZSxDQUFDLEtBQUssRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsR0FBRyxFQUFoRCxDQUFnRCxDQUFDLENBQUM7QUFxQy9FO0lBQUE7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUFuQ3JCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLHdDQUFrQjtnQkFDbEIsOEJBQWdCO2dCQUNoQiwrQkFBdUI7Z0JBQ3ZCLDZCQUFzQjtnQkFDdEIsNkNBQWlCLENBQUMsT0FBTyxDQUFDO29CQUMxQixJQUFJLEVBQUUsMkJBQTJCO2lCQUNqQyxDQUFDO2FBQ0Y7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osNEJBQVk7Z0JBQ1osd0JBQWU7Z0JBQ2YsZ0NBQWM7Z0JBQ2QsOEJBQWE7Z0JBQ2IsOEJBQWE7Z0JBQ2IsNEJBQVk7YUFDYjtZQUNELFNBQVMsRUFBRTtnQkFDVCxnQ0FBYztnQkFDZCw2QkFBUztnQkFDVCw0QkFBWTtnQkFDWiw4QkFBYTtnQkFDYixzQ0FBYTtnQkFDYixrQ0FBZTtnQkFDZixnQ0FBYzthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FFVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcclxuXHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XHJcblxyXG5pbXBvcnQgeyBUb3BiYXJDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3RvcGJhci90b3BiYXJcIjtcclxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTWVudUNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL21lbnUvbWVudS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL21lbnUvdGFicy9ob21lL2hvbWUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL21lbnUvdGFicy9tYXAvbWFwLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSBcIi4vc2VydmljZXMvYXV0aGd1YXJkLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9iYWNrZW5kLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvbG9naW4uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBQbGFjZXNTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvcGxhY2VzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTG9jYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvbG9jYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBXZWF0aGVyU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3dlYXRoZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBQbGFjZXNTdG9yYWdlIH0gZnJvbSBcIi4vc2VydmljZXMvcGxhY2VzLXN0b3JhZ2Uuc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgVE5TRm9udEljb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcclxuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XHJcblxyXG5yZWdpc3RlckVsZW1lbnQoXCJHcmFkaWVudFwiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWdyYWRpZW50XCIpLkdyYWRpZW50KTtcclxucmVnaXN0ZXJFbGVtZW50KFwiTWFwYm94XCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtbWFwYm94XCIpLk1hcGJveFZpZXcpO1xyXG5yZWdpc3RlckVsZW1lbnQoXCJDYXJkVmlld1wiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWNhcmR2aWV3XCIpLkNhcmRWaWV3KTtcclxucmVnaXN0ZXJFbGVtZW50KFwiUmlwcGxlXCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcmlwcGxlXCIpLlJpcHBsZSk7XHJcbnJlZ2lzdGVyRWxlbWVudChcIkZhYlwiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWZsb2F0aW5nYWN0aW9uYnV0dG9uXCIpLkZhYik7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgYm9vdHN0cmFwOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXHJcbiAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxyXG4gICAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxyXG4gICAgICBUTlNGb250SWNvbk1vZHVsZS5mb3JSb290KHtcclxuICAgIFx0XHQnZmEnOiAnLi9hc3NldHMvZm9udC1hd2Vzb21lLmNzcydcclxuICAgIFx0fSlcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgQXBwQ29tcG9uZW50LFxyXG4gICAgICBUb3BiYXJDb21wb25lbnQsXHJcbiAgICAgIExvZ2luQ29tcG9uZW50LFxyXG4gICAgICBNZW51Q29tcG9uZW50LFxyXG4gICAgICBIb21lQ29tcG9uZW50LFxyXG4gICAgICBNYXBDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgQmFja2VuZFNlcnZpY2UsXHJcbiAgICAgIEF1dGhHdWFyZCxcclxuICAgICAgTG9naW5TZXJ2aWNlLFxyXG4gICAgICBQbGFjZXNTZXJ2aWNlLFxyXG4gICAgICBQbGFjZXNTdG9yYWdlLFxyXG4gICAgICBMb2NhdGlvblNlcnZpY2UsXHJcbiAgICAgIFdlYXRoZXJTZXJ2aWNlXHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XHJcbiJdfQ==