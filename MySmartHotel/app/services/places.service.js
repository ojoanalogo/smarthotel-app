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
            "search?type=place&categories=['FOOD_BEVERAGE','ARTS_ENTERTAINMENT', 'SHOPPING_RETAIL']&fields=name,location,about,category_list,cover&center=" + lat + ", " + long +
            "&distance=1000&access_token=" + accessToken)
            .map(function (response) { return response.json(); })
            .map(function (data) {
            console.dir(data);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2VzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwbGFjZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBd0Q7QUFDeEQsOEJBQXFDO0FBQ3JDLHFEQUE4QztBQUM5QywrREFBNkQ7QUFFN0QsaUNBQStCO0FBRy9CO0lBQ0UsdUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUcsQ0FBQztJQUUzQixpQ0FBUyxHQUFoQixVQUFpQixHQUFZLEVBQUUsSUFBYTtRQUMxQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLElBQUksV0FBVyxHQUFXLDhDQUE4QyxDQUFDO1FBQ3pFLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdDQUFjLENBQUMsS0FBSztZQUN6QywrSUFBK0ksR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHLElBQUk7WUFDbEssOEJBQThCLEdBQUcsV0FBVyxDQUFDO2FBQzVDLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7YUFDaEMsR0FBRyxDQUFDLFVBQUEsSUFBSTtZQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxLQUFLO2dCQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksbUJBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFGLENBQUMsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNoQixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDUyxvQ0FBWSxHQUFwQixVQUFxQixLQUFlO1FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUF4Qk8sYUFBYTtRQUR6QixpQkFBVSxFQUFFO3lDQUVlLFdBQUk7T0FEbkIsYUFBYSxDQXlCekI7SUFBRCxvQkFBQztDQUFBLEFBekJELElBeUJDO0FBekJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCB7IFBsYWNlIH0gZnJvbSBcIi4uL21vZGVscy9wbGFjZS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9iYWNrZW5kLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUGxhY2VzU3RvcmFnZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9wbGFjZXMtc3RvcmFnZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUGxhY2VzU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxyXG5cclxuICBwdWJsaWMgZ2V0UGxhY2VzKGxhdCA6IHN0cmluZywgbG9uZyA6IHN0cmluZykge1xyXG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgbGV0IGFjY2Vzc1Rva2VuOiBzdHJpbmcgPSBcIjE5ODE4ODAxMjg3NDY2MjJ8b0VhTTVpTUlLemJlNjY0MEFmVDlBQmpsbWtVXCI7XHJcbiAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChCYWNrZW5kU2VydmljZS5mYlVSTCArXHJcbiAgICBcInNlYXJjaD90eXBlPXBsYWNlJmNhdGVnb3JpZXM9WydGT09EX0JFVkVSQUdFJywnQVJUU19FTlRFUlRBSU5NRU5UJywgJ1NIT1BQSU5HX1JFVEFJTCddJmZpZWxkcz1uYW1lLGxvY2F0aW9uLGFib3V0LGNhdGVnb3J5X2xpc3QsY292ZXImY2VudGVyPVwiICsgbGF0ICsgXCIsIFwiICsgbG9uZyArXHJcbiAgICAgXCImZGlzdGFuY2U9MTAwMCZhY2Nlc3NfdG9rZW49XCIgKyBhY2Nlc3NUb2tlbilcclxuICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAubWFwKGRhdGEgPT4ge1xyXG4gICAgICAgY29uc29sZS5kaXIoZGF0YSk7XHJcbiAgICAgICBsZXQgcGxhY2VzID0gW107XHJcbiAgICAgICBkYXRhW1wiZGF0YVwiXS5mb3JFYWNoKHBsYWNlID0+IHtcclxuICAgICAgICAgICBwbGFjZXMucHVzaChuZXcgUGxhY2UocGxhY2VbXCJpZFwiXSwgcGxhY2VbXCJuYW1lXCJdLCBwbGFjZVtcImxvY2F0aW9uXCJdLCBwbGFjZVtcImFib3V0XCJdKSk7XHJcbiAgICAgICB9KTtcclxuICAgICAgIHJldHVybiBwbGFjZXM7XHJcbiAgICAgfSlcclxuICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xyXG4gICB9XHJcbiAgICAgcHJpdmF0ZSBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XHJcbiAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcclxuICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcclxuICAgICB9XHJcbn1cclxuIl19