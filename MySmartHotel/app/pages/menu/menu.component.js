"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var router_1 = require("@angular/router");
var MenuComponent = (function () {
    function MenuComponent(page, router, fonticon) {
        this.page = page;
        this.router = router;
        this.fonticon = fonticon;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        core_1.Component({
            selector: 'menu',
            templateUrl: 'pages/menu/menu.html',
            styleUrls: ["pages/menu/menu-global.css", "pages/menu/menu.css"]
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.Router, nativescript_ngx_fonticon_1.TNSFontIconService])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxnQ0FBK0I7QUFDL0IsdUVBQStEO0FBQy9ELDBDQUF5QztBQVF6QztJQUNFLHVCQUFvQixJQUFVLEVBQVUsTUFBZSxFQUFVLFFBQTRCO1FBQXpFLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFTO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7SUFDN0YsQ0FBQztJQUNELGdDQUFRLEdBQVI7SUFDQSxDQUFDO0lBSlUsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU07WUFDaEIsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxxQkFBcUIsQ0FBQztTQUNqRSxDQUFDO3lDQUcwQixXQUFJLEVBQW1CLGVBQU0sRUFBb0IsOENBQWtCO09BRGxGLGFBQWEsQ0FLekI7SUFBRCxvQkFBQztDQUFBLEFBTEQsSUFLQztBQUxZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFROU0ZvbnRJY29uU2VydmljZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtZm9udGljb24nO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21lbnUnLFxyXG4gIHRlbXBsYXRlVXJsOiAncGFnZXMvbWVudS9tZW51Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogW1wicGFnZXMvbWVudS9tZW51LWdsb2JhbC5jc3NcIiwgXCJwYWdlcy9tZW51L21lbnUuY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlciA6IFJvdXRlciwgcHJpdmF0ZSBmb250aWNvbjogVE5TRm9udEljb25TZXJ2aWNlKSB7XHJcbiAgfVxyXG4gIG5nT25Jbml0KCkgOiB2b2lkIHtcclxuICB9XHJcbn1cclxuIl19