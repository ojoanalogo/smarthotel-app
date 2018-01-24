"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var event_model_1 = require("../models/event.model");
var backend_service_1 = require("../services/backend.service");
require("rxjs/add/operator/map");
var EventsService = (function () {
    function EventsService(http) {
        this.http = http;
    }
    EventsService.prototype.getPlaces = function (lat, long) {
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
                places.push(new event_model_1.Event(place["id"], place["name"], place["location"], place["about"]));
            });
            return places;
        })
            .catch(this.handleErrors);
    };
    EventsService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    EventsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], EventsService);
    return EventsService;
}());
exports.EventsService = EventsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJldmVudHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBd0Q7QUFDeEQsOEJBQXFDO0FBQ3JDLHFEQUE4QztBQUM5QywrREFBNkQ7QUFDN0QsaUNBQStCO0FBRy9CO0lBQ0UsdUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUcsQ0FBQztJQUVsQyxpQ0FBUyxHQUFULFVBQVUsR0FBWSxFQUFFLElBQWE7UUFDbkMsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixJQUFJLFdBQVcsR0FBVyw4Q0FBOEMsQ0FBQztRQUN6RSxPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQ0FBYyxDQUFDLEtBQUs7WUFDekMsNkhBQTZILEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxJQUFJO1lBQ2hKLDhCQUE4QixHQUFHLFdBQVcsQ0FBQzthQUM1QyxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO2FBQ2hDLEdBQUcsQ0FBQyxVQUFBLElBQUk7WUFDUCxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEtBQUs7Z0JBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxtQkFBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUYsQ0FBQyxDQUFDLENBQUM7WUFDSCxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2hCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNDLG9DQUFZLEdBQVosVUFBYSxLQUFlO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUF2Qk8sYUFBYTtRQUR6QixpQkFBVSxFQUFFO3lDQUVlLFdBQUk7T0FEbkIsYUFBYSxDQXdCekI7SUFBRCxvQkFBQztDQUFBLEFBeEJELElBd0JDO0FBeEJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCB7IEV2ZW50IH0gZnJvbSBcIi4uL21vZGVscy9ldmVudC5tb2RlbFwiO1xyXG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9iYWNrZW5kLnNlcnZpY2VcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBFdmVudHNTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHt9XHJcblxyXG4gIGdldFBsYWNlcyhsYXQgOiBzdHJpbmcsIGxvbmcgOiBzdHJpbmcpIHtcclxuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgIGxldCBhY2Nlc3NUb2tlbjogc3RyaW5nID0gXCIxOTgxODgwMTI4NzQ2NjIyfG9FYU01aU1JS3piZTY2NDBBZlQ5QUJqbG1rVVwiO1xyXG4gICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoQmFja2VuZFNlcnZpY2UuZmJVUkwgK1xyXG4gICAgXCIvc2VhcmNoP3R5cGU9cGxhY2UmY2F0ZWdvcmllcz1bJ0ZPT0RfQkVWRVJBR0UnLCdBUlRTX0VOVEVSVEFJTk1FTlQnXSZmaWVsZHM9bmFtZSxsb2NhdGlvbixhYm91dCxjYXRlZ29yeV9saXN0LGNvdmVyJmNlbnRlcj1cIiArIGxhdCArIFwiLCBcIiArIGxvbmcgK1xyXG4gICAgIFwiJmRpc3RhbmNlPTEwMDAmYWNjZXNzX3Rva2VuPVwiICsgYWNjZXNzVG9rZW4pXHJcbiAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgLm1hcChkYXRhID0+IHtcclxuICAgICAgIGxldCBwbGFjZXMgPSBbXTtcclxuICAgICAgIGRhdGFbXCJkYXRhXCJdLmZvckVhY2gocGxhY2UgPT4ge1xyXG4gICAgICAgICAgIHBsYWNlcy5wdXNoKG5ldyBFdmVudChwbGFjZVtcImlkXCJdLCBwbGFjZVtcIm5hbWVcIl0sIHBsYWNlW1wibG9jYXRpb25cIl0sIHBsYWNlW1wiYWJvdXRcIl0pKTtcclxuICAgICAgIH0pO1xyXG4gICAgICAgcmV0dXJuIHBsYWNlcztcclxuICAgICB9KVxyXG4gICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XHJcbiAgIH1cclxuICAgICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XHJcbiAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcclxuICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcclxuICAgICB9XHJcbn1cclxuIl19