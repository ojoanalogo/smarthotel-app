"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var weather_model_1 = require("../models/weather.model");
var backend_service_1 = require("../services/backend.service");
require("rxjs/add/operator/map");
var WeatherService = (function () {
    function WeatherService(http) {
        this.http = http;
    }
    WeatherService.prototype.getWeather = function (lat, long) {
        var headers = new http_1.Headers();
        var accessToken = "8abdb88ab21a393eb41ab41610eb50a2";
        headers.append("Content-Type", "application/json");
        return this.http.get(backend_service_1.BackendService.weatherURL + "APPID=" + accessToken + "&units=metric&weather?lat=" + lat + "&lon=" + long)
            .map(function (response) { return response.json(); })
            .map(function (data) {
            console.dir(data);
            var weatherObj;
            weatherObj = new weather_model_1.Weather(data["weather"]["icon"], data["name"], data["sys"]["country"], data["main"]["temp"]);
            return weatherObj;
        })
            .catch(this.handleErrors);
    };
    WeatherService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    WeatherService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], WeatherService);
    return WeatherService;
}());
exports.WeatherService = WeatherService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VhdGhlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUN4RCw4QkFBcUM7QUFDckMseURBQWtEO0FBQ2xELCtEQUE2RDtBQUM3RCxpQ0FBK0I7QUFHL0I7SUFDRSx3QkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFBRyxDQUFDO0lBRWxDLG1DQUFVLEdBQVYsVUFBVyxHQUFZLEVBQUUsSUFBYTtRQUNwQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLElBQUksV0FBVyxHQUFXLGtDQUFrQyxDQUFDO1FBQzdELE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdDQUFjLENBQUMsVUFBVSxHQUFHLFFBQVEsR0FBRyxXQUFXLEdBQUcsNEJBQTRCLEdBQUcsR0FBRyxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUM7YUFDNUgsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzthQUNoQyxHQUFHLENBQUMsVUFBQSxJQUFJO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixJQUFJLFVBQVUsQ0FBQztZQUNmLFVBQVUsR0FBRyxJQUFJLHVCQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDOUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUNwQixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDQyxxQ0FBWSxHQUFaLFVBQWEsS0FBZTtRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBcEJPLGNBQWM7UUFEMUIsaUJBQVUsRUFBRTt5Q0FFZSxXQUFJO09BRG5CLGNBQWMsQ0FxQjFCO0lBQUQscUJBQUM7Q0FBQSxBQXJCRCxJQXFCQztBQXJCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQgeyBXZWF0aGVyIH0gZnJvbSBcIi4uL21vZGVscy93ZWF0aGVyLm1vZGVsXCI7XHJcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2JhY2tlbmQuc2VydmljZVwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFdlYXRoZXJTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHt9XHJcblxyXG4gIGdldFdlYXRoZXIobGF0IDogc3RyaW5nLCBsb25nIDogc3RyaW5nKSB7XHJcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICBsZXQgYWNjZXNzVG9rZW46IHN0cmluZyA9IFwiOGFiZGI4OGFiMjFhMzkzZWI0MWFiNDE2MTBlYjUwYTJcIjtcclxuICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KEJhY2tlbmRTZXJ2aWNlLndlYXRoZXJVUkwgKyBcIkFQUElEPVwiICsgYWNjZXNzVG9rZW4gKyBcIiZ1bml0cz1tZXRyaWMmd2VhdGhlcj9sYXQ9XCIgKyBsYXQgKyBcIiZsb249XCIgKyBsb25nKVxyXG4gICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgIC5tYXAoZGF0YSA9PiB7XHJcbiAgICAgICBjb25zb2xlLmRpcihkYXRhKTtcclxuICAgICAgIGxldCB3ZWF0aGVyT2JqO1xyXG4gICAgICAgd2VhdGhlck9iaiA9IG5ldyBXZWF0aGVyKGRhdGFbXCJ3ZWF0aGVyXCJdW1wiaWNvblwiXSwgZGF0YVtcIm5hbWVcIl0sIGRhdGFbXCJzeXNcIl1bXCJjb3VudHJ5XCJdLCBkYXRhW1wibWFpblwiXVtcInRlbXBcIl0pO1xyXG4gICAgICAgcmV0dXJuIHdlYXRoZXJPYmo7XHJcbiAgICAgfSlcclxuICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xyXG4gICB9XHJcbiAgICAgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xyXG4gICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IuanNvbigpKSk7XHJcbiAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XHJcbiAgICAgfVxyXG59XHJcbiJdfQ==