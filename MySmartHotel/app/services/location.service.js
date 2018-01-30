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
    LocationService.prototype.getDistance = function (location1, location2) {
        var R = 6371; // Radius of the earth in km
        var dLat = this.deg2rad(location2.latitude - location1.latitude); // deg2rad below
        var dLon = this.deg2rad(location2.longitude - location1.longitude);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(location1.latitude)) * Math.cos(this.deg2rad(location2.latitude)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;
    };
    LocationService.prototype.deg2rad = function (deg) {
        return deg * (Math.PI / 180);
    };
    LocationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], LocationService);
    return LocationService;
}());
exports.LocationService = LocationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0RBQXdEO0FBQ3hELGtDQUFvQztBQUNwQywyREFBb0Q7QUFDcEQsOEJBQThDO0FBRzlDO0lBSUU7UUFBQSxpQkFLQztRQU5NLHNCQUFpQixHQUFxQixJQUFJLFlBQU8sRUFBVyxDQUFDO1FBRWxFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSx5QkFBUSxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQUs7WUFDckMsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUE7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ00sdUNBQWEsR0FBcEI7UUFBQSxpQkFnQkM7UUFmQyxNQUFNLENBQUMsZUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFBLFFBQVE7WUFDL0IsV0FBVyxDQUFDLHFCQUFxQixFQUFFLENBQUMsSUFBSSxDQUFDO2dCQUN2QyxXQUFXLENBQUMsa0JBQWtCLENBQUMsRUFBRSxlQUFlLEVBQUUsZ0JBQVEsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxZQUFZO29CQUNwSCxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDO29CQUMvQyxLQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUMsU0FBUyxDQUFDO29CQUNqRCxLQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUMvQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDN0IsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN0QixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxLQUFLO29CQUNaLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3hCLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsS0FBSztnQkFDWixRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0scUNBQVcsR0FBbEI7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRU0scUNBQVcsR0FBbEIsVUFBbUIsU0FBb0IsRUFBRSxTQUFtQjtRQUMzRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyw0QkFBNEI7UUFDMUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFFLGdCQUFnQjtRQUNqRixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxHQUNILElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFDLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdkYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxpQkFBaUI7UUFDaEMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDTyxpQ0FBTyxHQUFmLFVBQWdCLEdBQUc7UUFDakIsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQTlDVyxlQUFlO1FBRDNCLGlCQUFVLEVBQUU7O09BQ0EsZUFBZSxDQWdEM0I7SUFBRCxzQkFBQztDQUFBLEFBaERELElBZ0RDO0FBaERZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBHZW9sb2NhdGlvbiBmcm9tIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCI7XHJcbmltcG9ydCB7IEFjY3VyYWN5IH0gZnJvbSBcInVpL2VudW1zXCI7XHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIi4uL21vZGVscy9sb2NhdGlvbi5tb2RlbFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSBcInJ4anMvUnhcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIExvY2F0aW9uU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb247XHJcbiAgcHJpdmF0ZSBsb2NhdGlvblNldDogYm9vbGVhbjtcclxuICBwdWJsaWMgbG9jYXRpb25TZXRDaGFuZ2U6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5sb2NhdGlvbiA9IG5ldyBMb2NhdGlvbigpO1xyXG4gICAgdGhpcy5sb2NhdGlvblNldENoYW5nZS5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XHJcbiAgICAgIHRoaXMubG9jYXRpb25TZXQgPSB2YWx1ZVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHB1YmxpYyBzZXR1cExvY2F0aW9uKCk6IE9ic2VydmFibGU8TG9jYXRpb24+IHtcclxuICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZShvYnNlcnZlciA9PiB7XHJcbiAgICAgIEdlb2xvY2F0aW9uLmVuYWJsZUxvY2F0aW9uUmVxdWVzdCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIEdlb2xvY2F0aW9uLmdldEN1cnJlbnRMb2NhdGlvbih7IGRlc2lyZWRBY2N1cmFjeTogQWNjdXJhY3kuaGlnaCwgbWF4aW11bUFnZTogNTAwMCwgdGltZW91dDogMTAwMDAgfSkudGhlbihsb2NhdGlvbkRhdGEgPT4ge1xyXG4gICAgICAgICAgdGhpcy5sb2NhdGlvbi5sYXRpdHVkZSA9IGxvY2F0aW9uRGF0YS5sYXRpdHVkZTtcclxuICAgICAgICAgIHRoaXMubG9jYXRpb24ubG9uZ2l0dWRlID0gbG9jYXRpb25EYXRhLmxvbmdpdHVkZTtcclxuICAgICAgICAgIHRoaXMubG9jYXRpb25TZXRDaGFuZ2UubmV4dCghdGhpcy5sb2NhdGlvblNldCk7XHJcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KHRoaXMubG9jYXRpb24pO1xyXG4gICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcclxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICBvYnNlcnZlci5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBvYnNlcnZlci5lcnJvcihlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0TG9jYXRpb24oKTogTG9jYXRpb24ge1xyXG4gICAgcmV0dXJuIHRoaXMubG9jYXRpb247XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0RGlzdGFuY2UobG9jYXRpb24xIDogTG9jYXRpb24sIGxvY2F0aW9uMjogTG9jYXRpb24pIHtcclxuICAgdmFyIFIgPSA2MzcxOyAvLyBSYWRpdXMgb2YgdGhlIGVhcnRoIGluIGttXHJcbiAgIHZhciBkTGF0ID0gdGhpcy5kZWcycmFkKGxvY2F0aW9uMi5sYXRpdHVkZS1sb2NhdGlvbjEubGF0aXR1ZGUpOyAgLy8gZGVnMnJhZCBiZWxvd1xyXG4gICB2YXIgZExvbiA9IHRoaXMuZGVnMnJhZChsb2NhdGlvbjIubG9uZ2l0dWRlLWxvY2F0aW9uMS5sb25naXR1ZGUpO1xyXG4gICB2YXIgYSA9XHJcbiAgICAgTWF0aC5zaW4oZExhdC8yKSAqIE1hdGguc2luKGRMYXQvMikgK1xyXG4gICAgIE1hdGguY29zKHRoaXMuZGVnMnJhZChsb2NhdGlvbjEubGF0aXR1ZGUpKSAqIE1hdGguY29zKHRoaXMuZGVnMnJhZChsb2NhdGlvbjIubGF0aXR1ZGUpKSAqXHJcbiAgICAgTWF0aC5zaW4oZExvbi8yKSAqIE1hdGguc2luKGRMb24vMik7XHJcbiAgIHZhciBjID0gMiAqIE1hdGguYXRhbjIoTWF0aC5zcXJ0KGEpLCBNYXRoLnNxcnQoMS1hKSk7XHJcbiAgIHZhciBkID0gUiAqIGM7IC8vIERpc3RhbmNlIGluIGttXHJcbiAgIHJldHVybiBkO1xyXG4gfVxyXG4gcHJpdmF0ZSBkZWcycmFkKGRlZykge1xyXG4gICByZXR1cm4gZGVnICogKE1hdGguUEkvMTgwKTtcclxuIH1cclxuXHJcbn1cclxuIl19