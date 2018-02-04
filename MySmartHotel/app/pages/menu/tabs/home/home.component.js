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
        this.arrival = new date_model_1.DateReservation(dateArrival.getMonth(), dateArrival.getDate(), dateArrival.getDay());
        this.departure = new date_model_1.DateReservation(dateDeparture.getMonth(), dateDeparture.getDate(), dateDeparture.getDay());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxnQ0FBK0I7QUFDL0IsdUVBQStEO0FBQy9ELDBDQUF5QztBQUd6Qyx3RUFBc0U7QUFDdEUsa0VBQTJEO0FBRTNELDREQUFnRTtBQUNoRSwwRUFBd0U7QUFDeEUsd0VBQXNFO0FBRXRFLCtEQUFrRTtBQVFsRTtJQU1FLHVCQUFvQixJQUFVLEVBQVUsTUFBYyxFQUFVLFFBQTRCLEVBQ2xGLGNBQThCLEVBQVUsZUFBZ0M7UUFEOUQsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFvQjtRQUNsRixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEYsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLHVCQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFDRCxnQ0FBUSxHQUFSO1FBQUEsaUJBbUJDO1FBbEJDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxnQ0FBUSxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUM7WUFDL0MsSUFBSSxRQUFRLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNsRCxFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDdkMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUNoRCxVQUFDLFVBQVU7b0JBQ1QsS0FBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7b0JBQzFCLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUM7Z0JBQzVDLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN2RCxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsSUFBSSxHQUFHLGdDQUFjLENBQUMsUUFBUSxDQUFDO1FBQ3BDLElBQUksV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUMsSUFBSSxhQUFhLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksNEJBQWUsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEVBQUUsV0FBVyxDQUFDLE9BQU8sRUFBRSxFQUFFLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3hHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSw0QkFBZSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsRUFBRSxhQUFhLENBQUMsT0FBTyxFQUFFLEVBQUUsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDbEgsQ0FBQztJQUVELGdDQUFRLEdBQVIsVUFBUyxLQUFzQixFQUFFLFVBQXNCLEVBQUUsT0FBYTtRQUNwRSxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDcEMsSUFBTSxNQUFNLEdBQUcsVUFBVSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7WUFDN0MsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLGtGQUFrRjtnQkFDbEYsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBUSxDQUFDLEVBQUUsY0FBUSxDQUFDLENBQUMsQ0FBQztZQUNqRixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sdUZBQXVGO2dCQUN2RixPQUFPLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDMUMsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBMUNVLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFdBQVcsRUFBRSxnQ0FBZ0M7WUFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7U0FDN0MsQ0FBQzt5Q0FRMEIsV0FBSSxFQUFrQixlQUFNLEVBQW9CLDhDQUFrQjtZQUNsRSxnQ0FBYyxFQUEyQixrQ0FBZTtPQVB2RSxhQUFhLENBMkN6QjtJQUFELG9CQUFDO0NBQUEsQUEzQ0QsSUEyQ0M7QUEzQ1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgVE5TRm9udEljb25TZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgU2Nyb2xsVmlldywgU2Nyb2xsRXZlbnREYXRhIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9zY3JvbGwtdmlldyc7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlldyc7XHJcbmltcG9ydCB7IFdlYXRoZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3NlcnZpY2VzL3dlYXRoZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBXZWF0aGVyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL21vZGVscy93ZWF0aGVyLm1vZGVsXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vbW9kZWxzL3VzZXIubW9kZWxcIjtcclxuaW1wb3J0IHsgRGF0ZVJlc2VydmF0aW9uIH0gZnJvbSBcIi4uLy4uLy4uLy4uL21vZGVscy9kYXRlLm1vZGVsXCI7XHJcbmltcG9ydCB7IExvY2F0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9zZXJ2aWNlcy9sb2NhdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3NlcnZpY2VzL2JhY2tlbmQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJDb2xvclwiO1xyXG5pbXBvcnQgeyBTbmFja0JhciwgU25hY2tCYXJPcHRpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1zbmFja2JhclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdIb21lJyxcclxuICB0ZW1wbGF0ZVVybDogJ3BhZ2VzL21lbnUvdGFicy9ob21lL2hvbWUuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ3BhZ2VzL21lbnUvdGFicy9ob21lL2hvbWUuY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwcml2YXRlIHdlYXRoZXI6IFdlYXRoZXI7XHJcbiAgcHJpdmF0ZSBzbmFja0JhcjogU25hY2tCYXI7XHJcbiAgcHJpdmF0ZSB1c2VyIDogVXNlcjtcclxuICBwcml2YXRlIGFycml2YWwgOiBEYXRlUmVzZXJ2YXRpb247XHJcbiAgcHJpdmF0ZSBkZXBhcnR1cmUgOiBEYXRlUmVzZXJ2YXRpb247XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGZvbnRpY29uOiBUTlNGb250SWNvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHdlYXRoZXJTZXJ2aWNlOiBXZWF0aGVyU2VydmljZSwgcHJpdmF0ZSBsb2NhdGlvblNlcnZpY2U6IExvY2F0aW9uU2VydmljZSkge1xyXG4gICAgdGhpcy53ZWF0aGVyID0gbmV3IFdlYXRoZXIoXCIwXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiKTtcclxuICB9XHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNuYWNrQmFyID0gbmV3IFNuYWNrQmFyKCk7XHJcbiAgICB0aGlzLmxvY2F0aW9uU2VydmljZS5sb2NhdGlvblNldENoYW5nZS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICBsZXQgbG9jYXRpb24gPSB0aGlzLmxvY2F0aW9uU2VydmljZS5nZXRMb2NhdGlvbigpO1xyXG4gICAgICBpZiAodGhpcy53ZWF0aGVyU2VydmljZS5zaG91bGRVcGRhdGUoKSkge1xyXG4gICAgICAgIHRoaXMud2VhdGhlclNlcnZpY2UuZ2V0V2VhdGhlcihsb2NhdGlvbikuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgKHdlYXRoZXJPYmopID0+IHtcclxuICAgICAgICAgICAgdGhpcy53ZWF0aGVyID0gd2VhdGhlck9iajtcclxuICAgICAgICAgICAgdGhpcy5zbmFja0Jhci5zaW1wbGUoJ0NsaW1hIGFjdHVhbGl6YWRvJyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLndlYXRoZXIgPSB0aGlzLndlYXRoZXJTZXJ2aWNlLmdldFNhdmVkV2VhdGhlcigpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMudXNlciA9IEJhY2tlbmRTZXJ2aWNlLnVzZXJEYXRhO1xyXG4gICAgbGV0IGRhdGVBcnJpdmFsID0gbmV3IERhdGUodGhpcy51c2VyLmFycml2YWwpO1xyXG4gICAgbGV0IGRhdGVEZXBhcnR1cmUgPSBuZXcgRGF0ZSh0aGlzLnVzZXIuZGVwYXJ0dXJlKTtcclxuICAgIHRoaXMuYXJyaXZhbCA9IG5ldyBEYXRlUmVzZXJ2YXRpb24oZGF0ZUFycml2YWwuZ2V0TW9udGgoKSwgZGF0ZUFycml2YWwuZ2V0RGF0ZSgpLCBkYXRlQXJyaXZhbC5nZXREYXkoKSk7XHJcbiAgICB0aGlzLmRlcGFydHVyZSA9IG5ldyBEYXRlUmVzZXJ2YXRpb24oZGF0ZURlcGFydHVyZS5nZXRNb250aCgpLCBkYXRlRGVwYXJ0dXJlLmdldERhdGUoKSwgZGF0ZURlcGFydHVyZS5nZXREYXkoKSk7XHJcbiAgfVxyXG5cclxuICBvblNjcm9sbChldmVudDogU2Nyb2xsRXZlbnREYXRhLCBzY3JvbGxWaWV3OiBTY3JvbGxWaWV3LCB0b3BWaWV3OiBWaWV3KSB7XHJcbiAgICBpZiAoc2Nyb2xsVmlldy52ZXJ0aWNhbE9mZnNldCA8IDI1MCkge1xyXG4gICAgICBjb25zdCBvZmZzZXQgPSBzY3JvbGxWaWV3LnZlcnRpY2FsT2Zmc2V0IC8gMjtcclxuICAgICAgaWYgKHNjcm9sbFZpZXcuaW9zKSB7XHJcbiAgICAgICAgLy8gaU9TIGFkanVzdCB0aGUgcG9zaXRpb24gd2l0aCBhbiBhbmltYXRpb24gdG8gY3JlYXRlIGEgc21vdGhlciBzY3JvbGxpbmcgZWZmZWN0LlxyXG4gICAgICAgIHRvcFZpZXcuYW5pbWF0ZSh7IHRyYW5zbGF0ZTogeyB4OiAwLCB5OiBvZmZzZXQgfSB9KS50aGVuKCgpID0+IHsgfSwgKCkgPT4geyB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBBbmRyb2lkLCBhbmltYXRpb25zIGFyZSBqZXJreSBzbyBpbnN0ZWFkIGp1c3QgYWRqdXN0IHRoZSBwb3NpdGlvbiB3aXRob3V0IGFuaW1hdGlvbi5cclxuICAgICAgICB0b3BWaWV3LnRyYW5zbGF0ZVkgPSBNYXRoLmZsb29yKG9mZnNldCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19