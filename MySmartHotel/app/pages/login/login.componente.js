"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var user_model_1 = require("../../models/user.model");
var firebase_service_1 = require("../../services/firebase.service");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var ComponenteLogin = (function () {
    function ComponenteLogin(page, firebase, router, icon) {
        this.page = page;
        this.firebase = firebase;
        this.router = router;
        this.icon = icon;
        this.loginModalUsing = false;
        this.user = new user_model_1.User();
    }
    ComponenteLogin.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.page.backgroundColor = "#8BC34A";
    };
    ComponenteLogin.prototype.btnRegister = function () {
        alert("btn registro paps");
    };
    ComponenteLogin.prototype.login = function () {
        var _this = this;
        this.firebase.login(this.user).then(function () {
            _this.router.navigate(["/menu"]);
        }).catch(function (message) {
            alert(message);
        });
    };
    ComponenteLogin = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: 'pages/login/login.html',
            styleUrls: ["pages/login/login-global.css", "pages/login/login.css"]
        }),
        __metadata("design:paramtypes", [page_1.Page, firebase_service_1.FirebaseService, router_1.Router, nativescript_ngx_fonticon_1.TNSFontIconService])
    ], ComponenteLogin);
    return ComponenteLogin;
}());
exports.ComponenteLogin = ComponenteLogin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUQ7QUFDakQsZ0NBQStCO0FBQy9CLDBDQUF5QztBQUN6QyxzREFBK0M7QUFDL0Msb0VBQWtFO0FBQ2xFLHVFQUErRDtBQVEvRDtJQUdFLHlCQUFvQixJQUFXLEVBQVUsUUFBMEIsRUFBVSxNQUFlLEVBQVUsSUFBeUI7UUFBM0csU0FBSSxHQUFKLElBQUksQ0FBTztRQUFVLGFBQVEsR0FBUixRQUFRLENBQWtCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUztRQUFVLFNBQUksR0FBSixJQUFJLENBQXFCO1FBRC9ILG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBRXRCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxpQkFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUNGLGtDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO0lBQ3hDLENBQUM7SUFDRCxxQ0FBVyxHQUFYO1FBQ0UsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUNELCtCQUFLLEdBQUw7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQ2pDO1lBQ0UsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLE9BQWE7WUFDckIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQXBCVSxlQUFlO1FBTjNCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsT0FBTztZQUNqQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixFQUFFLHVCQUF1QixDQUFDO1NBQ3JFLENBQUM7eUNBSzJCLFdBQUksRUFBcUIsa0NBQWUsRUFBbUIsZUFBTSxFQUFpQiw4Q0FBa0I7T0FIcEgsZUFBZSxDQXFCM0I7SUFBRCxzQkFBQztDQUFBLEFBckJELElBcUJDO0FBckJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uLy4uL21vZGVscy91c2VyLm1vZGVsXCI7XHJcbmltcG9ydCB7IEZpcmViYXNlU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9maXJlYmFzZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFROU0ZvbnRJY29uU2VydmljZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtZm9udGljb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsb2dpbicsXHJcbiAgdGVtcGxhdGVVcmw6ICdwYWdlcy9sb2dpbi9sb2dpbi5odG1sJyxcclxuICBzdHlsZVVybHM6IFtcInBhZ2VzL2xvZ2luL2xvZ2luLWdsb2JhbC5jc3NcIiwgXCJwYWdlcy9sb2dpbi9sb2dpbi5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRlTG9naW4gaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHVzZXI6IFVzZXI7XHJcbiAgbG9naW5Nb2RhbFVzaW5nID0gZmFsc2U7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlIDogUGFnZSwgcHJpdmF0ZSBmaXJlYmFzZSA6IEZpcmViYXNlU2VydmljZSwgcHJpdmF0ZSByb3V0ZXIgOiBSb3V0ZXIsIHByaXZhdGUgaWNvbiA6IFROU0ZvbnRJY29uU2VydmljZSkge1xyXG4gICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcclxuICAgfVxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICB0aGlzLnBhZ2UuYmFja2dyb3VuZENvbG9yID0gXCIjOEJDMzRBXCI7XHJcbiAgfVxyXG4gIGJ0blJlZ2lzdGVyKCl7XHJcbiAgICBhbGVydChcImJ0biByZWdpc3RybyBwYXBzXCIpO1xyXG4gIH1cclxuICBsb2dpbigpIHtcclxuICAgIHRoaXMuZmlyZWJhc2UubG9naW4odGhpcy51c2VyKS50aGVuKFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL21lbnVcIl0pO1xyXG4gICAgIH0pLmNhdGNoKChtZXNzYWdlIDogYW55KSA9PiB7XHJcbiAgICAgICBhbGVydChtZXNzYWdlKTtcclxuICAgICB9KTtcclxuICB9XHJcbn1cclxuIl19