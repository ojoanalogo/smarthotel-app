"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var color_1 = require("color");
var router_1 = require("@angular/router");
var nativescript_sidedrawer_1 = require("nativescript-sidedrawer");
var menu_component_1 = require("../../pages/menu/menu.component");
var TopbarComponent = (function () {
    function TopbarComponent(router, fonticon, menuComponent) {
        this.router = router;
        this.fonticon = fonticon;
        this.menuComponent = menuComponent;
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
                }],
            title: 'MySmartHotel',
            subtitle: 'DEV TEST',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wYmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidG9wYmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLHVFQUErRDtBQUMvRCwrQkFBOEI7QUFDOUIsMENBQXlDO0FBQ3pDLG1FQUF1RDtBQUN2RCxrRUFBZ0U7QUFZaEU7SUFDRSx5QkFBb0IsTUFBZSxFQUFVLFFBQTRCLEVBQVUsYUFBNkI7UUFBNUYsV0FBTSxHQUFOLE1BQU0sQ0FBUztRQUFVLGFBQVEsR0FBUixRQUFRLENBQW9CO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWdCO1FBQzlHLHVDQUFhLENBQUMsS0FBSyxDQUFDO1lBQ2xCLHFCQUFxQixFQUFHLElBQUksYUFBSyxDQUFDLFNBQVMsQ0FBQztZQUM1QyxlQUFlLEVBQUUsSUFBSSxhQUFLLENBQUMsU0FBUyxDQUFDO1lBQ3JDLFNBQVMsRUFBRSxJQUFJLGFBQUssQ0FBQyxTQUFTLENBQUM7WUFDcEMsU0FBUyxFQUFFLENBQUM7b0JBQ1gsS0FBSyxFQUFFLFFBQVE7aUJBQ2YsRUFBRTtvQkFDRixLQUFLLEVBQUUsTUFBTTtpQkFDYjtnQkFDQTtvQkFDQyxLQUFLLEVBQUUsWUFBWTtpQkFDcEIsQ0FBQztZQUNGLEtBQUssRUFBRSxjQUFjO1lBQ3JCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxVQUFDLEtBQUs7Z0JBQ2IsYUFBYSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUNqQyxDQUFDO1lBQ0QsT0FBTyxFQUFFLElBQUk7U0FDYixDQUFDLENBQUE7SUFDQSxDQUFDO0lBQ0QsMENBQWdCLEdBQWhCO1FBQ0UsdUNBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQTtJQUN4QixDQUFDO0lBeEJVLGVBQWU7UUFWM0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSw4SkFFRztZQUNiLE1BQU0sRUFBRSxDQUFDLGdFQUVQLENBQUM7U0FDSixDQUFDO3lDQUc2QixlQUFNLEVBQW9CLDhDQUFrQixFQUEwQiw4QkFBYTtPQURyRyxlQUFlLENBeUIzQjtJQUFELHNCQUFDO0NBQUEsQUF6QkQsSUF5QkM7QUF6QlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVE5TRm9udEljb25TZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgVG5zU2lkZURyYXdlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC1zaWRlZHJhd2VyJ1xyXG5pbXBvcnQgeyBNZW51Q29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL3BhZ2VzL21lbnUvbWVudS5jb21wb25lbnRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnVG9wQmFyJyxcclxuICB0ZW1wbGF0ZTogYDxBY3Rpb25CYXIgdGl0bGU9XCJNeVNtYXJ0SG90ZWxcIj5cclxuICAgIDxOYXZpZ2F0aW9uQnV0dG9uICh0YXApPVwidG9nZ2xlU2lkZWRyYXdlcigpXCIgaWNvbj1cInJlczovL2ljX21lbnVfd2hpdGVfMjRkcFwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cclxuICA8L0FjdGlvbkJhcj5gLFxyXG4gIHN0eWxlczogW2AuZmEge1xyXG4gICAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lLCBmb250YXdlc29tZS13ZWJmb250O1xyXG4gIH1gXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRvcGJhckNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXIsIHByaXZhdGUgZm9udGljb246IFROU0ZvbnRJY29uU2VydmljZSwgcHJpdmF0ZSBtZW51Q29tcG9uZW50IDogTWVudUNvbXBvbmVudCkge1xyXG4gICAgVG5zU2lkZURyYXdlci5idWlsZCh7XHJcbiAgICAgIGhlYWRlckJhY2tncm91bmRDb2xvcjogIG5ldyBDb2xvcihcIiMwMDc5NkJcIiksXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogbmV3IENvbG9yKFwiI0ZGRkZGRlwiKSxcclxuICAgICAgdGV4dENvbG9yOiBuZXcgQ29sb3IoXCIjMDAwMDAwXCIpLFxyXG5cdHRlbXBsYXRlczogW3tcclxuXHRcdHRpdGxlOiAnSW5pY2lvJ1xyXG5cdH0sIHtcclxuXHRcdHRpdGxlOiAnTWFwYSdcclxuXHR9LFxyXG4gIHtcclxuICAgdGl0bGU6ICdIYWJpdGFjacOzbidcclxuIH1dLFxyXG5cdHRpdGxlOiAnTXlTbWFydEhvdGVsJyxcclxuXHRzdWJ0aXRsZTogJ0RFViBURVNUJyxcclxuXHRsaXN0ZW5lcjogKGluZGV4KSA9PiB7XHJcbiAgICBtZW51Q29tcG9uZW50LmNoYW5nZVRhYihpbmRleClcclxuXHR9LFxyXG5cdGNvbnRleHQ6IHRoaXMsXHJcbn0pXHJcbiAgfVxyXG4gIHRvZ2dsZVNpZGVkcmF3ZXIoKSA6IHZvaWQge1xyXG4gICAgVG5zU2lkZURyYXdlci50b2dnbGUoKVxyXG4gIH1cclxufVxyXG4iXX0=