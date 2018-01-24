"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var places_service_1 = require("../../services/places.service");
var location_service_1 = require("../../services/location.service");
var location_model_1 = require("../../models/location.model");
var nativescript_fancyalert_1 = require("nativescript-fancyalert");
var MenuComponent = (function () {
    function MenuComponent(locationService, placesService) {
        this.locationService = locationService;
        this.placesService = placesService;
        this.location = new location_model_1.Location();
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.locationService.isEnabled().then(function (success) {
            _this.locationService.getLocation().then(function (locationObj) {
                _this.location.latitude = locationObj.latitude;
                _this.location.longitude = locationObj.longitude;
            }, function (error) {
                nativescript_fancyalert_1.TNSFancyAlert.showError("Error de ubicación", "Es necesario activar los servicios de ubicación", "Entendido");
            });
        }, function (notEnabled) {
            // Solicitar activación...
            _this.locationService.requestEnable().catch(function (error) {
                nativescript_fancyalert_1.TNSFancyAlert.showError("Error de ubicación", "Es necesario activar los servicios de ubicación", "Entendido");
            });
        });
    };
    MenuComponent.prototype.changeTab = function (i) {
        this.tab.nativeElement.selectedIndex = i;
    };
    __decorate([
        core_1.ViewChild("tab"),
        __metadata("design:type", core_1.ElementRef)
    ], MenuComponent.prototype, "tab", void 0);
    MenuComponent = __decorate([
        core_1.Component({
            selector: 'MenuComponent',
            templateUrl: 'pages/menu/menu.html'
        }),
        __metadata("design:paramtypes", [location_service_1.LocationService, places_service_1.PlacesService])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSxnRUFBOEQ7QUFDOUQsb0VBQWtFO0FBQ2xFLDhEQUF1RDtBQUN2RCxtRUFBd0Q7QUFPeEQ7SUFHRSx1QkFBb0IsZUFBaUMsRUFBVSxhQUE2QjtRQUF4RSxvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZ0I7UUFDMUYsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLHlCQUFRLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUFBLGlCQWlCQztRQWhCQyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FDbkMsVUFBQyxPQUFPO1lBQ04sS0FBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxXQUFXO2dCQUNsRCxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsUUFBUSxDQUFDO2dCQUM5QyxLQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDO1lBR2xELENBQUMsRUFBRSxVQUFDLEtBQUs7Z0JBQ1AsdUNBQWEsQ0FBQyxTQUFTLENBQUMsb0JBQW9CLEVBQUUsaURBQWlELEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDaEgsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLEVBQUUsVUFBQyxVQUFVO1lBQ1osMEJBQTBCO1lBQzFCLEtBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQUMsS0FBSztnQkFDakQsdUNBQWEsQ0FBQyxTQUFTLENBQUMsb0JBQW9CLEVBQUUsaURBQWlELEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDaEgsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNILENBQUM7SUFFTSxpQ0FBUyxHQUFoQixVQUFpQixDQUFDO1FBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQTNCaUI7UUFBakIsZ0JBQVMsQ0FBQyxLQUFLLENBQUM7a0NBQU0saUJBQVU7OENBQUM7SUFEdkIsYUFBYTtRQUx6QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLHNCQUFzQjtTQUNwQyxDQUFDO3lDQUtzQyxrQ0FBZSxFQUEwQiw4QkFBYTtPQUhqRixhQUFhLENBNkJ6QjtJQUFELG9CQUFDO0NBQUEsQUE3QkQsSUE2QkM7QUE3Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGxhY2VzU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9wbGFjZXMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBMb2NhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvbG9jYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gXCIuLi8uLi9tb2RlbHMvbG9jYXRpb24ubW9kZWxcIjtcclxuaW1wb3J0IHsgVE5TRmFuY3lBbGVydCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1mYW5jeWFsZXJ0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnTWVudUNvbXBvbmVudCcsXHJcbiAgdGVtcGxhdGVVcmw6ICdwYWdlcy9tZW51L21lbnUuaHRtbCdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBAVmlld0NoaWxkKFwidGFiXCIpIHRhYjogRWxlbWVudFJlZjtcclxuICBsb2NhdGlvbiA6IExvY2F0aW9uO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9jYXRpb25TZXJ2aWNlIDogTG9jYXRpb25TZXJ2aWNlLCBwcml2YXRlIHBsYWNlc1NlcnZpY2UgOiBQbGFjZXNTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLmxvY2F0aW9uID0gbmV3IExvY2F0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIDogdm9pZCB7XHJcbiAgICB0aGlzLmxvY2F0aW9uU2VydmljZS5pc0VuYWJsZWQoKS50aGVuKFxyXG4gICAgICAoc3VjY2Vzcyk9PiB7XHJcbiAgICAgICAgdGhpcy5sb2NhdGlvblNlcnZpY2UuZ2V0TG9jYXRpb24oKS50aGVuKChsb2NhdGlvbk9iaikgPT4ge1xyXG4gICAgICAgICAgdGhpcy5sb2NhdGlvbi5sYXRpdHVkZSA9IGxvY2F0aW9uT2JqLmxhdGl0dWRlO1xyXG4gICAgICAgICAgdGhpcy5sb2NhdGlvbi5sb25naXR1ZGUgPSBsb2NhdGlvbk9iai5sb25naXR1ZGU7XHJcblxyXG5cclxuICAgICAgICB9LCAoZXJyb3IpID0+e1xyXG4gICAgICAgICAgVE5TRmFuY3lBbGVydC5zaG93RXJyb3IoXCJFcnJvciBkZSB1YmljYWNpw7NuXCIsIFwiRXMgbmVjZXNhcmlvIGFjdGl2YXIgbG9zIHNlcnZpY2lvcyBkZSB1YmljYWNpw7NuXCIsIFwiRW50ZW5kaWRvXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgKG5vdEVuYWJsZWQpID0+IHtcclxuICAgICAgLy8gU29saWNpdGFyIGFjdGl2YWNpw7NuLi4uXHJcbiAgICAgIHRoaXMubG9jYXRpb25TZXJ2aWNlLnJlcXVlc3RFbmFibGUoKS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgVE5TRmFuY3lBbGVydC5zaG93RXJyb3IoXCJFcnJvciBkZSB1YmljYWNpw7NuXCIsIFwiRXMgbmVjZXNhcmlvIGFjdGl2YXIgbG9zIHNlcnZpY2lvcyBkZSB1YmljYWNpw7NuXCIsIFwiRW50ZW5kaWRvXCIpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2hhbmdlVGFiKGkpIDogdm9pZCB7XHJcbiAgICB0aGlzLnRhYi5uYXRpdmVFbGVtZW50LnNlbGVjdGVkSW5kZXggPSBpO1xyXG4gIH1cclxufVxyXG4iXX0=