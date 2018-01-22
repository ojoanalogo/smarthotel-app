"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var color_1 = require("color");
var router_1 = require("@angular/router");
var nativescript_sidedrawer_1 = require("nativescript-sidedrawer");
var TopbarComponent = (function () {
    function TopbarComponent(router, fonticon) {
        this.router = router;
        this.fonticon = fonticon;
        nativescript_sidedrawer_1.TnsSideDrawer.build({
            headerBackgroundColor: new color_1.Color("#00796B"),
            backgroundColor: new color_1.Color("#FFFFFF"),
            textColor: new color_1.Color("#000000"),
            templates: [{
                    title: 'Inicio'
                }, {
                    title: 'Habitación'
                }],
            title: 'MySmartHotel',
            subtitle: 'DEV TEST',
            listener: function (index) {
                //this.i = index
            },
            context: this,
        });
    }
    TopbarComponent.prototype.toggleSidedrawer = function () {
        nativescript_sidedrawer_1.TnsSideDrawer.toggle();
    };
    TopbarComponent = __decorate([
        core_1.Component({
            selector: 'topbar',
            template: "<ActionBar title=\"MySmartHotel\">\n    <NavigationButton (tap)=\"toggleSidedrawer()\" icon=\"res://ic_menu_white_24dp\"></NavigationButton>\n  </ActionBar>",
            styles: [".fa {\n    font-family: FontAwesome, fontawesome-webfont;\n  }"]
        }),
        __metadata("design:paramtypes", [router_1.Router, nativescript_ngx_fonticon_1.TNSFontIconService])
    ], TopbarComponent);
    return TopbarComponent;
}());
exports.TopbarComponent = TopbarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wYmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidG9wYmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLHVFQUErRDtBQUMvRCwrQkFBOEI7QUFDOUIsMENBQXlDO0FBQ3pDLG1FQUF1RDtBQVl2RDtJQUNFLHlCQUFvQixNQUFlLEVBQVUsUUFBNEI7UUFBckQsV0FBTSxHQUFOLE1BQU0sQ0FBUztRQUFVLGFBQVEsR0FBUixRQUFRLENBQW9CO1FBQ3ZFLHVDQUFhLENBQUMsS0FBSyxDQUFDO1lBQ2xCLHFCQUFxQixFQUFHLElBQUksYUFBSyxDQUFDLFNBQVMsQ0FBQztZQUM1QyxlQUFlLEVBQUUsSUFBSSxhQUFLLENBQUMsU0FBUyxDQUFDO1lBQ3JDLFNBQVMsRUFBRSxJQUFJLGFBQUssQ0FBQyxTQUFTLENBQUM7WUFDcEMsU0FBUyxFQUFFLENBQUM7b0JBQ1gsS0FBSyxFQUFFLFFBQVE7aUJBQ2YsRUFBRTtvQkFDRixLQUFLLEVBQUUsWUFBWTtpQkFDbkIsQ0FBQztZQUNGLEtBQUssRUFBRSxjQUFjO1lBQ3JCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxVQUFDLEtBQUs7Z0JBQ2YsZ0JBQWdCO1lBQ2pCLENBQUM7WUFDRCxPQUFPLEVBQUUsSUFBSTtTQUNiLENBQUMsQ0FBQTtJQUNBLENBQUM7SUFDRCwwQ0FBZ0IsR0FBaEI7UUFDRSx1Q0FBYSxDQUFDLE1BQU0sRUFBRSxDQUFBO0lBQ3hCLENBQUM7SUFyQlUsZUFBZTtRQVYzQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLDhKQUVHO1lBQ2IsTUFBTSxFQUFFLENBQUMsZ0VBRVAsQ0FBQztTQUNKLENBQUM7eUNBRzZCLGVBQU0sRUFBb0IsOENBQWtCO09BRDlELGVBQWUsQ0FzQjNCO0lBQUQsc0JBQUM7Q0FBQSxBQXRCRCxJQXNCQztBQXRCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUTlNGb250SWNvblNlcnZpY2UgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBUbnNTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXNpZGVkcmF3ZXInXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RvcGJhcicsXHJcbiAgdGVtcGxhdGU6IGA8QWN0aW9uQmFyIHRpdGxlPVwiTXlTbWFydEhvdGVsXCI+XHJcbiAgICA8TmF2aWdhdGlvbkJ1dHRvbiAodGFwKT1cInRvZ2dsZVNpZGVkcmF3ZXIoKVwiIGljb249XCJyZXM6Ly9pY19tZW51X3doaXRlXzI0ZHBcIj48L05hdmlnYXRpb25CdXR0b24+XHJcbiAgPC9BY3Rpb25CYXI+YCxcclxuICBzdHlsZXM6IFtgLmZhIHtcclxuICAgIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZSwgZm9udGF3ZXNvbWUtd2ViZm9udDtcclxuICB9YF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBUb3BiYXJDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyIDogUm91dGVyLCBwcml2YXRlIGZvbnRpY29uOiBUTlNGb250SWNvblNlcnZpY2UpIHtcclxuICAgIFRuc1NpZGVEcmF3ZXIuYnVpbGQoe1xyXG4gICAgICBoZWFkZXJCYWNrZ3JvdW5kQ29sb3I6ICBuZXcgQ29sb3IoXCIjMDA3OTZCXCIpLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IG5ldyBDb2xvcihcIiNGRkZGRkZcIiksXHJcbiAgICAgIHRleHRDb2xvcjogbmV3IENvbG9yKFwiIzAwMDAwMFwiKSxcclxuXHR0ZW1wbGF0ZXM6IFt7XHJcblx0XHR0aXRsZTogJ0luaWNpbydcclxuXHR9LCB7XHJcblx0XHR0aXRsZTogJ0hhYml0YWNpw7NuJ1xyXG5cdH1dLFxyXG5cdHRpdGxlOiAnTXlTbWFydEhvdGVsJyxcclxuXHRzdWJ0aXRsZTogJ0RFViBURVNUJyxcclxuXHRsaXN0ZW5lcjogKGluZGV4KSA9PiB7XHJcblx0XHQvL3RoaXMuaSA9IGluZGV4XHJcblx0fSxcclxuXHRjb250ZXh0OiB0aGlzLFxyXG59KVxyXG4gIH1cclxuICB0b2dnbGVTaWRlZHJhd2VyKCkgOiB2b2lkIHtcclxuICAgIFRuc1NpZGVEcmF3ZXIudG9nZ2xlKClcclxuICB9XHJcbn1cclxuIl19