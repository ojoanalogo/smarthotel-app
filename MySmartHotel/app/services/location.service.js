"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var geolocation = require("nativescript-geolocation");
var enums_1 = require("ui/enums");
var LocationService = (function () {
    function LocationService() {
    }
    LocationService.prototype.isEnabled = function () {
        return geolocation.isEnabled();
    };
    LocationService.prototype.requestEnable = function () {
        geolocation.enableLocationRequest().then(function (success) {
            return true;
        }, function (error) {
            return false;
        });
        return;
    };
    LocationService.prototype.getLocation = function () {
        return geolocation.getCurrentLocation({ desiredAccuracy: enums_1.Accuracy.high, maximumAge: 5000, timeout: 20000 });
    };
    LocationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], LocationService);
    return LocationService;
}());
exports.LocationService = LocationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0RBQXdEO0FBQ3hELGtDQUFvQztBQUdwQztJQUVFO0lBQWdCLENBQUM7SUFFakIsbUNBQVMsR0FBVDtRQUNFLE1BQU0sQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVELHVDQUFhLEdBQWI7UUFDRSxXQUFXLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxJQUFJLENBQ3RDLFVBQUMsT0FBTztZQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDLEVBQ0YsVUFBQyxLQUFLO1lBQ0osTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNmLENBQUMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDO0lBQ1YsQ0FBQztJQUVELHFDQUFXLEdBQVg7UUFDRSxNQUFNLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLEVBQUUsZUFBZSxFQUFFLGdCQUFRLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDOUcsQ0FBQztJQXJCVSxlQUFlO1FBRDNCLGlCQUFVLEVBQUU7O09BQ0EsZUFBZSxDQXNCM0I7SUFBRCxzQkFBQztDQUFBLEFBdEJELElBc0JDO0FBdEJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBnZW9sb2NhdGlvbiBmcm9tIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCI7XHJcbmltcG9ydCB7IEFjY3VyYWN5IH0gZnJvbSBcInVpL2VudW1zXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMb2NhdGlvblNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBpc0VuYWJsZWQoKSA6IFByb21pc2U8Qm9vbGVhbj4ge1xyXG4gICAgcmV0dXJuIGdlb2xvY2F0aW9uLmlzRW5hYmxlZCgpO1xyXG4gIH1cclxuXHJcbiAgcmVxdWVzdEVuYWJsZSgpIDpQcm9taXNlPEJvb2xlYW4+IHtcclxuICAgIGdlb2xvY2F0aW9uLmVuYWJsZUxvY2F0aW9uUmVxdWVzdCgpLnRoZW4oXHJcbiAgICAgIChzdWNjZXNzKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH0sXHJcbiAgICAgKGVycm9yKT0+IHtcclxuICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICB9KTtcclxuICAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBnZXRMb2NhdGlvbigpIHtcclxuICAgIHJldHVybiBnZW9sb2NhdGlvbi5nZXRDdXJyZW50TG9jYXRpb24oeyBkZXNpcmVkQWNjdXJhY3k6IEFjY3VyYWN5LmhpZ2gsIG1heGltdW1BZ2U6IDUwMDAsIHRpbWVvdXQ6IDIwMDAwIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=