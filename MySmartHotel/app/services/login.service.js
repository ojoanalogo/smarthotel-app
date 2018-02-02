"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var backend_service_1 = require("../services/backend.service");
var connectivity = require("tns-core-modules/connectivity");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.login = function (user) {
        if (connectivity.getConnectionType() == connectivity.connectionType.none) {
            return Rx_1.Observable.throw("");
        }
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this.http.post(backend_service_1.BackendService.apiURL + "/authme", JSON.stringify({
            correo: user.email,
            clave: user.password
        }), { headers: headers })
            .map(function (response) { return response.json(); })
            .do(function (data) {
            if (data.code === 1 && data.response.token) {
                backend_service_1.BackendService.token = data.response.token;
                return data;
            }
        })
            .catch(this.handleErrors);
    };
    LoginService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    LoginService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQXdEO0FBQ3hELDhCQUFxQztBQUVyQywrREFBNkQ7QUFDN0QsNERBQThEO0FBQzlELGdDQUE4QjtBQUM5QixpQ0FBK0I7QUFHL0I7SUFFSSxzQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFBRyxDQUFDO0lBRWxDLDRCQUFLLEdBQUwsVUFBTSxJQUFVO1FBQ2QsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLElBQUksWUFBWSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3pFLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzlCLENBQUM7UUFDRCxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNuQixnQ0FBYyxDQUFDLE1BQU0sR0FBRyxTQUFTLEVBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDYixNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDbEIsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3JCLENBQUMsRUFDRixFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FDckI7YUFDQSxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO2FBQ2hDLEVBQUUsQ0FBQyxVQUFBLElBQUk7WUFDTCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQzNDLGdDQUFjLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO2dCQUMzQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2QsQ0FBQztRQUNKLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVDLG1DQUFZLEdBQVosVUFBYSxLQUFlO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUEvQk0sWUFBWTtRQUR4QixpQkFBVSxFQUFFO3lDQUdpQixXQUFJO09BRnJCLFlBQVksQ0FnQ3hCO0lBQUQsbUJBQUM7Q0FBQSxBQWhDRCxJQWdDQztBQWhDWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL21vZGVscy91c2VyLm1vZGVsXCI7XHJcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2JhY2tlbmQuc2VydmljZVwiO1xyXG5pbXBvcnQgKiBhcyBjb25uZWN0aXZpdHkgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvY29ubmVjdGl2aXR5XCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTG9naW5TZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHt9XHJcblxyXG4gICAgbG9naW4odXNlcjogVXNlcikge1xyXG4gICAgICBpZiAoY29ubmVjdGl2aXR5LmdldENvbm5lY3Rpb25UeXBlKCkgPT0gY29ubmVjdGl2aXR5LmNvbm5lY3Rpb25UeXBlLm5vbmUpIHtcclxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhcIlwiKTtcclxuICAgICAgfVxyXG4gICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxyXG4gICAgICAgIEJhY2tlbmRTZXJ2aWNlLmFwaVVSTCArIFwiL2F1dGhtZVwiLFxyXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIGNvcnJlbzogdXNlci5lbWFpbCxcclxuICAgICAgICAgIGNsYXZlOiB1c2VyLnBhc3N3b3JkXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgeyBoZWFkZXJzOiBoZWFkZXJzIH1cclxuICAgICAgKVxyXG4gICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLmRvKGRhdGEgPT4ge1xyXG4gICAgICAgICBpZiAoZGF0YS5jb2RlID09PSAxICYmIGRhdGEucmVzcG9uc2UudG9rZW4pIHtcclxuICAgICAgICAgICBCYWNrZW5kU2VydmljZS50b2tlbiA9IGRhdGEucmVzcG9uc2UudG9rZW47XHJcbiAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuICAgIH1cclxuXHJcbiAgICAgIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcclxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XHJcbiAgICAgIH1cclxufVxyXG4iXX0=