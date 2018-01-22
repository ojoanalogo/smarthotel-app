"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var router_1 = require("@angular/router");
var places_service_1 = require("../../services/places.service");
var mapbox = require("nativescript-mapbox");
var MenuComponent = (function () {
    function MenuComponent(page, router, fonticon, placesService) {
        this.page = page;
        this.router = router;
        this.fonticon = fonticon;
        this.placesService = placesService;
        this.places = [];
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.placesService.getPlaces("24.7880443", "-107.3983973").subscribe(function (placesResponse) {
            placesResponse.forEach(function (place) {
                _this.places.unshift(place);
            });
        });
    };
    MenuComponent.prototype.onMapReady = function (args) {
        this.places.forEach(function (place) {
            var lat = place["location"]["latitude"];
            var long = place["location"]["longitude"];
            args.map.addMarkers([
                {
                    lat: lat,
                    lng: long,
                    title: place["name"],
                    subtitle: place["about"],
                    selected: true,
                    onCalloutTap: function () { console.log("'Nice location' marker callout tapped"); }
                }
            ]);
        });
    };
    MenuComponent = __decorate([
        core_1.Component({
            selector: 'menu',
            templateUrl: 'pages/menu/menu.html',
            styleUrls: ["pages/menu/menu-global.css", "pages/menu/menu.css"],
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.Router, nativescript_ngx_fonticon_1.TNSFontIconService, places_service_1.PlacesService])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxnQ0FBK0I7QUFDL0IsdUVBQStEO0FBQy9ELDBDQUF5QztBQUN6QyxnRUFBOEQ7QUFFOUQsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFRNUM7SUFFRSx1QkFBb0IsSUFBVSxFQUFVLE1BQWUsRUFBVSxRQUE0QixFQUFVLGFBQTZCO1FBQWhILFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFTO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZ0I7UUFEN0gsV0FBTSxHQUFrQixFQUFFLENBQUM7SUFDcUcsQ0FBQztJQUN4SSxnQ0FBUSxHQUFSO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsY0FBYyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsY0FBYztZQUNsRixjQUFjLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSztnQkFDeEIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDL0IsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxrQ0FBVSxHQUFWLFVBQVcsSUFBSTtRQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSztZQUN4QixJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDeEMsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDO2dCQUNsQjtvQkFDRSxHQUFHLEVBQUUsR0FBRztvQkFDUixHQUFHLEVBQUUsSUFBSTtvQkFDVCxLQUFLLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQztvQkFDcEIsUUFBUSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUM7b0JBQ3hCLFFBQVEsRUFBRSxJQUFJO29CQUNkLFlBQVksRUFBRSxjQUFXLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLENBQUMsQ0FBQyxDQUFBLENBQUM7aUJBQ2hGO2FBQUMsQ0FDSCxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBekJZLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLEVBQUUscUJBQXFCLENBQUM7U0FDakUsQ0FBQzt5Q0FJMEIsV0FBSSxFQUFtQixlQUFNLEVBQW9CLDhDQUFrQixFQUEwQiw4QkFBYTtPQUZ6SCxhQUFhLENBMEJ6QjtJQUFELG9CQUFDO0NBQUEsQUExQkQsSUEwQkM7QUExQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgVE5TRm9udEljb25TZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUGxhY2VzU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9wbGFjZXMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBQbGFjZSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvcGxhY2UubW9kZWxcIjtcclxudmFyIG1hcGJveCA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtbWFwYm94XCIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtZW51JyxcclxuICB0ZW1wbGF0ZVVybDogJ3BhZ2VzL21lbnUvbWVudS5odG1sJyxcclxuICBzdHlsZVVybHM6IFtcInBhZ2VzL21lbnUvbWVudS1nbG9iYWwuY3NzXCIsIFwicGFnZXMvbWVudS9tZW51LmNzc1wiXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwdWJsaWMgcGxhY2VzIDogQXJyYXk8UGxhY2U+ID0gW107XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlciA6IFJvdXRlciwgcHJpdmF0ZSBmb250aWNvbjogVE5TRm9udEljb25TZXJ2aWNlLCBwcml2YXRlIHBsYWNlc1NlcnZpY2UgOiBQbGFjZXNTZXJ2aWNlKSB7fVxyXG4gIG5nT25Jbml0KCkgOiB2b2lkIHtcclxuICAgIHRoaXMucGxhY2VzU2VydmljZS5nZXRQbGFjZXMoXCIyNC43ODgwNDQzXCIsIFwiLTEwNy4zOTgzOTczXCIpLnN1YnNjcmliZSgocGxhY2VzUmVzcG9uc2UpID0+IHtcclxuICAgICAgcGxhY2VzUmVzcG9uc2UuZm9yRWFjaChwbGFjZSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnBsYWNlcy51bnNoaWZ0KHBsYWNlKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgb25NYXBSZWFkeShhcmdzKSB7XHJcbiAgICB0aGlzLnBsYWNlcy5mb3JFYWNoKChwbGFjZSkgPT4ge1xyXG4gICAgICB2YXIgbGF0ID0gcGxhY2VbXCJsb2NhdGlvblwiXVtcImxhdGl0dWRlXCJdO1xyXG4gICAgICB2YXIgbG9uZyA9IHBsYWNlW1wibG9jYXRpb25cIl1bXCJsb25naXR1ZGVcIl07XHJcbiAgICAgIGFyZ3MubWFwLmFkZE1hcmtlcnMoW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGxhdDogbGF0LFxyXG4gICAgICAgICAgbG5nOiBsb25nLFxyXG4gICAgICAgICAgdGl0bGU6IHBsYWNlW1wibmFtZVwiXSxcclxuICAgICAgICAgIHN1YnRpdGxlOiBwbGFjZVtcImFib3V0XCJdLFxyXG4gICAgICAgICAgc2VsZWN0ZWQ6IHRydWUsXHJcbiAgICAgICAgICBvbkNhbGxvdXRUYXA6IGZ1bmN0aW9uKCl7Y29uc29sZS5sb2coXCInTmljZSBsb2NhdGlvbicgbWFya2VyIGNhbGxvdXQgdGFwcGVkXCIpO31cclxuICAgICAgICB9XVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbn1cclxufVxyXG4iXX0=