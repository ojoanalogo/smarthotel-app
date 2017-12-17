"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var user_model_1 = require("../../models/user.model");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var nativescript_fancyalert_1 = require("nativescript-fancyalert");
var class_validator_1 = require("class-validator");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var LoginComponent = (function () {
    function LoginComponent(page, router, icon) {
        this.page = page;
        this.router = router;
        this.icon = icon;
        this.registering = false;
        this.user = new user_model_1.User();
        this.user.email = "a@a.com";
        this.user.password = "comodoro";
        this.loader = new nativescript_loading_indicator_1.LoadingIndicator();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.page.backgroundColor = "#03A9F4";
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
        __metadata("design:paramtypes", [page_1.Page, router_1.Router, nativescript_ngx_fonticon_1.TNSFontIconService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGdDQUErQjtBQUMvQiwwQ0FBeUM7QUFDekMsc0RBQStDO0FBQy9DLHVFQUErRDtBQUMvRCxtRUFBNkU7QUFDN0UsbURBQTRDO0FBQzVDLGlGQUFrRTtBQVFsRTtJQUlFLHdCQUFvQixJQUFXLEVBQVUsTUFBZSxFQUFVLElBQXlCO1FBQXZFLFNBQUksR0FBSixJQUFJLENBQU87UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFTO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBcUI7UUFGM0YsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFHbEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGlCQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxpREFBZ0IsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFDRixpQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsaUNBQVEsR0FBUixVQUFTLElBQUk7UUFDWCxJQUFNLFNBQVMsR0FBRyxJQUFJLDJCQUFTLEVBQUUsQ0FBQztRQUNsQyxFQUFFLENBQUEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakMsdUNBQWEsQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLHFCQUFxQixFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQzdFLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDZixDQUFDO1FBQ0QsRUFBRSxDQUFBLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEMsdUNBQWEsQ0FBQyxXQUFXLENBQUMsa0JBQWtCLEVBQUUsNEJBQTRCLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDekYsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNmLENBQUM7UUFDRCxFQUFFLENBQUEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEMsdUNBQWEsQ0FBQyxXQUFXLENBQUMsc0JBQXNCLEVBQUUsa0NBQWtDLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDbkcsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNmLENBQUM7UUFDRCxFQUFFLENBQUEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25DLHVDQUFhLENBQUMsV0FBVyxDQUFDLHNCQUFzQixFQUFFLHVEQUF1RCxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ3hILE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDZixDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFsQ1UsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE9BQU87WUFDakIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsRUFBRSx1QkFBdUIsQ0FBQztTQUNyRSxDQUFDO3lDQU0yQixXQUFJLEVBQW1CLGVBQU0sRUFBaUIsOENBQWtCO09BSmhGLGNBQWMsQ0FtQzFCO0lBQUQscUJBQUM7Q0FBQSxBQW5DRCxJQW1DQztBQW5DWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3VzZXIubW9kZWxcIjtcclxuaW1wb3J0IHsgVE5TRm9udEljb25TZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XHJcbmltcG9ydCB7IFROU0ZhbmN5QWxlcnQsIFROU0ZhbmN5QWxlcnRCdXR0b24gfSBmcm9tICduYXRpdmVzY3JpcHQtZmFuY3lhbGVydCc7XHJcbmltcG9ydCB7IFZhbGlkYXRvciB9IGZyb20gXCJjbGFzcy12YWxpZGF0b3JcIjtcclxuaW1wb3J0IHsgTG9hZGluZ0luZGljYXRvciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtbG9hZGluZy1pbmRpY2F0b3JcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbG9naW4nLFxyXG4gIHRlbXBsYXRlVXJsOiAncGFnZXMvbG9naW4vbG9naW4uaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9sb2dpbi9sb2dpbi1nbG9iYWwuY3NzXCIsIFwicGFnZXMvbG9naW4vbG9naW4uY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHVzZXI6IFVzZXI7XHJcbiAgcmVnaXN0ZXJpbmcgPSBmYWxzZTtcclxuICBsb2FkZXI6IExvYWRpbmdJbmRpY2F0b3I7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlIDogUGFnZSwgcHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXIsIHByaXZhdGUgaWNvbiA6IFROU0ZvbnRJY29uU2VydmljZSkge1xyXG4gICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcclxuICAgIHRoaXMudXNlci5lbWFpbCA9IFwiYUBhLmNvbVwiO1xyXG4gICAgdGhpcy51c2VyLnBhc3N3b3JkID0gXCJjb21vZG9yb1wiO1xyXG4gICAgdGhpcy5sb2FkZXIgPSBuZXcgTG9hZGluZ0luZGljYXRvcigpO1xyXG4gICB9XHJcbiAgbmdPbkluaXQoKSA6dm9pZCB7XHJcbiAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgIHRoaXMucGFnZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMwM0E5RjRcIjtcclxuICB9XHJcblxyXG4gIHZhbGlkYXRlKHVzZXIpIDogYm9vbGVhbiB7XHJcbiAgICBjb25zdCB2YWxpZGF0b3IgPSBuZXcgVmFsaWRhdG9yKCk7XHJcbiAgICBpZih2YWxpZGF0b3IuaXNFbXB0eSh1c2VyLmVtYWlsKSkge1xyXG4gICAgICBUTlNGYW5jeUFsZXJ0LnNob3dXYXJuaW5nKFwiQ2FtcG8gdmFjw61vXCIsIFwiSW50cm9kdWNlIHR1IGUtbWFpbFwiLCBcIkVudGVuZGlkb1wiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYoIXZhbGlkYXRvci5pc0VtYWlsKHVzZXIuZW1haWwpKSB7XHJcbiAgICAgIFROU0ZhbmN5QWxlcnQuc2hvd1dhcm5pbmcoXCJFLW1haWwgbm8gdmFsaWRvXCIsIFwiSW50cm9kdWNlIHVuIGUtbWFpbCB2YWxpZG9cIiwgXCJFbnRlbmRpZG9cIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmKHZhbGlkYXRvci5pc0VtcHR5KHVzZXIucGFzc3dvcmQpKSB7XHJcbiAgICAgIFROU0ZhbmN5QWxlcnQuc2hvd1dhcm5pbmcoXCJDb250cmFzZcOxYSBubyB2YWxpZGFcIiwgXCJEZWJlcyBpbnRyb2R1Y2lyIHVuYSBjb25zdHJhc2XDsWFcIiwgXCJFbnRlbmRpZG9cIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmKHZhbGlkYXRvci5taW4odXNlci5wYXNzd29yZCwgOCkpIHtcclxuICAgICAgVE5TRmFuY3lBbGVydC5zaG93V2FybmluZyhcIkNvbnRyYXNlw7FhIG11eSBjb3J0YVwiLCBcIkRlYmVzIGludHJvZHVjaXIgdW5hIGNvbnN0cmFzZcOxYSBtYXlvciBhIDggY2FyYWN0ZXJlc1wiLCBcIkVudGVuZGlkb1wiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59XHJcbiJdfQ==