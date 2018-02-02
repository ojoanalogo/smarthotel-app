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
var LoginComponent = (function () {
    function LoginComponent(page, router, icon, loginService) {
        this.page = page;
        this.router = router;
        this.icon = icon;
        this.loginService = loginService;
        this.registering = false;
        this.user = new user_model_1.User();
        this.user.email = "arc980103@gmail.com";
        this.user.password = "comodorops3";
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
            this.loginService.login(this.user).subscribe(function () {
                _this.loader.hide();
                _this.router.navigate(["/menu"]);
            }, function (res) {
                _this.loader.hide();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGdDQUErQjtBQUMvQiwwQ0FBeUM7QUFDekMsc0RBQStDO0FBQy9DLDhEQUE0RDtBQUM1RCx1RUFBK0Q7QUFDL0QsbUVBQXdEO0FBQ3hELG1EQUE0QztBQUM1QyxpRkFBa0U7QUFTbEU7SUFJRSx3QkFBb0IsSUFBVyxFQUFVLE1BQWUsRUFBVSxJQUF5QixFQUFVLFlBQTJCO1FBQTVHLFNBQUksR0FBSixJQUFJLENBQU87UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFTO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBcUI7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBZTtRQUZoSSxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUdsQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksaUJBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLHFCQUFxQixDQUFDO1FBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksaURBQWdCLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBQ0YsaUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7UUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyw0QkFBNEIsR0FBRyxJQUFJLENBQUM7SUFDaEQsQ0FBQztJQUVELDhCQUFLLEdBQUw7UUFBQSxpQkFhQztRQVpDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQztnQkFDM0MsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDbkIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO1lBQ2pDLENBQUMsRUFDRCxVQUFDLEdBQUc7Z0JBQ0YsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDbkIsdUNBQWEsQ0FBQyxTQUFTLENBQUMsbUJBQW1CLEVBQUUseUJBQXlCLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDdkYsQ0FBQyxDQUNELENBQUM7UUFDRCxDQUFDO0lBQ0gsQ0FBQztJQUVELGlDQUFRLEdBQVIsVUFBUyxJQUFJO1FBQ1gsSUFBTSxTQUFTLEdBQUcsSUFBSSwyQkFBUyxFQUFFLENBQUM7UUFDbEMsRUFBRSxDQUFBLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLHVDQUFhLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxxQkFBcUIsRUFBRSxXQUFXLENBQUMsQ0FBQztZQUM3RSxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2YsQ0FBQztRQUNELEVBQUUsQ0FBQSxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLHVDQUFhLENBQUMsV0FBVyxDQUFDLGtCQUFrQixFQUFFLDRCQUE0QixFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ3pGLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDZixDQUFDO1FBQ0QsRUFBRSxDQUFBLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLHVDQUFhLENBQUMsV0FBVyxDQUFDLHNCQUFzQixFQUFFLGtDQUFrQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ25HLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDZixDQUFDO1FBQ0QsRUFBRSxDQUFBLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyx1Q0FBYSxDQUFDLFdBQVcsQ0FBQyxzQkFBc0IsRUFBRSx1REFBdUQsRUFBRSxXQUFXLENBQUMsQ0FBQztZQUN4SCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2YsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBbERVLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsOEJBQThCLEVBQUUsdUJBQXVCLENBQUM7U0FDckUsQ0FBQzt5Q0FNMkIsV0FBSSxFQUFtQixlQUFNLEVBQWlCLDhDQUFrQixFQUF5Qiw0QkFBWTtPQUpySCxjQUFjLENBbUQxQjtJQUFELHFCQUFDO0NBQUEsQUFuREQsSUFtREM7QUFuRFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uLy4uL21vZGVscy91c2VyLm1vZGVsXCI7XHJcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9sb2dpbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFROU0ZvbnRJY29uU2VydmljZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtZm9udGljb24nO1xyXG5pbXBvcnQgeyBUTlNGYW5jeUFsZXJ0IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWZhbmN5YWxlcnQnO1xyXG5pbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tIFwiY2xhc3MtdmFsaWRhdG9yXCI7XHJcbmltcG9ydCB7IExvYWRpbmdJbmRpY2F0b3IgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWxvYWRpbmctaW5kaWNhdG9yXCI7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xvZ2luJyxcclxuICB0ZW1wbGF0ZVVybDogJ3BhZ2VzL2xvZ2luL2xvZ2luLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogW1wicGFnZXMvbG9naW4vbG9naW4tZ2xvYmFsLmNzc1wiLCBcInBhZ2VzL2xvZ2luL2xvZ2luLmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICB1c2VyOiBVc2VyO1xyXG4gIHJlZ2lzdGVyaW5nID0gZmFsc2U7XHJcbiAgbG9hZGVyOiBMb2FkaW5nSW5kaWNhdG9yO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZSA6IFBhZ2UsIHByaXZhdGUgcm91dGVyIDogUm91dGVyLCBwcml2YXRlIGljb24gOiBUTlNGb250SWNvblNlcnZpY2UsIHByaXZhdGUgbG9naW5TZXJ2aWNlIDogTG9naW5TZXJ2aWNlKSB7XHJcbiAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xyXG4gICAgdGhpcy51c2VyLmVtYWlsID0gXCJhcmM5ODAxMDNAZ21haWwuY29tXCI7XHJcbiAgICB0aGlzLnVzZXIucGFzc3dvcmQgPSBcImNvbW9kb3JvcHMzXCI7XHJcbiAgICB0aGlzLmxvYWRlciA9IG5ldyBMb2FkaW5nSW5kaWNhdG9yKCk7XHJcbiAgIH1cclxuICBuZ09uSW5pdCgpIDogdm9pZCB7XHJcbiAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgIHRoaXMucGFnZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMwM0E5RjRcIjtcclxuICAgIHRoaXMucGFnZS5iYWNrZ3JvdW5kU3BhblVuZGVyU3RhdHVzQmFyID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGxvZ2luKCkgOiB2b2lkIHtcclxuICAgIGlmKHRoaXMudmFsaWRhdGUodGhpcy51c2VyKSkge1xyXG4gICAgICB0aGlzLmxvYWRlci5zaG93KHttZXNzYWdlOlwiQ29tcHJvYmFuZG8gZGF0b3NcIn0pO1xyXG4gICAgdGhpcy5sb2dpblNlcnZpY2UubG9naW4odGhpcy51c2VyKS5zdWJzY3JpYmUoKCk9PntcclxuICAgICAgdGhpcy5sb2FkZXIuaGlkZSgpO1xyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbWVudVwiXSlcclxuICAgIH0sXHJcbiAgICAocmVzKSA9PiB7XHJcbiAgICAgIHRoaXMubG9hZGVyLmhpZGUoKTtcclxuICAgICAgVE5TRmFuY3lBbGVydC5zaG93RXJyb3IoXCJEYXRvcyBpbmNvcnJlY3Rvc1wiLCBcIkNvcnJlby9jbGF2ZSBubyB2YWxpZG9zXCIsIFwiRW50ZW5kaWRvXCIpO1xyXG4gICAgfVxyXG4gICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFsaWRhdGUodXNlcikgOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IoKTtcclxuICAgIGlmKHZhbGlkYXRvci5pc0VtcHR5KHVzZXIuZW1haWwpKSB7XHJcbiAgICAgIFROU0ZhbmN5QWxlcnQuc2hvd1dhcm5pbmcoXCJDYW1wbyB2YWPDrW9cIiwgXCJJbnRyb2R1Y2UgdHUgZS1tYWlsXCIsIFwiRW50ZW5kaWRvXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZighdmFsaWRhdG9yLmlzRW1haWwodXNlci5lbWFpbCkpIHtcclxuICAgICAgVE5TRmFuY3lBbGVydC5zaG93V2FybmluZyhcIkUtbWFpbCBubyB2YWxpZG9cIiwgXCJJbnRyb2R1Y2UgdW4gZS1tYWlsIHZhbGlkb1wiLCBcIkVudGVuZGlkb1wiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYodmFsaWRhdG9yLmlzRW1wdHkodXNlci5wYXNzd29yZCkpIHtcclxuICAgICAgVE5TRmFuY3lBbGVydC5zaG93V2FybmluZyhcIkNvbnRyYXNlw7FhIG5vIHZhbGlkYVwiLCBcIkRlYmVzIGludHJvZHVjaXIgdW5hIGNvbnN0cmFzZcOxYVwiLCBcIkVudGVuZGlkb1wiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYodmFsaWRhdG9yLm1pbih1c2VyLnBhc3N3b3JkLCA4KSkge1xyXG4gICAgICBUTlNGYW5jeUFsZXJ0LnNob3dXYXJuaW5nKFwiQ29udHJhc2XDsWEgbXV5IGNvcnRhXCIsIFwiRGViZXMgaW50cm9kdWNpciB1bmEgY29uc3RyYXNlw7FhIG1heW9yIGEgOCBjYXJhY3RlcmVzXCIsIFwiRW50ZW5kaWRvXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuIl19