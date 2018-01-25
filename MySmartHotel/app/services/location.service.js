"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Geolocation = require("nativescript-geolocation");
var enums_1 = require("ui/enums");
var location_model_1 = require("../models/location.model");
var Rx_1 = require("rxjs/Rx");
var LocationService = (function () {
    function LocationService() {
        var _this = this;
        this.locationSetChange = new Rx_1.Subject();
        this.location = new location_model_1.Location();
        this.locationSetChange.subscribe(function (value) {
            _this.locationSet = value;
        });
    }
    LocationService.prototype.setupLocation = function () {
        var _this = this;
        return Rx_1.Observable.create(function (observer) {
            Geolocation.enableLocationRequest().then(function () {
                Geolocation.getCurrentLocation({ desiredAccuracy: enums_1.Accuracy.high, maximumAge: 5000, timeout: 10000 }).then(function (locationData) {
                    _this.location.latitude = locationData.latitude;
                    _this.location.longitude = locationData.longitude;
                    _this.locationSetChange.next(!_this.locationSet);
                    observer.next(_this.location);
                    observer.complete();
                }).catch(function (error) {
                    observer.error(error);
                });
            }).catch(function (error) {
                observer.error(error);
            });
        });
    };
    LocationService.prototype.getLocation = function () {
        return this.location;
    };
    LocationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], LocationService);
    return LocationService;
}());
exports.LocationService = LocationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0RBQXdEO0FBQ3hELGtDQUFvQztBQUNwQywyREFBb0Q7QUFDcEQsOEJBQThDO0FBRzlDO0lBSUc7UUFBQSxpQkFLQTtRQU5ELHNCQUFpQixHQUFxQixJQUFJLFlBQU8sRUFBVyxDQUFDO1FBRXhELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSx5QkFBUSxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQUs7WUFDdkMsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUE7UUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBQ1MsdUNBQWEsR0FBcEI7UUFBQSxpQkFnQkM7UUFmQyxNQUFNLENBQUMsZUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFBLFFBQVE7WUFDdkMsV0FBVyxDQUFDLHFCQUFxQixFQUFFLENBQUMsSUFBSSxDQUFDO2dCQUN6QixXQUFXLENBQUMsa0JBQWtCLENBQUMsRUFBRSxlQUFlLEVBQUUsZ0JBQVEsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxZQUFZO29CQUNwSCxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDO29CQUMvQyxLQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUMsU0FBUyxDQUFDO29CQUNqRCxLQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUMvQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDN0IsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN0QixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxLQUFLO29CQUNaLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3hCLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsS0FBSztnQkFDWixRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDVCxDQUFDO0lBRU0scUNBQVcsR0FBbEI7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBOUJPLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTs7T0FDQSxlQUFlLENBK0IzQjtJQUFELHNCQUFDO0NBQUEsQUEvQkQsSUErQkM7QUEvQlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIEdlb2xvY2F0aW9uIGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjtcclxuaW1wb3J0IHsgQWNjdXJhY3kgfSBmcm9tIFwidWkvZW51bXNcIjtcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tIFwiLi4vbW9kZWxzL2xvY2F0aW9uLm1vZGVsXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTG9jYXRpb25TZXJ2aWNlIHtcclxuICBwcml2YXRlIGxvY2F0aW9uIDogTG9jYXRpb247XHJcbiAgcHJpdmF0ZSBsb2NhdGlvblNldCA6IGJvb2xlYW47XHJcbiAgbG9jYXRpb25TZXRDaGFuZ2U6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG4gICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgIHRoaXMubG9jYXRpb24gPSBuZXcgTG9jYXRpb24oKTtcclxuICAgICAgIHRoaXMubG9jYXRpb25TZXRDaGFuZ2Uuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgdGhpcy5sb2NhdGlvblNldCA9IHZhbHVlXHJcbiAgIH0pO1xyXG4gIH1cclxuICAgICBwdWJsaWMgc2V0dXBMb2NhdGlvbigpIDogT2JzZXJ2YWJsZTxMb2NhdGlvbj4ge1xyXG4gICAgICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKG9ic2VydmVyID0+IHtcclxuIEdlb2xvY2F0aW9uLmVuYWJsZUxvY2F0aW9uUmVxdWVzdCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgIEdlb2xvY2F0aW9uLmdldEN1cnJlbnRMb2NhdGlvbih7IGRlc2lyZWRBY2N1cmFjeTogQWNjdXJhY3kuaGlnaCwgbWF4aW11bUFnZTogNTAwMCwgdGltZW91dDogMTAwMDAgfSkudGhlbihsb2NhdGlvbkRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgdGhpcy5sb2NhdGlvbi5sYXRpdHVkZSA9IGxvY2F0aW9uRGF0YS5sYXRpdHVkZTtcclxuICAgICAgICAgICAgICAgICAgIHRoaXMubG9jYXRpb24ubG9uZ2l0dWRlID0gbG9jYXRpb25EYXRhLmxvbmdpdHVkZTtcclxuICAgICAgICAgICAgICAgICAgIHRoaXMubG9jYXRpb25TZXRDaGFuZ2UubmV4dCghdGhpcy5sb2NhdGlvblNldCk7XHJcbiAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHRoaXMubG9jYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcclxuICAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgIH0pO1xyXG4gICAgIH1cclxuXHJcbiAgICAgcHVibGljIGdldExvY2F0aW9uKCkgOiBMb2NhdGlvbiB7XHJcbiAgICAgICByZXR1cm4gdGhpcy5sb2NhdGlvbjtcclxuICAgICB9XHJcbn1cclxuIl19