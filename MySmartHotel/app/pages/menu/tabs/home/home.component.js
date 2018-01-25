"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var router_1 = require("@angular/router");
var weather_service_1 = require("../../../../services/weather.service");
var weather_model_1 = require("../../../../models/weather.model");
var location_service_1 = require("../../../../services/location.service");
var HomeComponent = (function () {
    function HomeComponent(page, router, fonticon, weatherService, locationService) {
        this.page = page;
        this.router = router;
        this.fonticon = fonticon;
        this.weatherService = weatherService;
        this.locationService = locationService;
        this.weather = new weather_model_1.Weather("0", "-", "-", "-", "-");
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.locationService.locationSetChange.subscribe(function () {
            var location = _this.locationService.getLocation();
            _this.weatherService.getWeather(location.latitude.toString(), location.longitude.toString()).subscribe(function (weatherObj) {
                _this.weather = weatherObj;
            }, function (error) {
                _this.weather = new weather_model_1.Weather("0", "Desconocido", "-", "-", "-");
            });
        }, function () {
            _this.weather = new weather_model_1.Weather("0", "Desconocido", "-", "-", "-");
        });
    };
    HomeComponent.prototype.onScroll = function (event, scrollView, topView) {
        if (scrollView.verticalOffset < 250) {
            var offset = scrollView.verticalOffset / 2;
            if (scrollView.ios) {
                // iOS adjust the position with an animation to create a smother scrolling effect.
                topView.animate({ translate: { x: 0, y: offset } }).then(function () { }, function () { });
            }
            else {
                // Android, animations are jerky so instead just adjust the position without animation.
                topView.translateY = Math.floor(offset);
            }
        }
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'Home',
            templateUrl: 'pages/menu/tabs/home/home.html',
            styleUrls: ['pages/menu/tabs/home/home.css']
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.Router, nativescript_ngx_fonticon_1.TNSFontIconService,
            weather_service_1.WeatherService, location_service_1.LocationService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxnQ0FBK0I7QUFDL0IsdUVBQStEO0FBQy9ELDBDQUF5QztBQUd6Qyx3RUFBc0U7QUFDdEUsa0VBQTJEO0FBQzNELDBFQUF3RTtBQVN4RTtJQUdFLHVCQUFvQixJQUFVLEVBQVUsTUFBZSxFQUFVLFFBQTRCLEVBQ25GLGNBQStCLEVBQVUsZUFBaUM7UUFEaEUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVM7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFvQjtRQUNuRixtQkFBYyxHQUFkLGNBQWMsQ0FBaUI7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7UUFDaEYsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLHVCQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFDSCxnQ0FBUSxHQUFSO1FBQUEsaUJBWUM7UUFYQyxJQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQztZQUMvQyxJQUFJLFFBQVEsR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ2xELEtBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FDbkcsVUFBQyxVQUFVO2dCQUNULEtBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO1lBQzlCLENBQUMsRUFBRSxVQUFDLEtBQUs7Z0JBQ1AsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLHVCQUFPLENBQUMsR0FBRyxFQUFFLGFBQWEsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ2hFLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFFO1lBQ0QsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLHVCQUFPLENBQUMsR0FBRyxFQUFFLGFBQWEsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2hFLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELGdDQUFRLEdBQVIsVUFBUyxLQUFzQixFQUFFLFVBQXNCLEVBQUUsT0FBYTtRQUNwRSxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDbEMsSUFBTSxNQUFNLEdBQUcsVUFBVSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7WUFDN0MsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLGtGQUFrRjtnQkFDbEYsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBUSxDQUFDLEVBQUUsY0FBUSxDQUFDLENBQUMsQ0FBQztZQUNuRixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osdUZBQXVGO2dCQUN2RixPQUFPLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUMsQ0FBQztRQUNMLENBQUM7SUFDSCxDQUFDO0lBL0JVLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFdBQVcsRUFBRSxnQ0FBZ0M7WUFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7U0FDN0MsQ0FBQzt5Q0FLMEIsV0FBSSxFQUFtQixlQUFNLEVBQW9CLDhDQUFrQjtZQUNsRSxnQ0FBYyxFQUE0QixrQ0FBZTtPQUp6RSxhQUFhLENBZ0N6QjtJQUFELG9CQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7QUFoQ1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgVE5TRm9udEljb25TZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgU2Nyb2xsVmlldywgU2Nyb2xsRXZlbnREYXRhIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9zY3JvbGwtdmlldyc7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlldyc7XHJcbmltcG9ydCB7IFdlYXRoZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3NlcnZpY2VzL3dlYXRoZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBXZWF0aGVyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL21vZGVscy93ZWF0aGVyLm1vZGVsXCI7XHJcbmltcG9ydCB7IExvY2F0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9zZXJ2aWNlcy9sb2NhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcIkNvbG9yXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ0hvbWUnLFxyXG4gIHRlbXBsYXRlVXJsOiAncGFnZXMvbWVudS90YWJzL2hvbWUvaG9tZS5odG1sJyxcclxuICBzdHlsZVVybHM6IFsncGFnZXMvbWVudS90YWJzL2hvbWUvaG9tZS5jc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICB3ZWF0aGVyIDogV2VhdGhlcjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlciA6IFJvdXRlciwgcHJpdmF0ZSBmb250aWNvbjogVE5TRm9udEljb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB3ZWF0aGVyU2VydmljZSA6IFdlYXRoZXJTZXJ2aWNlLCBwcml2YXRlIGxvY2F0aW9uU2VydmljZSA6IExvY2F0aW9uU2VydmljZSkge1xyXG4gICAgICB0aGlzLndlYXRoZXIgPSBuZXcgV2VhdGhlcihcIjBcIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIpO1xyXG4gICAgfVxyXG4gIG5nT25Jbml0KCkgOiB2b2lkIHtcclxuICAgIHRoaXMubG9jYXRpb25TZXJ2aWNlLmxvY2F0aW9uU2V0Q2hhbmdlLnN1YnNjcmliZSgoKT0+e1xyXG4gICAgICBsZXQgbG9jYXRpb24gPSB0aGlzLmxvY2F0aW9uU2VydmljZS5nZXRMb2NhdGlvbigpO1xyXG4gICAgICB0aGlzLndlYXRoZXJTZXJ2aWNlLmdldFdlYXRoZXIobG9jYXRpb24ubGF0aXR1ZGUudG9TdHJpbmcoKSwgbG9jYXRpb24ubG9uZ2l0dWRlLnRvU3RyaW5nKCkpLnN1YnNjcmliZShcclxuICAgICAgICAod2VhdGhlck9iaikgPT4ge1xyXG4gICAgICAgICAgdGhpcy53ZWF0aGVyID0gd2VhdGhlck9iajtcclxuICAgICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgdGhpcy53ZWF0aGVyID0gbmV3IFdlYXRoZXIoXCIwXCIsIFwiRGVzY29ub2NpZG9cIiwgXCItXCIsIFwiLVwiLCBcIi1cIik7XHJcbiAgICAgIH0pO1xyXG4gICAgfSwgKCk9PntcclxuICAgICAgdGhpcy53ZWF0aGVyID0gbmV3IFdlYXRoZXIoXCIwXCIsIFwiRGVzY29ub2NpZG9cIiwgXCItXCIsIFwiLVwiLCBcIi1cIik7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgb25TY3JvbGwoZXZlbnQ6IFNjcm9sbEV2ZW50RGF0YSwgc2Nyb2xsVmlldzogU2Nyb2xsVmlldywgdG9wVmlldzogVmlldykge1xyXG4gICAgaWYgKHNjcm9sbFZpZXcudmVydGljYWxPZmZzZXQgPCAyNTApIHtcclxuICAgICAgICBjb25zdCBvZmZzZXQgPSBzY3JvbGxWaWV3LnZlcnRpY2FsT2Zmc2V0IC8gMjtcclxuICAgICAgICBpZiAoc2Nyb2xsVmlldy5pb3MpIHtcclxuICAgICAgICAgICAgLy8gaU9TIGFkanVzdCB0aGUgcG9zaXRpb24gd2l0aCBhbiBhbmltYXRpb24gdG8gY3JlYXRlIGEgc21vdGhlciBzY3JvbGxpbmcgZWZmZWN0LlxyXG4gICAgICAgICAgICB0b3BWaWV3LmFuaW1hdGUoeyB0cmFuc2xhdGU6IHsgeDogMCwgeTogb2Zmc2V0IH0gfSkudGhlbigoKSA9PiB7IH0sICgpID0+IHsgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gQW5kcm9pZCwgYW5pbWF0aW9ucyBhcmUgamVya3kgc28gaW5zdGVhZCBqdXN0IGFkanVzdCB0aGUgcG9zaXRpb24gd2l0aG91dCBhbmltYXRpb24uXHJcbiAgICAgICAgICAgIHRvcFZpZXcudHJhbnNsYXRlWSA9IE1hdGguZmxvb3Iob2Zmc2V0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==