"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var user_model_1 = require("../models/user.model");
var backend_service_1 = require("../services/backend.service");
var connectivity = require("tns-core-modules/connectivity");
var router_1 = require("@angular/router");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var LoginService = (function () {
    function LoginService(http, router) {
        this.http = http;
        this.router = router;
    }
    LoginService.prototype.login = function (user) {
        if (connectivity.getConnectionType() == connectivity.connectionType.none) {
            return Rx_1.Observable.throw("");
        }
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this.http.post(backend_service_1.BackendService.apiURL + "/authme", JSON.stringify({
            correo: user.email,
            clave: user.password,
            fcm: backend_service_1.BackendService.fcmToken
        }), { headers: headers })
            .map(function (response) { return response.json(); })
            .do(function (data) {
            return data;
        })
            .catch(this.handleErrors);
    };
    LoginService.prototype.logout = function () {
        backend_service_1.BackendService.token = "";
        backend_service_1.BackendService.userData = new user_model_1.User("", "", "", "", "", "", 0);
        this.router.navigate(["/login"]);
    };
    LoginService.prototype.handleErrors = function (error) {
        console.dir(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    LoginService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, router_1.Router])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQXdEO0FBQ3hELDhCQUFxQztBQUNyQyxtREFBNEM7QUFDNUMsK0RBQTZEO0FBQzdELDREQUE4RDtBQUM5RCwwQ0FBeUM7QUFDekMsZ0NBQThCO0FBQzlCLGlDQUErQjtBQUcvQjtJQUVJLHNCQUFvQixJQUFVLEVBQVUsTUFBZTtRQUFuQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUztJQUFHLENBQUM7SUFDM0QsNEJBQUssR0FBTCxVQUFNLElBQVU7UUFDYixFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxZQUFZLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDMUUsTUFBTSxDQUFDLGVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDOUIsQ0FBQztRQUNELElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNuRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ25CLGdDQUFjLENBQUMsTUFBTSxHQUFHLFNBQVMsRUFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNiLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSztZQUNsQixLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDcEIsR0FBRyxFQUFFLGdDQUFjLENBQUMsUUFBUTtTQUM3QixDQUFDLEVBQ0YsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQ3JCO2FBQ0EsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzthQUNoQyxFQUFFLENBQUMsVUFBQSxJQUFJO1lBQ04sTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELDZCQUFNLEdBQU47UUFDRSxnQ0FBYyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDMUIsZ0NBQWMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxpQkFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUMsbUNBQVksR0FBWixVQUFhLEtBQWU7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQWxDTSxZQUFZO1FBRHhCLGlCQUFVLEVBQUU7eUNBR2lCLFdBQUksRUFBbUIsZUFBTTtPQUY5QyxZQUFZLENBbUN4QjtJQUFELG1CQUFDO0NBQUEsQUFuQ0QsSUFtQ0M7QUFuQ1ksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi9tb2RlbHMvdXNlci5tb2RlbFwiO1xyXG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9iYWNrZW5kLnNlcnZpY2VcIjtcclxuaW1wb3J0ICogYXMgY29ubmVjdGl2aXR5IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2Nvbm5lY3Rpdml0eVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTG9naW5TZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHAsIHByaXZhdGUgcm91dGVyIDogUm91dGVyKSB7fVxyXG4gICAgbG9naW4odXNlcjogVXNlcikge1xyXG4gICAgICAgaWYgKGNvbm5lY3Rpdml0eS5nZXRDb25uZWN0aW9uVHlwZSgpID09IGNvbm5lY3Rpdml0eS5jb25uZWN0aW9uVHlwZS5ub25lKSB7XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coXCJcIik7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcclxuICAgICAgICBCYWNrZW5kU2VydmljZS5hcGlVUkwgKyBcIi9hdXRobWVcIixcclxuICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICBjb3JyZW86IHVzZXIuZW1haWwsXHJcbiAgICAgICAgICBjbGF2ZTogdXNlci5wYXNzd29yZCxcclxuICAgICAgICAgIGZjbTogQmFja2VuZFNlcnZpY2UuZmNtVG9rZW5cclxuICAgICAgICB9KSxcclxuICAgICAgICB7IGhlYWRlcnM6IGhlYWRlcnMgfVxyXG4gICAgICApXHJcbiAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAuZG8oZGF0YSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nb3V0KCkge1xyXG4gICAgICBCYWNrZW5kU2VydmljZS50b2tlbiA9IFwiXCI7XHJcbiAgICAgIEJhY2tlbmRTZXJ2aWNlLnVzZXJEYXRhID0gbmV3IFVzZXIoXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCJcIiwgMCk7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9sb2dpblwiXSk7XHJcbiAgICB9XHJcblxyXG4gICAgICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc29sZS5kaXIoSlNPTi5zdHJpbmdpZnkoZXJyb3IuanNvbigpKSk7XHJcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xyXG4gICAgICB9XHJcbn1cclxuIl19