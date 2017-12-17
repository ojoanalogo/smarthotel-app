"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var router_1 = require("@angular/router");
var TopbarComponent = (function () {
    function TopbarComponent(router, fonticon) {
        this.router = router;
        this.fonticon = fonticon;
    }
    TopbarComponent = __decorate([
        core_1.Component({
            selector: 'topbar',
            template: "<ActionBar title=\"SmartHotel\">\n    <NavigationButton icon=\"res://ic_menu_white_24dp\"></NavigationButton>\n    <ActionItem>\n      <Ripple rippleColor=\"#c8c8c8\">\n        <Label class=\"fa\" style=\"color:#fff; font-size: 24; margin-right:24;\" [text]=\"'fa-sticky-note' | fonticon\"></Label>\n      </Ripple>\n    </ActionItem>\n  </ActionBar>",
            styles: [".fa {\n    font-family: FontAwesome, fontawesome-webfont;\n  }"]
        }),
        __metadata("design:paramtypes", [router_1.Router, nativescript_ngx_fonticon_1.TNSFontIconService])
    ], TopbarComponent);
    return TopbarComponent;
}());
exports.TopbarComponent = TopbarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wYmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidG9wYmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLHVFQUErRDtBQUUvRCwwQ0FBeUM7QUFpQnpDO0lBQ0UseUJBQW9CLE1BQWUsRUFBVSxRQUE0QjtRQUFyRCxXQUFNLEdBQU4sTUFBTSxDQUFTO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7SUFBRyxDQUFDO0lBRGxFLGVBQWU7UUFmM0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxnV0FPRztZQUNiLE1BQU0sRUFBRSxDQUFDLGdFQUVQLENBQUM7U0FDSixDQUFDO3lDQUc2QixlQUFNLEVBQW9CLDhDQUFrQjtPQUQ5RCxlQUFlLENBRTNCO0lBQUQsc0JBQUM7Q0FBQSxBQUZELElBRUM7QUFGWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUTlNGb250SWNvblNlcnZpY2UgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0b3BiYXInLFxyXG4gIHRlbXBsYXRlOiBgPEFjdGlvbkJhciB0aXRsZT1cIlNtYXJ0SG90ZWxcIj5cclxuICAgIDxOYXZpZ2F0aW9uQnV0dG9uIGljb249XCJyZXM6Ly9pY19tZW51X3doaXRlXzI0ZHBcIj48L05hdmlnYXRpb25CdXR0b24+XHJcbiAgICA8QWN0aW9uSXRlbT5cclxuICAgICAgPFJpcHBsZSByaXBwbGVDb2xvcj1cIiNjOGM4YzhcIj5cclxuICAgICAgICA8TGFiZWwgY2xhc3M9XCJmYVwiIHN0eWxlPVwiY29sb3I6I2ZmZjsgZm9udC1zaXplOiAyNDsgbWFyZ2luLXJpZ2h0OjI0O1wiIFt0ZXh0XT1cIidmYS1zdGlja3ktbm90ZScgfCBmb250aWNvblwiPjwvTGFiZWw+XHJcbiAgICAgIDwvUmlwcGxlPlxyXG4gICAgPC9BY3Rpb25JdGVtPlxyXG4gIDwvQWN0aW9uQmFyPmAsXHJcbiAgc3R5bGVzOiBbYC5mYSB7XHJcbiAgICBmb250LWZhbWlseTogRm9udEF3ZXNvbWUsIGZvbnRhd2Vzb21lLXdlYmZvbnQ7XHJcbiAgfWBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVG9wYmFyQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlciA6IFJvdXRlciwgcHJpdmF0ZSBmb250aWNvbjogVE5TRm9udEljb25TZXJ2aWNlKSB7fVxyXG59XHJcbiJdfQ==