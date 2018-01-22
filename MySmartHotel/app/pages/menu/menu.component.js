"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var router_1 = require("@angular/router");
var place_model_1 = require("../../models/place.model");
var http = require("tns-core-modules/http");
var MenuComponent = (function () {
    function MenuComponent(page, router, fonticon) {
        this.page = page;
        this.router = router;
        this.fonticon = fonticon;
        this.accessToken = "1981880128746622|oEaM5iMIKzbe6640AfT9ABjlmkU";
        this.places = [];
        /*http.getJSON("https://graph.facebook.com/oauth/access_token?client_id=1981880128746622&client_secret=11ad5035db1a7eb87b50efa6aba30d90&grant_type=client_credentials").then((res)=>{
          console.dir(res);
        })*/
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        http.getJSON("https://graph.facebook.com/v2.9" +
            "/search?type=place&fields=name,location,about&center=24.7880443,-107.3983973" +
            "&distance=1000&access_token=" + this.accessToken).then(function (res) {
            res["data"].forEach(function (place) {
                _this.places.push(new place_model_1.Place(place["id"], place["name"], place["location"], place["about"]));
            });
            //console.dir(this.places);
        }, function (error) {
            console.log("error");
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxnQ0FBK0I7QUFDL0IsdUVBQStEO0FBQy9ELDBDQUF5QztBQUN6Qyx3REFBaUQ7QUFFakQsNENBQThDO0FBUTlDO0lBR0UsdUJBQW9CLElBQVUsRUFBVSxNQUFlLEVBQVUsUUFBNEI7UUFBekUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVM7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFvQjtRQUY3RixnQkFBVyxHQUFXLDhDQUE4QyxDQUFDO1FBQzlELFdBQU0sR0FBa0IsRUFBRSxDQUFDO1FBRXBDOztZQUVJO0lBQ0YsQ0FBQztJQUNELGdDQUFRLEdBQVI7UUFBQSxpQkFXQztRQVZDLElBQUksQ0FBQyxPQUFPLENBQUMsaUNBQWlDO1lBQzlDLDhFQUE4RTtZQUM3RSw4QkFBOEIsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRztZQUMxRCxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSztnQkFDckIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxtQkFBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0YsQ0FBQyxDQUFDLENBQUM7WUFDSCwyQkFBMkI7UUFDOUIsQ0FBQyxFQUFFLFVBQVMsS0FBSztZQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBbkJVLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLEVBQUUscUJBQXFCLENBQUM7U0FDakUsQ0FBQzt5Q0FLMEIsV0FBSSxFQUFtQixlQUFNLEVBQW9CLDhDQUFrQjtPQUhsRixhQUFhLENBb0J6QjtJQUFELG9CQUFDO0NBQUEsQUFwQkQsSUFvQkM7QUFwQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgVE5TRm9udEljb25TZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUGxhY2UgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3BsYWNlLm1vZGVsXCI7XHJcbmltcG9ydCAqIGFzIEZhY2Vib29rIGZyb20gXCJuYXRpdmVzY3JpcHQtZmFjZWJvb2tcIjtcclxuaW1wb3J0ICogYXMgaHR0cCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21lbnUnLFxyXG4gIHRlbXBsYXRlVXJsOiAncGFnZXMvbWVudS9tZW51Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogW1wicGFnZXMvbWVudS9tZW51LWdsb2JhbC5jc3NcIiwgXCJwYWdlcy9tZW51L21lbnUuY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgYWNjZXNzVG9rZW46IHN0cmluZyA9IFwiMTk4MTg4MDEyODc0NjYyMnxvRWFNNWlNSUt6YmU2NjQwQWZUOUFCamxta1VcIjtcclxuICBwdWJsaWMgcGxhY2VzIDogQXJyYXk8UGxhY2U+ID0gW107XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlciA6IFJvdXRlciwgcHJpdmF0ZSBmb250aWNvbjogVE5TRm9udEljb25TZXJ2aWNlKSB7XHJcbi8qaHR0cC5nZXRKU09OKFwiaHR0cHM6Ly9ncmFwaC5mYWNlYm9vay5jb20vb2F1dGgvYWNjZXNzX3Rva2VuP2NsaWVudF9pZD0xOTgxODgwMTI4NzQ2NjIyJmNsaWVudF9zZWNyZXQ9MTFhZDUwMzVkYjFhN2ViODdiNTBlZmE2YWJhMzBkOTAmZ3JhbnRfdHlwZT1jbGllbnRfY3JlZGVudGlhbHNcIikudGhlbigocmVzKT0+e1xyXG4gIGNvbnNvbGUuZGlyKHJlcyk7XHJcbn0pKi9cclxuICB9XHJcbiAgbmdPbkluaXQoKSA6IHZvaWQge1xyXG4gICAgaHR0cC5nZXRKU09OKFwiaHR0cHM6Ly9ncmFwaC5mYWNlYm9vay5jb20vdjIuOVwiICtcclxuICAgIFwiL3NlYXJjaD90eXBlPXBsYWNlJmZpZWxkcz1uYW1lLGxvY2F0aW9uLGFib3V0JmNlbnRlcj0yNC43ODgwNDQzLC0xMDcuMzk4Mzk3M1wiICtcclxuICAgICBcIiZkaXN0YW5jZT0xMDAwJmFjY2Vzc190b2tlbj1cIiArIHRoaXMuYWNjZXNzVG9rZW4pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgcmVzW1wiZGF0YVwiXS5mb3JFYWNoKHBsYWNlID0+IHtcclxuICAgICAgICAgICB0aGlzLnBsYWNlcy5wdXNoKG5ldyBQbGFjZShwbGFjZVtcImlkXCJdLCBwbGFjZVtcIm5hbWVcIl0sIHBsYWNlW1wibG9jYXRpb25cIl0sIHBsYWNlW1wiYWJvdXRcIl0pKTtcclxuICAgICAgIH0pO1xyXG4gICAgICAgLy9jb25zb2xlLmRpcih0aGlzLnBsYWNlcyk7XHJcbiAgICB9LCBmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==