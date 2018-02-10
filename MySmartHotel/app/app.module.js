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
var cleaning_component_1 = require("./pages/menu/tabs/room/cleaning/cleaning.component");
var places_component_1 = require("./pages/places/places.component");
var info_modal_1 = require("./info-modal/info-modal");
var authguard_service_1 = require("./services/authguard.service");
var backend_service_1 = require("./services/backend.service");
var login_service_1 = require("./services/login.service");
var places_service_1 = require("./services/places.service");
var location_service_1 = require("./services/location.service");
var weather_service_1 = require("./services/weather.service");
var room_service_1 = require("./services/room.service");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var angular_1 = require("nativescript-checkbox/angular");
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
                angular_1.TNSCheckBoxModule,
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
                cleaning_component_1.CleaningComponent,
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
                weather_service_1.WeatherService,
                room_service_1.RoomService
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFFM0QsZ0ZBQThFO0FBQzlFLG9EQUFxRTtBQUNyRSxrREFBbUU7QUFFbkUsaURBQStDO0FBQy9DLDZDQUFpRDtBQUVqRCxxREFBNkQ7QUFDN0QsaUVBQStEO0FBRS9ELDhEQUE0RDtBQUM1RCx3RUFBc0U7QUFDdEUscUVBQW1FO0FBQ25FLHdFQUFzRTtBQUN0RSx5RkFBdUY7QUFFdkYsb0VBQWtFO0FBRWxFLHNEQUE2RDtBQUU3RCxrRUFBeUQ7QUFDekQsOERBQTREO0FBQzVELDBEQUF3RDtBQUN4RCw0REFBMEQ7QUFDMUQsZ0VBQThEO0FBQzlELDhEQUE0RDtBQUM1RCx3REFBc0Q7QUFFdEQsdUVBQThEO0FBQzlELHlEQUFrRTtBQUNsRSw2REFBdUQ7QUFFdkQsc0NBQWUsQ0FBQyxVQUFVLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFFBQVEsRUFBekMsQ0FBeUMsQ0FBQyxDQUFDO0FBQzdFLHNDQUFlLENBQUMsUUFBUSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQyxVQUFVLEVBQXpDLENBQXlDLENBQUMsQ0FBQztBQUMzRSxzQ0FBZSxDQUFDLFVBQVUsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUMsUUFBUSxFQUF6QyxDQUF5QyxDQUFDLENBQUM7QUFDN0Usc0NBQWUsQ0FBQyxRQUFRLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLE1BQU0sRUFBckMsQ0FBcUMsQ0FBQyxDQUFDO0FBQ3ZFLHNDQUFlLENBQUMsS0FBSyxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxHQUFHLEVBQWhELENBQWdELENBQUMsQ0FBQztBQTJDL0U7SUFDRTtJQUNBLENBQUM7SUFGVSxTQUFTO1FBekNyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDUCx3Q0FBa0I7Z0JBQ2xCLDhCQUFnQjtnQkFDaEIsK0JBQXVCO2dCQUN2Qiw2QkFBc0I7Z0JBQ3RCLDJCQUFpQjtnQkFDakIsNkNBQWlCLENBQUMsT0FBTyxDQUFDO29CQUMxQixJQUFJLEVBQUUsMkJBQTJCO2lCQUNqQyxDQUFDO2FBQ0Y7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osNEJBQVk7Z0JBQ1osd0JBQWU7Z0JBQ2YsZ0NBQWM7Z0JBQ2QsOEJBQWE7Z0JBQ2IsOEJBQWE7Z0JBQ2IsNEJBQVk7Z0JBQ1osOEJBQWE7Z0JBQ2Isc0NBQWlCO2dCQUNqQixrQ0FBZTtnQkFDZiwrQkFBa0I7YUFDbkI7WUFDRCxlQUFlLEVBQUUsQ0FBQywrQkFBa0IsQ0FBQztZQUNyQyxTQUFTLEVBQUU7Z0JBQ1QsZ0NBQWM7Z0JBQ2QsNkJBQVM7Z0JBQ1QsNEJBQVk7Z0JBQ1osOEJBQWE7Z0JBQ2Isa0NBQWU7Z0JBQ2YsZ0NBQWM7Z0JBQ2QsMEJBQVc7YUFDWjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDOztPQUVXLFNBQVMsQ0FHckI7SUFBRCxnQkFBQztDQUFBLEFBSEQsSUFHQztBQUhZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XHJcblxyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xyXG5cclxuaW1wb3J0IHsgVG9wYmFyQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy90b3BiYXIvdG9wYmFyXCI7XHJcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgeyBNZW51Q29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvbWVudS9tZW51LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvbWVudS90YWJzL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvbWVudS90YWJzL21hcC9tYXAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFJvb21Db21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9tZW51L3RhYnMvcm9vbS9yb29tLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDbGVhbmluZ0NvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL21lbnUvdGFicy9yb29tL2NsZWFuaW5nL2NsZWFuaW5nLmNvbXBvbmVudFwiO1xyXG5cclxuaW1wb3J0IHsgUGxhY2VzQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvcGxhY2VzL3BsYWNlcy5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IEluZm9Nb2RhbENvbXBvbmVudCB9IGZyb20gXCIuL2luZm8tbW9kYWwvaW5mby1tb2RhbFwiO1xyXG5cclxuaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSBcIi4vc2VydmljZXMvYXV0aGd1YXJkLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9iYWNrZW5kLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvbG9naW4uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBQbGFjZXNTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvcGxhY2VzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTG9jYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvbG9jYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBXZWF0aGVyU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3dlYXRoZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb29tU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3Jvb20uc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgVE5TRm9udEljb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcclxuaW1wb3J0IHsgVE5TQ2hlY2tCb3hNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtY2hlY2tib3gvYW5ndWxhcic7XHJcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhclwiO1xyXG5cclxucmVnaXN0ZXJFbGVtZW50KFwiR3JhZGllbnRcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1ncmFkaWVudFwiKS5HcmFkaWVudCk7XHJcbnJlZ2lzdGVyRWxlbWVudChcIk1hcGJveFwiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LW1hcGJveFwiKS5NYXBib3hWaWV3KTtcclxucmVnaXN0ZXJFbGVtZW50KFwiQ2FyZFZpZXdcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1jYXJkdmlld1wiKS5DYXJkVmlldyk7XHJcbnJlZ2lzdGVyRWxlbWVudChcIlJpcHBsZVwiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXJpcHBsZVwiKS5SaXBwbGUpO1xyXG5yZWdpc3RlckVsZW1lbnQoXCJGYWJcIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1mbG9hdGluZ2FjdGlvbmJ1dHRvblwiKS5GYWIpO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGJvb3RzdHJhcDogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxyXG4gICAgICBBcHBSb3V0aW5nTW9kdWxlLFxyXG4gICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcclxuICAgICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcclxuICAgICAgVE5TQ2hlY2tCb3hNb2R1bGUsXHJcbiAgICAgIFROU0ZvbnRJY29uTW9kdWxlLmZvclJvb3Qoe1xyXG4gICAgXHRcdCdmYSc6ICcuL2Fzc2V0cy9mb250LWF3ZXNvbWUuY3NzJ1xyXG4gICAgXHR9KVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICBBcHBDb21wb25lbnQsXHJcbiAgICAgIFRvcGJhckNvbXBvbmVudCxcclxuICAgICAgTG9naW5Db21wb25lbnQsXHJcbiAgICAgIE1lbnVDb21wb25lbnQsXHJcbiAgICAgIEhvbWVDb21wb25lbnQsXHJcbiAgICAgIE1hcENvbXBvbmVudCxcclxuICAgICAgUm9vbUNvbXBvbmVudCxcclxuICAgICAgQ2xlYW5pbmdDb21wb25lbnQsXHJcbiAgICAgIFBsYWNlc0NvbXBvbmVudCxcclxuICAgICAgSW5mb01vZGFsQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgZW50cnlDb21wb25lbnRzOiBbSW5mb01vZGFsQ29tcG9uZW50XSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICBCYWNrZW5kU2VydmljZSxcclxuICAgICAgQXV0aEd1YXJkLFxyXG4gICAgICBMb2dpblNlcnZpY2UsXHJcbiAgICAgIFBsYWNlc1NlcnZpY2UsXHJcbiAgICAgIExvY2F0aW9uU2VydmljZSxcclxuICAgICAgV2VhdGhlclNlcnZpY2UsXHJcbiAgICAgIFJvb21TZXJ2aWNlXHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxufVxyXG4iXX0=