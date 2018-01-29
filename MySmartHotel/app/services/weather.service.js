"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var weather_model_1 = require("../models/weather.model");
var backend_service_1 = require("../services/backend.service");
var appSettings = require("application-settings");
var connectivity = require("tns-core-modules/connectivity");
require("rxjs/add/operator/map");
var WeatherService = (function () {
    function WeatherService(http) {
        this.http = http;
    }
    WeatherService.prototype.getWeather = function (location) {
        var _this = this;
        if (connectivity.getConnectionType() == connectivity.connectionType.none) {
            return Rx_1.Observable.throw("");
        }
        var accessToken = "8abdb88ab21a393eb41ab41610eb50a2";
        return this.http.get(backend_service_1.BackendService.weatherURL +
            "weather?APPID=" + accessToken + "&units=metric&lat=" + location.latitude.toString() + "&lon=" + location.longitude.toString())
            .map(function (response) { return response.json(); })
            .map(function (data) {
            var weatherObj;
            var date = new Date().toString();
            weatherObj = new weather_model_1.Weather(data["weather"]["icon"], data["name"], data["sys"]["country"], data["main"]["temp"], date);
            _this.storeWeather(weatherObj);
            return weatherObj;
        })
            .catch(function (response) {
            return Rx_1.Observable.throw(response);
        });
    };
    WeatherService.prototype.shouldUpdate = function () {
        if (appSettings.getString("weatherData") == undefined) {
            return true;
        }
        var currentDate = new Date();
        var storedDate = new Date(this.getSavedWeather().date);
        var diff = currentDate.getTime() - storedDate.getTime();
        return diff / 60000 > 80;
    };
    WeatherService.prototype.storeWeather = function (weather) {
        appSettings.setString("weatherData", JSON.stringify(weather));
    };
    WeatherService.prototype.getSavedWeather = function () {
        return JSON.parse(appSettings.getString("weatherData", "novalue"));
    };
    WeatherService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], WeatherService);
    return WeatherService;
}());
exports.WeatherService = WeatherService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VhdGhlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUN4RCw4QkFBcUM7QUFDckMseURBQWtEO0FBRWxELCtEQUE2RDtBQUM3RCxrREFBb0Q7QUFDcEQsNERBQThEO0FBQzlELGlDQUErQjtBQUcvQjtJQUVFLHdCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFJLENBQUM7SUFFNUIsbUNBQVUsR0FBakIsVUFBa0IsUUFBa0I7UUFBcEMsaUJBa0JDO1FBakJDLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLFlBQVksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN6RSxNQUFNLENBQUMsZUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM5QixDQUFDO1FBQ0QsSUFBSSxXQUFXLEdBQVcsa0NBQWtDLENBQUM7UUFDN0QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdDQUFjLENBQUMsVUFBVTtZQUM1QyxnQkFBZ0IsR0FBRyxXQUFXLEdBQUcsb0JBQW9CLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsR0FBRyxPQUFPLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUM5SCxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO2FBQ2hDLEdBQUcsQ0FBQyxVQUFBLElBQUk7WUFDUCxJQUFJLFVBQW1CLENBQUM7WUFDeEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNqQyxVQUFVLEdBQUcsSUFBSSx1QkFBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNwSCxLQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzlCLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDcEIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUMsUUFBa0I7WUFDeEIsTUFBTSxDQUFDLGVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0scUNBQVksR0FBbkI7UUFDRSxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDdEQsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUM7UUFDRCxJQUFJLFdBQVcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQzdCLElBQUksVUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2RCxJQUFJLElBQUksR0FBRyxXQUFXLENBQUMsT0FBTyxFQUFFLEdBQUcsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3hELE1BQU0sQ0FBQyxJQUFJLEdBQUcsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBQ00scUNBQVksR0FBbkIsVUFBb0IsT0FBZ0I7UUFDbEMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFDTSx3Q0FBZSxHQUF0QjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQXRDVSxjQUFjO1FBRDFCLGlCQUFVLEVBQUU7eUNBR2UsV0FBSTtPQUZuQixjQUFjLENBd0MxQjtJQUFELHFCQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7QUF4Q1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IHsgV2VhdGhlciB9IGZyb20gXCIuLi9tb2RlbHMvd2VhdGhlci5tb2RlbFwiO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gXCIuLi9tb2RlbHMvbG9jYXRpb24ubW9kZWxcIjtcclxuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvYmFja2VuZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzIGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5pbXBvcnQgKiBhcyBjb25uZWN0aXZpdHkgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvY29ubmVjdGl2aXR5XCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgV2VhdGhlclNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxyXG5cclxuICBwdWJsaWMgZ2V0V2VhdGhlcihsb2NhdGlvbjogTG9jYXRpb24pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgaWYgKGNvbm5lY3Rpdml0eS5nZXRDb25uZWN0aW9uVHlwZSgpID09IGNvbm5lY3Rpdml0eS5jb25uZWN0aW9uVHlwZS5ub25lKSB7XHJcbiAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KFwiXCIpO1xyXG4gICAgfVxyXG4gICAgbGV0IGFjY2Vzc1Rva2VuOiBzdHJpbmcgPSBcIjhhYmRiODhhYjIxYTM5M2ViNDFhYjQxNjEwZWI1MGEyXCI7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChCYWNrZW5kU2VydmljZS53ZWF0aGVyVVJMICtcclxuICAgICAgXCJ3ZWF0aGVyP0FQUElEPVwiICsgYWNjZXNzVG9rZW4gKyBcIiZ1bml0cz1tZXRyaWMmbGF0PVwiICsgbG9jYXRpb24ubGF0aXR1ZGUudG9TdHJpbmcoKSArIFwiJmxvbj1cIiArIGxvY2F0aW9uLmxvbmdpdHVkZS50b1N0cmluZygpKVxyXG4gICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLm1hcChkYXRhID0+IHtcclxuICAgICAgICBsZXQgd2VhdGhlck9iajogV2VhdGhlcjtcclxuICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCkudG9TdHJpbmcoKTtcclxuICAgICAgICB3ZWF0aGVyT2JqID0gbmV3IFdlYXRoZXIoZGF0YVtcIndlYXRoZXJcIl1bXCJpY29uXCJdLCBkYXRhW1wibmFtZVwiXSwgZGF0YVtcInN5c1wiXVtcImNvdW50cnlcIl0sIGRhdGFbXCJtYWluXCJdW1widGVtcFwiXSwgZGF0ZSk7XHJcbiAgICAgICAgdGhpcy5zdG9yZVdlYXRoZXIod2VhdGhlck9iaik7XHJcbiAgICAgICAgcmV0dXJuIHdlYXRoZXJPYmo7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3cocmVzcG9uc2UpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzaG91bGRVcGRhdGUoKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwid2VhdGhlckRhdGFcIikgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGxldCBzdG9yZWREYXRlID0gbmV3IERhdGUodGhpcy5nZXRTYXZlZFdlYXRoZXIoKS5kYXRlKTtcclxuICAgIGxldCBkaWZmID0gY3VycmVudERhdGUuZ2V0VGltZSgpIC0gc3RvcmVkRGF0ZS5nZXRUaW1lKCk7XHJcbiAgICByZXR1cm4gZGlmZiAvIDYwMDAwID4gODA7XHJcbiAgfVxyXG4gIHB1YmxpYyBzdG9yZVdlYXRoZXIod2VhdGhlcjogV2VhdGhlcik6IHZvaWQge1xyXG4gICAgYXBwU2V0dGluZ3Muc2V0U3RyaW5nKFwid2VhdGhlckRhdGFcIiwgSlNPTi5zdHJpbmdpZnkod2VhdGhlcikpO1xyXG4gIH1cclxuICBwdWJsaWMgZ2V0U2F2ZWRXZWF0aGVyKCk6IFdlYXRoZXIge1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UoYXBwU2V0dGluZ3MuZ2V0U3RyaW5nKFwid2VhdGhlckRhdGFcIiwgXCJub3ZhbHVlXCIpKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==