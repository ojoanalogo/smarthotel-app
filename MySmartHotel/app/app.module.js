"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var http_1 = require("nativescript-angular/http");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var login_component_1 = require("./pages/login/login.component");
var menu_component_1 = require("./pages/menu/menu.component");
var topbar_1 = require("./components/topbar");
var authguard_service_1 = require("./services/authguard.service");
var backend_service_1 = require("./services/backend.service");
var login_service_1 = require("./services/login.service");
var places_service_1 = require("./services/places.service");
var places_storage_service_1 = require("./services/places-storage.service");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var nativescript_angular_1 = require("nativescript-angular");
nativescript_angular_1.registerElement("Gradient", function () { return require("nativescript-gradient").Gradient; });
nativescript_angular_1.registerElement("Mapbox", function () { return require("nativescript-mapbox").MapboxView; });
nativescript_angular_1.registerElement("CardView", function () { return require("nativescript-cardview").CardView; });
nativescript_angular_1.registerElement("Ripple", function () { return require("nativescript-ripple").Ripple; });
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
                login_component_1.LoginComponent,
                menu_component_1.MenuComponent,
                topbar_1.TopbarComponent
            ],
            providers: [
                backend_service_1.BackendService,
                authguard_service_1.AuthGuard,
                login_service_1.LoginService,
                places_service_1.PlacesService,
                places_storage_service_1.PlacesStorage
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLG9EQUFxRTtBQUNyRSxrREFBbUU7QUFDbkUsNkNBQWlEO0FBQ2pELGlEQUErQztBQUUvQyxpRUFBK0Q7QUFDL0QsOERBQTREO0FBQzVELDhDQUFzRDtBQUV0RCxrRUFBeUQ7QUFDekQsOERBQTREO0FBQzVELDBEQUF3RDtBQUN4RCw0REFBMEQ7QUFDMUQsNEVBQWtFO0FBRWxFLHVFQUE4RDtBQUM5RCw2REFBdUQ7QUFFdkQsc0NBQWUsQ0FBQyxVQUFVLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFFBQVEsRUFBekMsQ0FBeUMsQ0FBQyxDQUFDO0FBQzdFLHNDQUFlLENBQUMsUUFBUSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQyxVQUFVLEVBQXpDLENBQXlDLENBQUMsQ0FBQztBQUMzRSxzQ0FBZSxDQUFDLFVBQVUsRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUMsUUFBUSxFQUF6QyxDQUF5QyxDQUFDLENBQUM7QUFDN0Usc0NBQWUsQ0FBQyxRQUFRLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLE1BQU0sRUFBckMsQ0FBcUMsQ0FBQyxDQUFDO0FBaUN2RTtJQUFBO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBL0JyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLDhCQUFnQjtnQkFDaEIsK0JBQXVCO2dCQUN2Qiw2QkFBc0I7Z0JBQ3RCLDZDQUFpQixDQUFDLE9BQU8sQ0FBQztvQkFDM0IsSUFBSSxFQUFFLDJCQUEyQjtpQkFDakMsQ0FBQzthQUNIO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLGdDQUFjO2dCQUNkLDhCQUFhO2dCQUNiLHdCQUFlO2FBQ2xCO1lBQ0QsU0FBUyxFQUFFO2dCQUNULGdDQUFjO2dCQUNiLDZCQUFTO2dCQUNULDRCQUFZO2dCQUNaLDhCQUFhO2dCQUNiLHNDQUFhO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUVXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFwcGxpY2F0aW9uIGZyb20gJ2FwcGxpY2F0aW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XHJcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE1lbnVDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9tZW51L21lbnUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFRvcGJhckNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvdG9wYmFyXCI7XHJcblxyXG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tIFwiLi9zZXJ2aWNlcy9hdXRoZ3VhcmQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2JhY2tlbmQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9sb2dpbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFBsYWNlc1NlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9wbGFjZXMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBQbGFjZXNTdG9yYWdlIH0gZnJvbSBcIi4vc2VydmljZXMvcGxhY2VzLXN0b3JhZ2Uuc2VydmljZVwiO1xyXG5cclxuaW1wb3J0IHsgVE5TRm9udEljb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcclxuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XHJcblxyXG5yZWdpc3RlckVsZW1lbnQoXCJHcmFkaWVudFwiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWdyYWRpZW50XCIpLkdyYWRpZW50KTtcclxucmVnaXN0ZXJFbGVtZW50KFwiTWFwYm94XCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtbWFwYm94XCIpLk1hcGJveFZpZXcpO1xyXG5yZWdpc3RlckVsZW1lbnQoXCJDYXJkVmlld1wiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWNhcmR2aWV3XCIpLkNhcmRWaWV3KTtcclxucmVnaXN0ZXJFbGVtZW50KFwiUmlwcGxlXCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcmlwcGxlXCIpLlJpcHBsZSk7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgYm9vdHN0cmFwOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcclxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXHJcbiAgICAgICAgVE5TRm9udEljb25Nb2R1bGUuZm9yUm9vdCh7XHJcbiAgICBcdFx0XHQnZmEnOiAnLi9hc3NldHMvZm9udC1hd2Vzb21lLmNzcydcclxuICAgIFx0XHR9KVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudCxcclxuICAgICAgICBMb2dpbkNvbXBvbmVudCxcclxuICAgICAgICBNZW51Q29tcG9uZW50LFxyXG4gICAgICAgIFRvcGJhckNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICBCYWNrZW5kU2VydmljZSxcclxuICAgICAgIEF1dGhHdWFyZCxcclxuICAgICAgIExvZ2luU2VydmljZSxcclxuICAgICAgIFBsYWNlc1NlcnZpY2UsXHJcbiAgICAgICBQbGFjZXNTdG9yYWdlXHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XHJcbiJdfQ==