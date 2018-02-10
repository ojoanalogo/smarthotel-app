"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var user_model_1 = require("../../models/user.model");
var login_service_1 = require("../../services/login.service");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var nativescript_fancyalert_1 = require("nativescript-fancyalert");
var class_validator_1 = require("class-validator");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var backend_service_1 = require("../../services/backend.service");
var LoginComponent = (function () {
    function LoginComponent(page, router, icon, loginService) {
        this.page = page;
        this.router = router;
        this.icon = icon;
        this.loginService = loginService;
        this.registering = false;
        this.user = new user_model_1.User("", "", "", "", "", "", 0);
        this.loader = new nativescript_loading_indicator_1.LoadingIndicator();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.page.backgroundColor = "#03A9F4";
        this.page.backgroundSpanUnderStatusBar = true;
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.validate(this.user)) {
            this.loader.show({ message: "Comprobando datos" });
            this.loginService.login(this.user).subscribe(function (res) {
                _this.loader.hide();
                if (res.code === 1 && res.response.token) {
                    var dRes = res.response.userData[0];
                    backend_service_1.BackendService.userData = new user_model_1.User(dRes.huesped_correo, "", dRes.huesped_nombre, dRes.huesped_apellido, dRes.reservacion_desde, dRes.reservacion_hasta, dRes.habitacion_numero);
                    backend_service_1.BackendService.token = res.response.token;
                    _this.router.navigate(["/menu"]);
                }
                if (res.code === 2) {
                    nativescript_fancyalert_1.TNSFancyAlert.showWarning("No estás hospedado", "Ve a recepción si crees que es un error", "Entendido");
                }
            }, function (res) {
                _this.loader.hide();
                console.dir(res);
                nativescript_fancyalert_1.TNSFancyAlert.showError("Datos incorrectos", "Correo/clave no validos", "Entendido");
            });
        }
    };
    LoginComponent.prototype.validate = function (user) {
        var validator = new class_validator_1.Validator();
        if (validator.isEmpty(user.email)) {
            nativescript_fancyalert_1.TNSFancyAlert.showWarning("Campo vacío", "Introduce tu e-mail", "Entendido");
            return false;
        }
        if (!validator.isEmail(user.email)) {
            nativescript_fancyalert_1.TNSFancyAlert.showWarning("E-mail no valido", "Introduce un e-mail valido", "Entendido");
            return false;
        }
        if (validator.isEmpty(user.password)) {
            nativescript_fancyalert_1.TNSFancyAlert.showWarning("Contraseña no valida", "Debes introducir una constraseña", "Entendido");
            return false;
        }
        if (validator.min(user.password, 8)) {
            nativescript_fancyalert_1.TNSFancyAlert.showWarning("Contraseña muy corta", "Debes introducir una constraseña mayor a 8 caracteres", "Entendido");
            return false;
        }
        return true;
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: 'pages/login/login.html',
            styleUrls: ["pages/login/login-global.css", "pages/login/login.css"]
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.Router, nativescript_ngx_fonticon_1.TNSFontIconService, login_service_1.LoginService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGdDQUErQjtBQUMvQiwwQ0FBeUM7QUFDekMsc0RBQStDO0FBQy9DLDhEQUE0RDtBQUM1RCx1RUFBK0Q7QUFDL0QsbUVBQXdEO0FBQ3hELG1EQUE0QztBQUM1QyxpRkFBa0U7QUFDbEUsa0VBQWdFO0FBU2hFO0lBSUUsd0JBQW9CLElBQVcsRUFBVSxNQUFlLEVBQVUsSUFBeUIsRUFBVSxZQUEyQjtRQUE1RyxTQUFJLEdBQUosSUFBSSxDQUFPO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUztRQUFVLFNBQUksR0FBSixJQUFJLENBQXFCO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWU7UUFGaEksZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFHbEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGlCQUFJLENBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGlEQUFnQixFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUNGLGlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsNEJBQTRCLEdBQUcsSUFBSSxDQUFDO0lBQ2hELENBQUM7SUFFRCw4QkFBSyxHQUFMO1FBQUEsaUJBdUJDO1FBdEJDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsTUFBTSxDQUFD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TUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUExRFUsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE9BQU87WUFDakIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsRUFBRSx1QkFBdUIsQ0FBQztTQUNyRSxDQUFDO3lDQU0yQixXQUFJLEVBQW1CLGVBQU0sRUFBaUIsOENBQWtCLEVBQXlCLDRCQUFZO09BSnJILGNBQWMsQ0EyRDFCO0lBQUQscUJBQUM7Q0FBQSxBQTNERCxJQTJEQztBQTNEWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3VzZXIubW9kZWxcIjtcclxuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2xvZ2luLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVE5TRm9udEljb25TZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XHJcbmltcG9ydCB7IFROU0ZhbmN5QWxlcnQgfSBmcm9tICduYXRpdmVzY3JpcHQtZmFuY3lhbGVydCc7XHJcbmltcG9ydCB7IFZhbGlkYXRvciB9IGZyb20gXCJjbGFzcy12YWxpZGF0b3JcIjtcclxuaW1wb3J0IHsgTG9hZGluZ0luZGljYXRvciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtbG9hZGluZy1pbmRpY2F0b3JcIjtcclxuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYmFja2VuZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xvZ2luJyxcclxuICB0ZW1wbGF0ZVVybDogJ3BhZ2VzL2xvZ2luL2xvZ2luLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogW1wicGFnZXMvbG9naW4vbG9naW4tZ2xvYmFsLmNzc1wiLCBcInBhZ2VzL2xvZ2luL2xvZ2luLmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICB1c2VyOiBVc2VyO1xyXG4gIHJlZ2lzdGVyaW5nID0gZmFsc2U7XHJcbiAgbG9hZGVyOiBMb2FkaW5nSW5kaWNhdG9yO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZSA6IFBhZ2UsIHByaXZhdGUgcm91dGVyIDogUm91dGVyLCBwcml2YXRlIGljb24gOiBUTlNGb250SWNvblNlcnZpY2UsIHByaXZhdGUgbG9naW5TZXJ2aWNlIDogTG9naW5TZXJ2aWNlKSB7XHJcbiAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcihcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIiwwKTtcclxuICAgIHRoaXMubG9hZGVyID0gbmV3IExvYWRpbmdJbmRpY2F0b3IoKTtcclxuICAgfVxyXG4gIG5nT25Jbml0KCkgOiB2b2lkIHtcclxuICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgdGhpcy5wYWdlLmJhY2tncm91bmRDb2xvciA9IFwiIzAzQTlGNFwiO1xyXG4gICAgdGhpcy5wYWdlLmJhY2tncm91bmRTcGFuVW5kZXJTdGF0dXNCYXIgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgbG9naW4oKSA6IHZvaWQge1xyXG4gICAgaWYodGhpcy52YWxpZGF0ZSh0aGlzLnVzZXIpKSB7XHJcbiAgICAgIHRoaXMubG9hZGVyLnNob3coe21lc3NhZ2U6XCJDb21wcm9iYW5kbyBkYXRvc1wifSk7XHJcbiAgICB0aGlzLmxvZ2luU2VydmljZS5sb2dpbih0aGlzLnVzZXIpLnN1YnNjcmliZSgocmVzKT0+e1xyXG4gICAgICB0aGlzLmxvYWRlci5oaWRlKCk7XHJcbiAgICAgIGlmIChyZXMuY29kZSA9PT0gMSAmJiByZXMucmVzcG9uc2UudG9rZW4pIHtcclxuICAgICAgICBsZXQgZFJlcyA9IHJlcy5yZXNwb25zZS51c2VyRGF0YVswXTtcclxuICAgICAgICBCYWNrZW5kU2VydmljZS51c2VyRGF0YSA9IG5ldyBVc2VyKGRSZXMuaHVlc3BlZF9jb3JyZW8sIFwiXCIsIGRSZXMuaHVlc3BlZF9ub21icmUsXHJcbiAgICAgICAgIGRSZXMuaHVlc3BlZF9hcGVsbGlkbywgZFJlcy5yZXNlcnZhY2lvbl9kZXNkZSwgZFJlcy5yZXNlcnZhY2lvbl9oYXN0YSwgZFJlcy5oYWJpdGFjaW9uX251bWVybyk7XHJcbiAgICAgICAgQmFja2VuZFNlcnZpY2UudG9rZW4gPSByZXMucmVzcG9uc2UudG9rZW47XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL21lbnVcIl0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChyZXMuY29kZSA9PT0gMikge1xyXG4gICAgICAgIFROU0ZhbmN5QWxlcnQuc2hvd1dhcm5pbmcoXCJObyBlc3TDoXMgaG9zcGVkYWRvXCIsIFwiVmUgYSByZWNlcGNpw7NuIHNpIGNyZWVzIHF1ZSBlcyB1biBlcnJvclwiLCBcIkVudGVuZGlkb1wiKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIChyZXMpID0+IHtcclxuICAgICAgdGhpcy5sb2FkZXIuaGlkZSgpO1xyXG4gICAgICBjb25zb2xlLmRpcihyZXMpO1xyXG4gICAgICBUTlNGYW5jeUFsZXJ0LnNob3dFcnJvcihcIkRhdG9zIGluY29ycmVjdG9zXCIsIFwiQ29ycmVvL2NsYXZlIG5vIHZhbGlkb3NcIiwgXCJFbnRlbmRpZG9cIik7XHJcbiAgICB9XHJcbiAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZSh1c2VyKSA6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgdmFsaWRhdG9yID0gbmV3IFZhbGlkYXRvcigpO1xyXG4gICAgaWYodmFsaWRhdG9yLmlzRW1wdHkodXNlci5lbWFpbCkpIHtcclxuICAgICAgVE5TRmFuY3lBbGVydC5zaG93V2FybmluZyhcIkNhbXBvIHZhY8Otb1wiLCBcIkludHJvZHVjZSB0dSBlLW1haWxcIiwgXCJFbnRlbmRpZG9cIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmKCF2YWxpZGF0b3IuaXNFbWFpbCh1c2VyLmVtYWlsKSkge1xyXG4gICAgICBUTlNGYW5jeUFsZXJ0LnNob3dXYXJuaW5nKFwiRS1tYWlsIG5vIHZhbGlkb1wiLCBcIkludHJvZHVjZSB1biBlLW1haWwgdmFsaWRvXCIsIFwiRW50ZW5kaWRvXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZih2YWxpZGF0b3IuaXNFbXB0eSh1c2VyLnBhc3N3b3JkKSkge1xyXG4gICAgICBUTlNGYW5jeUFsZXJ0LnNob3dXYXJuaW5nKFwiQ29udHJhc2XDsWEgbm8gdmFsaWRhXCIsIFwiRGViZXMgaW50cm9kdWNpciB1bmEgY29uc3RyYXNlw7FhXCIsIFwiRW50ZW5kaWRvXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZih2YWxpZGF0b3IubWluKHVzZXIucGFzc3dvcmQsIDgpKSB7XHJcbiAgICAgIFROU0ZhbmN5QWxlcnQuc2hvd1dhcm5pbmcoXCJDb250cmFzZcOxYSBtdXkgY29ydGFcIiwgXCJEZWJlcyBpbnRyb2R1Y2lyIHVuYSBjb25zdHJhc2XDsWEgbWF5b3IgYSA4IGNhcmFjdGVyZXNcIiwgXCJFbnRlbmRpZG9cIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufVxyXG4iXX0=