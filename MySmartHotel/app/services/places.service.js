"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var place_model_1 = require("../models/place.model");
var backend_service_1 = require("../services/backend.service");
require("rxjs/add/operator/map");
var PlacesService = (function () {
    function PlacesService(http) {
        this.http = http;
    }
    PlacesService.prototype.getPlaces = function (lat, long) {
        var headers = new http_1.Headers();
        var accessToken = "1981880128746622|oEaM5iMIKzbe6640AfT9ABjlmkU";
        headers.append("Content-Type", "application/json");
        return this.http.get(backend_service_1.BackendService.fbURL +
            "/search?type=place&categories=['FOOD_BEVERAGE','ARTS_ENTERTAINMENT']&fields=name,location,about,category_list,cover&center=" + lat + ", " + long +
            "&distance=1000&access_token=" + accessToken)
            .map(function (response) { return response.json(); })
            .map(function (data) {
            var places = [];
            data["data"].forEach(function (place) {
                places.push(new place_model_1.Place(place["id"], place["name"], place["location"], place["about"]));
            });
            return places;
        })
            .catch(this.handleErrors);
    };
    PlacesService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    PlacesService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], PlacesService);
    return PlacesService;
}());
exports.PlacesService = PlacesService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2VzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwbGFjZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBd0Q7QUFDeEQsOEJBQXFDO0FBQ3JDLHFEQUE4QztBQUM5QywrREFBNkQ7QUFFN0QsaUNBQStCO0FBRy9CO0lBQ0UsdUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUcsQ0FBQztJQUVsQyxpQ0FBUyxHQUFULFVBQVUsR0FBWSxFQUFFLElBQWE7UUFDbkMsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixJQUFJLFdBQVcsR0FBVyw4Q0FBOEMsQ0FBQztRQUN6RSxPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQ0FBYyxDQUFDLEtBQUs7WUFDekMsNkhBQTZILEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxJQUFJO1lBQ2hKLDhCQUE4QixHQUFHLFdBQVcsQ0FBQzthQUM1QyxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO2FBQ2hDLEdBQUcsQ0FBQyxVQUFBLElBQUk7WUFDUCxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEtBQUs7Z0JBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxtQkFBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUYsQ0FBQyxDQUFDLENBQUM7WUFDSCxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2hCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVDLG9DQUFZLEdBQVosVUFBYSxLQUFlO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUF4Qk8sYUFBYTtRQUR6QixpQkFBVSxFQUFFO3lDQUVlLFdBQUk7T0FEbkIsYUFBYSxDQXlCekI7SUFBRCxvQkFBQztDQUFBLEFBekJELElBeUJDO0FBekJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCB7IFBsYWNlIH0gZnJvbSBcIi4uL21vZGVscy9wbGFjZS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9iYWNrZW5kLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUGxhY2VzU3RvcmFnZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9wbGFjZXMtc3RvcmFnZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUGxhY2VzU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxyXG5cclxuICBnZXRQbGFjZXMobGF0IDogc3RyaW5nLCBsb25nIDogc3RyaW5nKSB7XHJcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICBsZXQgYWNjZXNzVG9rZW46IHN0cmluZyA9IFwiMTk4MTg4MDEyODc0NjYyMnxvRWFNNWlNSUt6YmU2NjQwQWZUOUFCamxta1VcIjtcclxuICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KEJhY2tlbmRTZXJ2aWNlLmZiVVJMICtcclxuICAgIFwiL3NlYXJjaD90eXBlPXBsYWNlJmNhdGVnb3JpZXM9WydGT09EX0JFVkVSQUdFJywnQVJUU19FTlRFUlRBSU5NRU5UJ10mZmllbGRzPW5hbWUsbG9jYXRpb24sYWJvdXQsY2F0ZWdvcnlfbGlzdCxjb3ZlciZjZW50ZXI9XCIgKyBsYXQgKyBcIiwgXCIgKyBsb25nICtcclxuICAgICBcIiZkaXN0YW5jZT0xMDAwJmFjY2Vzc190b2tlbj1cIiArIGFjY2Vzc1Rva2VuKVxyXG4gICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgIC5tYXAoZGF0YSA9PiB7XHJcbiAgICAgICBsZXQgcGxhY2VzID0gW107XHJcbiAgICAgICBkYXRhW1wiZGF0YVwiXS5mb3JFYWNoKHBsYWNlID0+IHtcclxuICAgICAgICAgICBwbGFjZXMucHVzaChuZXcgUGxhY2UocGxhY2VbXCJpZFwiXSwgcGxhY2VbXCJuYW1lXCJdLCBwbGFjZVtcImxvY2F0aW9uXCJdLCBwbGFjZVtcImFib3V0XCJdKSk7XHJcbiAgICAgICB9KTtcclxuICAgICAgIHJldHVybiBwbGFjZXM7XHJcbiAgICAgfSlcclxuICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xyXG4gICB9XHJcblxyXG4gICAgIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcclxuICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yLmpzb24oKSkpO1xyXG4gICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xyXG4gICAgIH1cclxufVxyXG4iXX0=