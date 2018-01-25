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
var places_component_1 = require("./pages/places/places.component");
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
                map_component_1.MapComponent,
                places_component_1.PlacesComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFFM0QsZ0ZBQThFO0FBQzlFLG9EQUFxRTtBQUNyRSxrREFBbUU7QUFFbkUsaURBQStDO0FBQy9DLDZDQUFpRDtBQUVqRCxxREFBNkQ7QUFDN0QsaUVBQStEO0FBRS9ELDhEQUE0RDtBQUM1RCx3RUFBc0U7QUFDdEUscUVBQW1FO0FBRW5FLG9FQUFrRTtBQUVsRSxrRUFBeUQ7QUFDekQsOERBQTREO0FBQzVELDBEQUF3RDtBQUN4RCw0REFBMEQ7QUFDMUQsZ0VBQThEO0FBQzlELDhEQUE0RDtBQUM1RCw0RUFBa0U7QUFFbEUsdUVBQThEO0FBQzlELDZEQUF1RDtBQUV2RCxzQ0FBZSxDQUFDLFVBQVUsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUMsUUFBUSxFQUF6QyxDQUF5QyxDQUFDLENBQUM7QUFDN0Usc0NBQWUsQ0FBQyxRQUFRLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLFVBQVUsRUFBekMsQ0FBeUMsQ0FBQyxDQUFDO0FBQzNFLHNDQUFlLENBQUMsVUFBVSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxRQUFRLEVBQXpDLENBQXlDLENBQUMsQ0FBQztBQUM3RSxzQ0FBZSxDQUFDLFFBQVEsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUMsTUFBTSxFQUFyQyxDQUFxQyxDQUFDLENBQUM7QUFDdkUsc0NBQWUsQ0FBQyxLQUFLLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLEdBQUcsRUFBaEQsQ0FBZ0QsQ0FBQyxDQUFDO0FBc0MvRTtJQUFBO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBcENyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDUCx3Q0FBa0I7Z0JBQ2xCLDhCQUFnQjtnQkFDaEIsK0JBQXVCO2dCQUN2Qiw2QkFBc0I7Z0JBQ3RCLDZDQUFpQixDQUFDLE9BQU8sQ0FBQztvQkFDMUIsSUFBSSxFQUFFLDJCQUEyQjtpQkFDakMsQ0FBQzthQUNGO1lBQ0QsWUFBWSxFQUFFO2dCQUNaLDRCQUFZO2dCQUNaLHdCQUFlO2dCQUNmLGdDQUFjO2dCQUNkLDhCQUFhO2dCQUNiLDhCQUFhO2dCQUNiLDRCQUFZO2dCQUNaLGtDQUFlO2FBQ2hCO1lBQ0QsU0FBUyxFQUFFO2dCQUNULGdDQUFjO2dCQUNkLDZCQUFTO2dCQUNULDRCQUFZO2dCQUNaLDhCQUFhO2dCQUNiLHNDQUFhO2dCQUNiLGtDQUFlO2dCQUNmLGdDQUFjO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUVXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xyXG5cclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcclxuXHJcbmltcG9ydCB7IFRvcGJhckNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvdG9wYmFyL3RvcGJhclwiO1xyXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgTWVudUNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL21lbnUvbWVudS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL21lbnUvdGFicy9ob21lL2hvbWUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE1hcENvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL21lbnUvdGFicy9tYXAvbWFwLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgUGxhY2VzQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvcGxhY2VzL3BsYWNlcy5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IEF1dGhHdWFyZCB9IGZyb20gXCIuL3NlcnZpY2VzL2F1dGhndWFyZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvYmFja2VuZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2xvZ2luLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUGxhY2VzU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3BsYWNlcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IExvY2F0aW9uU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2xvY2F0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgV2VhdGhlclNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy93ZWF0aGVyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUGxhY2VzU3RvcmFnZSB9IGZyb20gXCIuL3NlcnZpY2VzL3BsYWNlcy1zdG9yYWdlLnNlcnZpY2VcIjtcclxuXHJcbmltcG9ydCB7IFROU0ZvbnRJY29uTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XHJcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xyXG5cclxucmVnaXN0ZXJFbGVtZW50KFwiR3JhZGllbnRcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1ncmFkaWVudFwiKS5HcmFkaWVudCk7XHJcbnJlZ2lzdGVyRWxlbWVudChcIk1hcGJveFwiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LW1hcGJveFwiKS5NYXBib3hWaWV3KTtcclxucmVnaXN0ZXJFbGVtZW50KFwiQ2FyZFZpZXdcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1jYXJkdmlld1wiKS5DYXJkVmlldyk7XHJcbnJlZ2lzdGVyRWxlbWVudChcIlJpcHBsZVwiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXJpcHBsZVwiKS5SaXBwbGUpO1xyXG5yZWdpc3RlckVsZW1lbnQoXCJGYWJcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1mbG9hdGluZ2FjdGlvbmJ1dHRvblwiKS5GYWIpO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGJvb3RzdHJhcDogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxyXG4gICAgICBBcHBSb3V0aW5nTW9kdWxlLFxyXG4gICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcclxuICAgICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcclxuICAgICAgVE5TRm9udEljb25Nb2R1bGUuZm9yUm9vdCh7XHJcbiAgICBcdFx0J2ZhJzogJy4vYXNzZXRzL2ZvbnQtYXdlc29tZS5jc3MnXHJcbiAgICBcdH0pXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgIEFwcENvbXBvbmVudCxcclxuICAgICAgVG9wYmFyQ29tcG9uZW50LFxyXG4gICAgICBMb2dpbkNvbXBvbmVudCxcclxuICAgICAgTWVudUNvbXBvbmVudCxcclxuICAgICAgSG9tZUNvbXBvbmVudCxcclxuICAgICAgTWFwQ29tcG9uZW50LFxyXG4gICAgICBQbGFjZXNDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgQmFja2VuZFNlcnZpY2UsXHJcbiAgICAgIEF1dGhHdWFyZCxcclxuICAgICAgTG9naW5TZXJ2aWNlLFxyXG4gICAgICBQbGFjZXNTZXJ2aWNlLFxyXG4gICAgICBQbGFjZXNTdG9yYWdlLFxyXG4gICAgICBMb2NhdGlvblNlcnZpY2UsXHJcbiAgICAgIFdlYXRoZXJTZXJ2aWNlXHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XHJcbiJdfQ==