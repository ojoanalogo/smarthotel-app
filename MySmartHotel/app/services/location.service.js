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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0RBQXdEO0FBQ3hELGtDQUFvQztBQUNwQywyREFBb0Q7QUFDcEQsOEJBQThDO0FBRzlDO0lBSUU7UUFBQSxpQkFLQztRQU5NLHNCQUFpQixHQUFxQixJQUFJLFlBQU8sRUFBVyxDQUFDO1FBRWxFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSx5QkFBUSxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQUs7WUFDckMsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUE7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ00sdUNBQWEsR0FBcEI7UUFBQSxpQkFnQkM7UUFmQyxNQUFNLENBQUMsZUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFBLFFBQVE7WUFDL0IsV0FBVyxDQUFDLHFCQUFxQixFQUFFLENBQUMsSUFBSSxDQUFDO2dCQUN2QyxXQUFXLENBQUMsa0JBQWtCLENBQUMsRUFBRSxlQUFlLEVBQUUsZ0JBQVEsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxZQUFZO29CQUNwSCxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDO29CQUMvQyxLQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUMsU0FBUyxDQUFDO29CQUNqRCxLQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUMvQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDN0IsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN0QixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxLQUFLO29CQUNaLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3hCLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsS0FBSztnQkFDWixRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0scUNBQVcsR0FBbEI7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBOUJVLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTs7T0FDQSxlQUFlLENBK0IzQjtJQUFELHNCQUFDO0NBQUEsQUEvQkQsSUErQkM7QUEvQlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIEdlb2xvY2F0aW9uIGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjtcclxuaW1wb3J0IHsgQWNjdXJhY3kgfSBmcm9tIFwidWkvZW51bXNcIjtcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tIFwiLi4vbW9kZWxzL2xvY2F0aW9uLm1vZGVsXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTG9jYXRpb25TZXJ2aWNlIHtcclxuICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbjtcclxuICBwcml2YXRlIGxvY2F0aW9uU2V0OiBib29sZWFuO1xyXG4gIHB1YmxpYyBsb2NhdGlvblNldENoYW5nZTogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmxvY2F0aW9uID0gbmV3IExvY2F0aW9uKCk7XHJcbiAgICB0aGlzLmxvY2F0aW9uU2V0Q2hhbmdlLnN1YnNjcmliZSgodmFsdWUpID0+IHtcclxuICAgICAgdGhpcy5sb2NhdGlvblNldCA9IHZhbHVlXHJcbiAgICB9KTtcclxuICB9XHJcbiAgcHVibGljIHNldHVwTG9jYXRpb24oKTogT2JzZXJ2YWJsZTxMb2NhdGlvbj4ge1xyXG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKG9ic2VydmVyID0+IHtcclxuICAgICAgR2VvbG9jYXRpb24uZW5hYmxlTG9jYXRpb25SZXF1ZXN0KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgR2VvbG9jYXRpb24uZ2V0Q3VycmVudExvY2F0aW9uKHsgZGVzaXJlZEFjY3VyYWN5OiBBY2N1cmFjeS5oaWdoLCBtYXhpbXVtQWdlOiA1MDAwLCB0aW1lb3V0OiAxMDAwMCB9KS50aGVuKGxvY2F0aW9uRGF0YSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmxvY2F0aW9uLmxhdGl0dWRlID0gbG9jYXRpb25EYXRhLmxhdGl0dWRlO1xyXG4gICAgICAgICAgdGhpcy5sb2NhdGlvbi5sb25naXR1ZGUgPSBsb2NhdGlvbkRhdGEubG9uZ2l0dWRlO1xyXG4gICAgICAgICAgdGhpcy5sb2NhdGlvblNldENoYW5nZS5uZXh0KCF0aGlzLmxvY2F0aW9uU2V0KTtcclxuICAgICAgICAgIG9ic2VydmVyLm5leHQodGhpcy5sb2NhdGlvbik7XHJcbiAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgIG9ic2VydmVyLmVycm9yKGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgIG9ic2VydmVyLmVycm9yKGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRMb2NhdGlvbigpOiBMb2NhdGlvbiB7XHJcbiAgICByZXR1cm4gdGhpcy5sb2NhdGlvbjtcclxuICB9XHJcbn1cclxuIl19