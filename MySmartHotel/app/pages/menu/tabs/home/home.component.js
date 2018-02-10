"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var router_1 = require("@angular/router");
var weather_service_1 = require("../../../../services/weather.service");
var weather_model_1 = require("../../../../models/weather.model");
var date_model_1 = require("../../../../models/date.model");
var location_service_1 = require("../../../../services/location.service");
var backend_service_1 = require("../../../../services/backend.service");
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
        this.user = backend_service_1.BackendService.userData;
        var dateArrival = new Date(this.user.arrival);
        var dateDeparture = new Date(this.user.departure);
        this.arrival = new date_model_1.DateReservation(dateArrival.getMonth(), dateArrival.getDate() + 1, dateArrival.getDay() + 1);
        this.departure = new date_model_1.DateReservation(dateDeparture.getMonth(), dateDeparture.getDate() + 1, dateDeparture.getDay() + 1);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxnQ0FBK0I7QUFDL0IsdUVBQStEO0FBQy9ELDBDQUF5QztBQUd6Qyx3RUFBc0U7QUFDdEUsa0VBQTJEO0FBRTNELDREQUFnRTtBQUNoRSwwRUFBd0U7QUFDeEUsd0VBQXNFO0FBRXRFLCtEQUFrRTtBQVFsRTtJQU1FLHVCQUFvQixJQUFVLEVBQVUsTUFBYyxFQUFVLFFBQTRCLEVBQ2xGLGNBQThCLEVBQVUsZUFBZ0M7UUFEOUQsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFvQjtRQUNsRixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEYsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLHVCQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFDRCxnQ0FBUSxHQUFSO1FBQUEsaUJBbUJDO1FBbEJDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxnQ0FBUSxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUM7WUFDL0MsSUFBSSxRQUFRLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNsRCxFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDdkMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUNoRCxVQUFDLFVBQVU7b0JBQ1QsS0FBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7b0JBQzFCLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUM7Z0JBQzVDLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN2RCxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsSUFBSSxHQUFHLGdDQUFjLENBQUMsUUFBUSxDQUFDO1FBQ3BDLElBQUksV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUMsSUFBSSxhQUFhLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksNEJBQWUsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEVBQUUsV0FBVyxDQUFDLE9BQU8sRUFBRSxHQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsTUFBTSxFQUFFLEdBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLDRCQUFlLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxFQUFFLGFBQWEsQ0FBQyxPQUFPLEVBQUUsR0FBQyxDQUFDLEVBQUUsYUFBYSxDQUFDLE1BQU0sRUFBRSxHQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RILENBQUM7SUFDRCxnQ0FBUSxHQUFSLFVBQVMsS0FBc0IsRUFBRSxVQUFzQixFQUFFLE9BQWE7UUFDcEUsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLGNBQWMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLElBQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO1lBQzdDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixrRkFBa0Y7Z0JBQ2xGLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQVEsQ0FBQyxFQUFFLGNBQVEsQ0FBQyxDQUFDLENBQUM7WUFDakYsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLHVGQUF1RjtnQkFDdkYsT0FBTyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFDLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQXpDVSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTTtZQUNoQixXQUFXLEVBQUUsZ0NBQWdDO1lBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO1NBQzdDLENBQUM7eUNBUTBCLFdBQUksRUFBa0IsZUFBTSxFQUFvQiw4Q0FBa0I7WUFDbEUsZ0NBQWMsRUFBMkIsa0NBQWU7T0FQdkUsYUFBYSxDQTBDekI7SUFBRCxvQkFBQztDQUFBLEFBMUNELElBMENDO0FBMUNZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFROU0ZvbnRJY29uU2VydmljZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtZm9udGljb24nO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFNjcm9sbFZpZXcsIFNjcm9sbEV2ZW50RGF0YSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvc2Nyb2xsLXZpZXcnO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9jb3JlL3ZpZXcnO1xyXG5pbXBvcnQgeyBXZWF0aGVyU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9zZXJ2aWNlcy93ZWF0aGVyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgV2VhdGhlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9tb2RlbHMvd2VhdGhlci5tb2RlbFwiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL21vZGVscy91c2VyLm1vZGVsXCI7XHJcbmltcG9ydCB7IERhdGVSZXNlcnZhdGlvbiB9IGZyb20gXCIuLi8uLi8uLi8uLi9tb2RlbHMvZGF0ZS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBMb2NhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvbG9jYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9zZXJ2aWNlcy9iYWNrZW5kLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiQ29sb3JcIjtcclxuaW1wb3J0IHsgU25hY2tCYXIsIFNuYWNrQmFyT3B0aW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtc25hY2tiYXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnSG9tZScsXHJcbiAgdGVtcGxhdGVVcmw6ICdwYWdlcy9tZW51L3RhYnMvaG9tZS9ob21lLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydwYWdlcy9tZW51L3RhYnMvaG9tZS9ob21lLmNzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHJpdmF0ZSB3ZWF0aGVyOiBXZWF0aGVyO1xyXG4gIHByaXZhdGUgc25hY2tCYXI6IFNuYWNrQmFyO1xyXG4gIHByaXZhdGUgdXNlciA6IFVzZXI7XHJcbiAgcHJpdmF0ZSBhcnJpdmFsIDogRGF0ZVJlc2VydmF0aW9uO1xyXG4gIHByaXZhdGUgZGVwYXJ0dXJlIDogRGF0ZVJlc2VydmF0aW9uO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBmb250aWNvbjogVE5TRm9udEljb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB3ZWF0aGVyU2VydmljZTogV2VhdGhlclNlcnZpY2UsIHByaXZhdGUgbG9jYXRpb25TZXJ2aWNlOiBMb2NhdGlvblNlcnZpY2UpIHtcclxuICAgIHRoaXMud2VhdGhlciA9IG5ldyBXZWF0aGVyKFwiMFwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIik7XHJcbiAgfVxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zbmFja0JhciA9IG5ldyBTbmFja0JhcigpO1xyXG4gICAgdGhpcy5sb2NhdGlvblNlcnZpY2UubG9jYXRpb25TZXRDaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgbGV0IGxvY2F0aW9uID0gdGhpcy5sb2NhdGlvblNlcnZpY2UuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgaWYgKHRoaXMud2VhdGhlclNlcnZpY2Uuc2hvdWxkVXBkYXRlKCkpIHtcclxuICAgICAgICB0aGlzLndlYXRoZXJTZXJ2aWNlLmdldFdlYXRoZXIobG9jYXRpb24pLnN1YnNjcmliZShcclxuICAgICAgICAgICh3ZWF0aGVyT2JqKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMud2VhdGhlciA9IHdlYXRoZXJPYmo7XHJcbiAgICAgICAgICAgIHRoaXMuc25hY2tCYXIuc2ltcGxlKCdDbGltYSBhY3R1YWxpemFkbycpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy53ZWF0aGVyID0gdGhpcy53ZWF0aGVyU2VydmljZS5nZXRTYXZlZFdlYXRoZXIoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnVzZXIgPSBCYWNrZW5kU2VydmljZS51c2VyRGF0YTtcclxuICAgIGxldCBkYXRlQXJyaXZhbCA9IG5ldyBEYXRlKHRoaXMudXNlci5hcnJpdmFsKTtcclxuICAgIGxldCBkYXRlRGVwYXJ0dXJlID0gbmV3IERhdGUodGhpcy51c2VyLmRlcGFydHVyZSk7XHJcbiAgICB0aGlzLmFycml2YWwgPSBuZXcgRGF0ZVJlc2VydmF0aW9uKGRhdGVBcnJpdmFsLmdldE1vbnRoKCksIGRhdGVBcnJpdmFsLmdldERhdGUoKSsxLCBkYXRlQXJyaXZhbC5nZXREYXkoKSsxKTtcclxuICAgIHRoaXMuZGVwYXJ0dXJlID0gbmV3IERhdGVSZXNlcnZhdGlvbihkYXRlRGVwYXJ0dXJlLmdldE1vbnRoKCksIGRhdGVEZXBhcnR1cmUuZ2V0RGF0ZSgpKzEsIGRhdGVEZXBhcnR1cmUuZ2V0RGF5KCkrMSk7XHJcbiAgfVxyXG4gIG9uU2Nyb2xsKGV2ZW50OiBTY3JvbGxFdmVudERhdGEsIHNjcm9sbFZpZXc6IFNjcm9sbFZpZXcsIHRvcFZpZXc6IFZpZXcpIHtcclxuICAgIGlmIChzY3JvbGxWaWV3LnZlcnRpY2FsT2Zmc2V0IDwgMjUwKSB7XHJcbiAgICAgIGNvbnN0IG9mZnNldCA9IHNjcm9sbFZpZXcudmVydGljYWxPZmZzZXQgLyAyO1xyXG4gICAgICBpZiAoc2Nyb2xsVmlldy5pb3MpIHtcclxuICAgICAgICAvLyBpT1MgYWRqdXN0IHRoZSBwb3NpdGlvbiB3aXRoIGFuIGFuaW1hdGlvbiB0byBjcmVhdGUgYSBzbW90aGVyIHNjcm9sbGluZyBlZmZlY3QuXHJcbiAgICAgICAgdG9wVmlldy5hbmltYXRlKHsgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IG9mZnNldCB9IH0pLnRoZW4oKCkgPT4geyB9LCAoKSA9PiB7IH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIEFuZHJvaWQsIGFuaW1hdGlvbnMgYXJlIGplcmt5IHNvIGluc3RlYWQganVzdCBhZGp1c3QgdGhlIHBvc2l0aW9uIHdpdGhvdXQgYW5pbWF0aW9uLlxyXG4gICAgICAgIHRvcFZpZXcudHJhbnNsYXRlWSA9IE1hdGguZmxvb3Iob2Zmc2V0KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=