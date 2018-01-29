"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var router_1 = require("@angular/router");
var weather_service_1 = require("../../../../services/weather.service");
var weather_model_1 = require("../../../../models/weather.model");
var location_service_1 = require("../../../../services/location.service");
var nativescript_snackbar_1 = require("nativescript-snackbar");
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
        this.snackBar = new nativescript_snackbar_1.SnackBar();
        this.locationService.locationSetChange.subscribe(function () {
            var location = _this.locationService.getLocation();
            if (_this.weatherService.shouldUpdate()) {
                _this.weatherService.getWeather(location).subscribe(function (weatherObj) {
                    _this.weather = weatherObj;
                    _this.snackBar.simple('Clima actualizado');
                });
            }
            else {
                _this.weather = _this.weatherService.getSavedWeather();
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxnQ0FBK0I7QUFDL0IsdUVBQStEO0FBQy9ELDBDQUF5QztBQUd6Qyx3RUFBc0U7QUFDdEUsa0VBQTJEO0FBQzNELDBFQUF3RTtBQUV4RSwrREFBa0U7QUFRbEU7SUFHRSx1QkFBb0IsSUFBVSxFQUFVLE1BQWMsRUFBVSxRQUE0QixFQUNsRixjQUE4QixFQUFVLGVBQWdDO1FBRDlELFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFDbEYsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hGLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSx1QkFBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBQ0QsZ0NBQVEsR0FBUjtRQUFBLGlCQWNDO1FBYkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGdDQUFRLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQztZQUMvQyxJQUFJLFFBQVEsR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ2xELEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxLQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQ2hELFVBQUMsVUFBVTtvQkFDVCxLQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQztvQkFDMUIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQztnQkFDNUMsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3ZELENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxnQ0FBUSxHQUFSLFVBQVMsS0FBc0IsRUFBRSxVQUFzQixFQUFFLE9BQWE7UUFDcEUsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLGNBQWMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLElBQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO1lBQzdDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixrRkFBa0Y7Z0JBQ2xGLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQVEsQ0FBQyxFQUFFLGNBQVEsQ0FBQyxDQUFDLENBQUM7WUFDakYsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLHVGQUF1RjtnQkFDdkYsT0FBTyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFDLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQWxDVSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTTtZQUNoQixXQUFXLEVBQUUsZ0NBQWdDO1lBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO1NBQzdDLENBQUM7eUNBSzBCLFdBQUksRUFBa0IsZUFBTSxFQUFvQiw4Q0FBa0I7WUFDbEUsZ0NBQWMsRUFBMkIsa0NBQWU7T0FKdkUsYUFBYSxDQW1DekI7SUFBRCxvQkFBQztDQUFBLEFBbkNELElBbUNDO0FBbkNZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFROU0ZvbnRJY29uU2VydmljZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtZm9udGljb24nO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFNjcm9sbFZpZXcsIFNjcm9sbEV2ZW50RGF0YSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvc2Nyb2xsLXZpZXcnO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9jb3JlL3ZpZXcnO1xyXG5pbXBvcnQgeyBXZWF0aGVyU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9zZXJ2aWNlcy93ZWF0aGVyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgV2VhdGhlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9tb2RlbHMvd2VhdGhlci5tb2RlbFwiO1xyXG5pbXBvcnQgeyBMb2NhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvbG9jYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJDb2xvclwiO1xyXG5pbXBvcnQgeyBTbmFja0JhciwgU25hY2tCYXJPcHRpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1zbmFja2JhclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdIb21lJyxcclxuICB0ZW1wbGF0ZVVybDogJ3BhZ2VzL21lbnUvdGFicy9ob21lL2hvbWUuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ3BhZ2VzL21lbnUvdGFicy9ob21lL2hvbWUuY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICB3ZWF0aGVyOiBXZWF0aGVyO1xyXG4gIHNuYWNrQmFyOiBTbmFja0JhcjtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgZm9udGljb246IFROU0ZvbnRJY29uU2VydmljZSxcclxuICAgIHByaXZhdGUgd2VhdGhlclNlcnZpY2U6IFdlYXRoZXJTZXJ2aWNlLCBwcml2YXRlIGxvY2F0aW9uU2VydmljZTogTG9jYXRpb25TZXJ2aWNlKSB7XHJcbiAgICB0aGlzLndlYXRoZXIgPSBuZXcgV2VhdGhlcihcIjBcIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIpO1xyXG4gIH1cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc25hY2tCYXIgPSBuZXcgU25hY2tCYXIoKTtcclxuICAgIHRoaXMubG9jYXRpb25TZXJ2aWNlLmxvY2F0aW9uU2V0Q2hhbmdlLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIGxldCBsb2NhdGlvbiA9IHRoaXMubG9jYXRpb25TZXJ2aWNlLmdldExvY2F0aW9uKCk7XHJcbiAgICAgIGlmICh0aGlzLndlYXRoZXJTZXJ2aWNlLnNob3VsZFVwZGF0ZSgpKSB7XHJcbiAgICAgICAgdGhpcy53ZWF0aGVyU2VydmljZS5nZXRXZWF0aGVyKGxvY2F0aW9uKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAod2VhdGhlck9iaikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLndlYXRoZXIgPSB3ZWF0aGVyT2JqO1xyXG4gICAgICAgICAgICB0aGlzLnNuYWNrQmFyLnNpbXBsZSgnQ2xpbWEgYWN0dWFsaXphZG8nKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMud2VhdGhlciA9IHRoaXMud2VhdGhlclNlcnZpY2UuZ2V0U2F2ZWRXZWF0aGVyKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25TY3JvbGwoZXZlbnQ6IFNjcm9sbEV2ZW50RGF0YSwgc2Nyb2xsVmlldzogU2Nyb2xsVmlldywgdG9wVmlldzogVmlldykge1xyXG4gICAgaWYgKHNjcm9sbFZpZXcudmVydGljYWxPZmZzZXQgPCAyNTApIHtcclxuICAgICAgY29uc3Qgb2Zmc2V0ID0gc2Nyb2xsVmlldy52ZXJ0aWNhbE9mZnNldCAvIDI7XHJcbiAgICAgIGlmIChzY3JvbGxWaWV3Lmlvcykge1xyXG4gICAgICAgIC8vIGlPUyBhZGp1c3QgdGhlIHBvc2l0aW9uIHdpdGggYW4gYW5pbWF0aW9uIHRvIGNyZWF0ZSBhIHNtb3RoZXIgc2Nyb2xsaW5nIGVmZmVjdC5cclxuICAgICAgICB0b3BWaWV3LmFuaW1hdGUoeyB0cmFuc2xhdGU6IHsgeDogMCwgeTogb2Zmc2V0IH0gfSkudGhlbigoKSA9PiB7IH0sICgpID0+IHsgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gQW5kcm9pZCwgYW5pbWF0aW9ucyBhcmUgamVya3kgc28gaW5zdGVhZCBqdXN0IGFkanVzdCB0aGUgcG9zaXRpb24gd2l0aG91dCBhbmltYXRpb24uXHJcbiAgICAgICAgdG9wVmlldy50cmFuc2xhdGVZID0gTWF0aC5mbG9vcihvZmZzZXQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==