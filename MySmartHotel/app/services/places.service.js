"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var place_model_1 = require("../models/place.model");
var backend_service_1 = require("../services/backend.service");
var connectivity = require("tns-core-modules/connectivity");
require("rxjs/add/operator/map");
var PlacesService = (function () {
    function PlacesService(http) {
        this.http = http;
    }
    PlacesService.prototype.getPlaces = function (lat, long) {
        if (connectivity.getConnectionType() == connectivity.connectionType.none) {
            return Rx_1.Observable.throw("");
        }
        var headers = new http_1.Headers();
        var accessToken = "1981880128746622|oEaM5iMIKzbe6640AfT9ABjlmkU";
        headers.append("Content-Type", "application/json");
        return this.http.get(backend_service_1.BackendService.fbURL +
            "search?type=place&categories=['FOOD_BEVERAGE','ARTS_ENTERTAINMENT', 'SHOPPING_RETAIL']&fields=name,location,about,category_list,cover&center=" + lat + ", " + long +
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2VzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwbGFjZXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBd0Q7QUFDeEQsOEJBQXFDO0FBQ3JDLHFEQUE4QztBQUM5QywrREFBNkQ7QUFFN0QsNERBQThEO0FBQzlELGlDQUErQjtBQUcvQjtJQUVFLHVCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFHLENBQUM7SUFFM0IsaUNBQVMsR0FBaEIsVUFBaUIsR0FBWSxFQUFFLElBQWE7UUFDMUMsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLElBQUksWUFBWSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3pFLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzlCLENBQUM7UUFDRCxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLElBQUksV0FBVyxHQUFXLDhDQUE4QyxDQUFDO1FBQ3pFLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdDQUFjLENBQUMsS0FBSztZQUN6QywrSUFBK0ksR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHLElBQUk7WUFDbEssOEJBQThCLEdBQUcsV0FBVyxDQUFDO2FBQzVDLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7YUFDaEMsR0FBRyxDQUFDLFVBQUEsSUFBSTtZQUNQLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSztnQkFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLG1CQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxRixDQUFDLENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDaEIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ1Msb0NBQVksR0FBcEIsVUFBcUIsS0FBZTtRQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBM0JPLGFBQWE7UUFEekIsaUJBQVUsRUFBRTt5Q0FHZSxXQUFJO09BRm5CLGFBQWEsQ0E0QnpCO0lBQUQsb0JBQUM7Q0FBQSxBQTVCRCxJQTRCQztBQTVCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQgeyBQbGFjZSB9IGZyb20gXCIuLi9tb2RlbHMvcGxhY2UubW9kZWxcIjtcclxuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvYmFja2VuZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFBsYWNlc1N0b3JhZ2UgfSBmcm9tIFwiLi4vc2VydmljZXMvcGxhY2VzLXN0b3JhZ2Uuc2VydmljZVwiO1xyXG5pbXBvcnQgKiBhcyBjb25uZWN0aXZpdHkgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvY29ubmVjdGl2aXR5XCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUGxhY2VzU2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge31cclxuXHJcbiAgcHVibGljIGdldFBsYWNlcyhsYXQgOiBzdHJpbmcsIGxvbmcgOiBzdHJpbmcpIHtcclxuICAgIGlmIChjb25uZWN0aXZpdHkuZ2V0Q29ubmVjdGlvblR5cGUoKSA9PSBjb25uZWN0aXZpdHkuY29ubmVjdGlvblR5cGUubm9uZSkge1xyXG4gICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhcIlwiKTtcclxuICAgIH1cclxuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgIGxldCBhY2Nlc3NUb2tlbjogc3RyaW5nID0gXCIxOTgxODgwMTI4NzQ2NjIyfG9FYU01aU1JS3piZTY2NDBBZlQ5QUJqbG1rVVwiO1xyXG4gICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoQmFja2VuZFNlcnZpY2UuZmJVUkwgK1xyXG4gICAgXCJzZWFyY2g/dHlwZT1wbGFjZSZjYXRlZ29yaWVzPVsnRk9PRF9CRVZFUkFHRScsJ0FSVFNfRU5URVJUQUlOTUVOVCcsICdTSE9QUElOR19SRVRBSUwnXSZmaWVsZHM9bmFtZSxsb2NhdGlvbixhYm91dCxjYXRlZ29yeV9saXN0LGNvdmVyJmNlbnRlcj1cIiArIGxhdCArIFwiLCBcIiArIGxvbmcgK1xyXG4gICAgIFwiJmRpc3RhbmNlPTEwMDAmYWNjZXNzX3Rva2VuPVwiICsgYWNjZXNzVG9rZW4pXHJcbiAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgLm1hcChkYXRhID0+IHtcclxuICAgICAgIGxldCBwbGFjZXMgPSBbXTtcclxuICAgICAgIGRhdGFbXCJkYXRhXCJdLmZvckVhY2gocGxhY2UgPT4ge1xyXG4gICAgICAgICAgIHBsYWNlcy5wdXNoKG5ldyBQbGFjZShwbGFjZVtcImlkXCJdLCBwbGFjZVtcIm5hbWVcIl0sIHBsYWNlW1wibG9jYXRpb25cIl0sIHBsYWNlW1wiYWJvdXRcIl0pKTtcclxuICAgICAgIH0pO1xyXG4gICAgICAgcmV0dXJuIHBsYWNlcztcclxuICAgICB9KVxyXG4gICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XHJcbiAgIH1cclxuICAgICBwcml2YXRlIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcclxuICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yLmpzb24oKSkpO1xyXG4gICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xyXG4gICAgIH1cclxufVxyXG4iXX0=