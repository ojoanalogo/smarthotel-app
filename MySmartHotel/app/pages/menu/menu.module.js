"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var home_component_1 = require("./tabs/home/home.component");
var map_component_1 = require("./tabs/map/map.component");
var menu_component_1 = require("./menu.component");
var menu_routing_module_1 = require("./menu-routing.module");
var MenuModule = (function () {
    function MenuModule() {
    }
    MenuModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                menu_routing_module_1.MenuRoutingModule
            ],
            declarations: [
                menu_component_1.MenuComponent,
                home_component_1.HomeComponent,
                map_component_1.MapComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], MenuModule);
    return MenuModule;
}());
exports.MenuModule = MenuModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZW51Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFFdkUsNkRBQTJEO0FBQzNELDBEQUF3RDtBQUN4RCxtREFBaUQ7QUFFakQsNkRBQTBEO0FBZ0IxRDtJQUFBO0lBQTBCLENBQUM7SUFBZCxVQUFVO1FBZHRCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLHVDQUFpQjthQUNwQjtZQUNELFlBQVksRUFBRTtnQkFDViw4QkFBYTtnQkFDYiw4QkFBYTtnQkFDYiw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxVQUFVLENBQUk7SUFBRCxpQkFBQztDQUFBLEFBQTNCLElBQTJCO0FBQWQsZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcclxuXHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi90YWJzL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSBcIi4vdGFicy9tYXAvbWFwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBNZW51Q29tcG9uZW50IH0gZnJvbSBcIi4vbWVudS5jb21wb25lbnRcIjtcclxuXHJcbmltcG9ydCB7IE1lbnVSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vbWVudS1yb3V0aW5nLm1vZHVsZVwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgTWVudVJvdXRpbmdNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBNZW51Q29tcG9uZW50LFxyXG4gICAgICAgIEhvbWVDb21wb25lbnQsXHJcbiAgICAgICAgTWFwQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1lbnVNb2R1bGUgeyB9XHJcbiJdfQ==