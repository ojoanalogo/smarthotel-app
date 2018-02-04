"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var color_1 = require("color");
var router_1 = require("@angular/router");
var nativescript_sidedrawer_1 = require("nativescript-sidedrawer");
var menu_component_1 = require("../../pages/menu/menu.component");
var backend_service_1 = require("../../services/backend.service");
var TopbarComponent = (function () {
    function TopbarComponent(router, fonticon, menuComponent) {
        this.router = router;
        this.fonticon = fonticon;
        this.menuComponent = menuComponent;
        var user = backend_service_1.BackendService.userData;
        nativescript_sidedrawer_1.TnsSideDrawer.build({
            headerBackgroundColor: new color_1.Color("#00796B"),
            backgroundColor: new color_1.Color("#FFFFFF"),
            textColor: new color_1.Color("#000000"),
            templates: [{
                    title: 'Inicio'
                }, {
                    title: 'Mapa'
                },
                {
                    title: 'Habitación'
                },
                {
                    title: 'Cerrar sesión'
                }],
            title: 'MySmartHotel',
            subtitle: user.email,
            listener: function (index) {
                menuComponent.changeTab(index);
            },
            context: this,
        });
    }
    TopbarComponent.prototype.toggleSidedrawer = function () {
        nativescript_sidedrawer_1.TnsSideDrawer.toggle();
    };
    TopbarComponent = __decorate([
        core_1.Component({
            selector: 'TopBar',
            template: "<ActionBar title=\"MySmartHotel\">\n    <NavigationButton (tap)=\"toggleSidedrawer()\" icon=\"res://ic_menu_white_24dp\"></NavigationButton>\n  </ActionBar>",
            styles: [".fa {\n    font-family: FontAwesome, fontawesome-webfont;\n  }"]
        }),
        __metadata("design:paramtypes", [router_1.Router, nativescript_ngx_fonticon_1.TNSFontIconService, menu_component_1.MenuComponent])
    ], TopbarComponent);
    return TopbarComponent;
}());
exports.TopbarComponent = TopbarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wYmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidG9wYmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLHVFQUErRDtBQUMvRCwrQkFBOEI7QUFDOUIsMENBQXlDO0FBQ3pDLG1FQUF1RDtBQUN2RCxrRUFBZ0U7QUFDaEUsa0VBQWdFO0FBYWhFO0lBQ0UseUJBQW9CLE1BQWMsRUFBVSxRQUE0QixFQUFVLGFBQTRCO1FBQTFGLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFvQjtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVHLElBQUksSUFBSSxHQUFHLGdDQUFjLENBQUMsUUFBUSxDQUFDO1FBQ25DLHVDQUFhLENBQUMsS0FBSyxDQUFDO1lBQ2xCLHFCQUFxQixFQUFFLElBQUksYUFBSyxDQUFDLFNBQVMsQ0FBQztZQUMzQyxlQUFlLEVBQUUsSUFBSSxhQUFLLENBQUMsU0FBUyxDQUFDO1lBQ3JDLFNBQVMsRUFBRSxJQUFJLGFBQUssQ0FBQyxTQUFTLENBQUM7WUFDL0IsU0FBUyxFQUFFLENBQUM7b0JBQ1YsS0FBSyxFQUFFLFFBQVE7aUJBQ2hCLEVBQUU7b0JBQ0QsS0FBSyxFQUFFLE1BQU07aUJBQ2Q7Z0JBQ0Q7b0JBQ0UsS0FBSyxFQUFFLFlBQVk7aUJBQ3BCO2dCQUNEO29CQUNFLEtBQUssRUFBRSxlQUFlO2lCQUN2QixDQUFDO1lBQ0YsS0FBSyxFQUFFLGNBQWM7WUFDckIsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ3BCLFFBQVEsRUFBRSxVQUFDLEtBQUs7Z0JBQ2QsYUFBYSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUNoQyxDQUFDO1lBQ0QsT0FBTyxFQUFFLElBQUk7U0FDZCxDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsMENBQWdCLEdBQWhCO1FBQ0UsdUNBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQTtJQUN4QixDQUFDO0lBNUJVLGVBQWU7UUFWM0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSw4SkFFRztZQUNiLE1BQU0sRUFBRSxDQUFDLGdFQUVQLENBQUM7U0FDSixDQUFDO3lDQUc0QixlQUFNLEVBQW9CLDhDQUFrQixFQUF5Qiw4QkFBYTtPQURuRyxlQUFlLENBNkIzQjtJQUFELHNCQUFDO0NBQUEsQUE3QkQsSUE2QkM7QUE3QlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVE5TRm9udEljb25TZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgVG5zU2lkZURyYXdlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC1zaWRlZHJhd2VyJ1xyXG5pbXBvcnQgeyBNZW51Q29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL3BhZ2VzL21lbnUvbWVudS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYmFja2VuZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3VzZXIubW9kZWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnVG9wQmFyJyxcclxuICB0ZW1wbGF0ZTogYDxBY3Rpb25CYXIgdGl0bGU9XCJNeVNtYXJ0SG90ZWxcIj5cclxuICAgIDxOYXZpZ2F0aW9uQnV0dG9uICh0YXApPVwidG9nZ2xlU2lkZWRyYXdlcigpXCIgaWNvbj1cInJlczovL2ljX21lbnVfd2hpdGVfMjRkcFwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cclxuICA8L0FjdGlvbkJhcj5gLFxyXG4gIHN0eWxlczogW2AuZmEge1xyXG4gICAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lLCBmb250YXdlc29tZS13ZWJmb250O1xyXG4gIH1gXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRvcGJhckNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBmb250aWNvbjogVE5TRm9udEljb25TZXJ2aWNlLCBwcml2YXRlIG1lbnVDb21wb25lbnQ6IE1lbnVDb21wb25lbnQpIHtcclxuICAgIGxldCB1c2VyID0gQmFja2VuZFNlcnZpY2UudXNlckRhdGE7XHJcbiAgICBUbnNTaWRlRHJhd2VyLmJ1aWxkKHtcclxuICAgICAgaGVhZGVyQmFja2dyb3VuZENvbG9yOiBuZXcgQ29sb3IoXCIjMDA3OTZCXCIpLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IG5ldyBDb2xvcihcIiNGRkZGRkZcIiksXHJcbiAgICAgIHRleHRDb2xvcjogbmV3IENvbG9yKFwiIzAwMDAwMFwiKSxcclxuICAgICAgdGVtcGxhdGVzOiBbe1xyXG4gICAgICAgIHRpdGxlOiAnSW5pY2lvJ1xyXG4gICAgICB9LCB7XHJcbiAgICAgICAgdGl0bGU6ICdNYXBhJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdIYWJpdGFjacOzbidcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiAnQ2VycmFyIHNlc2nDs24nXHJcbiAgICAgIH1dLFxyXG4gICAgICB0aXRsZTogJ015U21hcnRIb3RlbCcsXHJcbiAgICAgIHN1YnRpdGxlOiB1c2VyLmVtYWlsLFxyXG4gICAgICBsaXN0ZW5lcjogKGluZGV4KSA9PiB7XHJcbiAgICAgICAgbWVudUNvbXBvbmVudC5jaGFuZ2VUYWIoaW5kZXgpXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbnRleHQ6IHRoaXMsXHJcbiAgICB9KVxyXG4gIH1cclxuICB0b2dnbGVTaWRlZHJhd2VyKCk6IHZvaWQge1xyXG4gICAgVG5zU2lkZURyYXdlci50b2dnbGUoKVxyXG4gIH1cclxufVxyXG4iXX0=