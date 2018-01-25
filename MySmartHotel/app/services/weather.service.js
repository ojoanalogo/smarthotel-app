"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var weather_model_1 = require("../models/weather.model");
var backend_service_1 = require("../services/backend.service");
var application_settings_1 = require("application-settings");
var connectivity = require("tns-core-modules/connectivity");
require("rxjs/add/operator/map");
var WeatherService = (function () {
    function WeatherService(http) {
        this.http = http;
    }
    WeatherService.prototype.getWeather = function (lat, long) {
        if (connectivity.getConnectionType() == connectivity.connectionType.none) {
            return Rx_1.Observable.throw("");
        }
        var headers = new http_1.Headers();
        var accessToken = "8abdb88ab21a393eb41ab41610eb50a2";
        headers.append("Content-Type", "application/json");
        return this.http.get(backend_service_1.BackendService.weatherURL +
            "weather?APPID=" + accessToken + "&units=metric&lat=" + lat + "&lon=" + long)
            .map(function (response) { return response.json(); })
            .map(function (data) {
            var weatherObj;
            weatherObj = new weather_model_1.Weather(data["weather"]["icon"], data["name"], data["sys"]["country"], data["main"]["temp"], data["dt"]);
            return weatherObj;
        })
            .catch(this.handleErrors);
    };
    WeatherService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    WeatherService.prototype.storeWeather = function (weather) {
        application_settings_1.setString("weatherData", JSON.stringify(weather));
    };
    WeatherService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], WeatherService);
    return WeatherService;
}());
exports.WeatherService = WeatherService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VhdGhlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUN4RCw4QkFBcUM7QUFDckMseURBQWtEO0FBQ2xELCtEQUE2RDtBQUM3RCw2REFBNEQ7QUFDNUQsNERBQThEO0FBQzlELGlDQUErQjtBQUcvQjtJQUVFLHdCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFHLENBQUM7SUFFM0IsbUNBQVUsR0FBakIsVUFBa0IsR0FBWSxFQUFFLElBQWE7UUFDM0MsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLElBQUksWUFBWSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3pFLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzlCLENBQUM7UUFDRCxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLElBQUksV0FBVyxHQUFXLGtDQUFrQyxDQUFDO1FBQzdELE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdDQUFjLENBQUMsVUFBVTtZQUMzQyxnQkFBZ0IsR0FBRyxXQUFXLEdBQUcsb0JBQW9CLEdBQUcsR0FBRyxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUM7YUFDOUUsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzthQUNoQyxHQUFHLENBQUMsVUFBQSxJQUFJO1lBQ1AsSUFBSSxVQUFVLENBQUM7WUFDZixVQUFVLEdBQUcsSUFBSSx1QkFBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMxSCxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3BCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUNFLHFDQUFZLEdBQVosVUFBYSxLQUFlO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxxQ0FBWSxHQUFaLFVBQWEsT0FBaUI7UUFDNUIsZ0NBQVMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUE1Qk8sY0FBYztRQUQxQixpQkFBVSxFQUFFO3lDQUdlLFdBQUk7T0FGbkIsY0FBYyxDQThCMUI7SUFBRCxxQkFBQztDQUFBLEFBOUJELElBOEJDO0FBOUJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCB7IFdlYXRoZXIgfSBmcm9tIFwiLi4vbW9kZWxzL3dlYXRoZXIubW9kZWxcIjtcclxuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvYmFja2VuZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IGdldFN0cmluZywgc2V0U3RyaW5nIH0gZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcbmltcG9ydCAqIGFzIGNvbm5lY3Rpdml0eSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9jb25uZWN0aXZpdHlcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBXZWF0aGVyU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge31cclxuXHJcbiAgcHVibGljIGdldFdlYXRoZXIobGF0IDogc3RyaW5nLCBsb25nIDogc3RyaW5nKSB7XHJcbiAgICBpZiAoY29ubmVjdGl2aXR5LmdldENvbm5lY3Rpb25UeXBlKCkgPT0gY29ubmVjdGl2aXR5LmNvbm5lY3Rpb25UeXBlLm5vbmUpIHtcclxuICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coXCJcIik7XHJcbiAgICB9XHJcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICBsZXQgYWNjZXNzVG9rZW46IHN0cmluZyA9IFwiOGFiZGI4OGFiMjFhMzkzZWI0MWFiNDE2MTBlYjUwYTJcIjtcclxuICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KEJhY2tlbmRTZXJ2aWNlLndlYXRoZXJVUkwgK1xyXG4gICAgICAgXCJ3ZWF0aGVyP0FQUElEPVwiICsgYWNjZXNzVG9rZW4gKyBcIiZ1bml0cz1tZXRyaWMmbGF0PVwiICsgbGF0ICsgXCImbG9uPVwiICsgbG9uZylcclxuICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAubWFwKGRhdGEgPT4ge1xyXG4gICAgICAgbGV0IHdlYXRoZXJPYmo7XHJcbiAgICAgICB3ZWF0aGVyT2JqID0gbmV3IFdlYXRoZXIoZGF0YVtcIndlYXRoZXJcIl1bXCJpY29uXCJdLCBkYXRhW1wibmFtZVwiXSwgZGF0YVtcInN5c1wiXVtcImNvdW50cnlcIl0sIGRhdGFbXCJtYWluXCJdW1widGVtcFwiXSwgZGF0YVtcImR0XCJdKTtcclxuICAgICAgIHJldHVybiB3ZWF0aGVyT2JqO1xyXG4gICAgIH0pXHJcbiAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuICB9XHJcbiAgICAgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xyXG4gICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IuanNvbigpKSk7XHJcbiAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XHJcbiAgICAgfVxyXG5cclxuICAgICBzdG9yZVdlYXRoZXIod2VhdGhlciA6IFdlYXRoZXIpIHtcclxuICAgICAgIHNldFN0cmluZyhcIndlYXRoZXJEYXRhXCIsIEpTT04uc3RyaW5naWZ5KHdlYXRoZXIpKTtcclxuICAgICB9XHJcblxyXG59XHJcbiJdfQ==