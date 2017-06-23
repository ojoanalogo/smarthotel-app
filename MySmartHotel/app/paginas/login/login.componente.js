"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var statusbar_1 = require("../../utilidades/statusbar");
var Usuario_1 = require("../../compartido/usuario/Usuario");
var ComponenteLogin = (function () {
    function ComponenteLogin(page) {
        this.page = page;
        this.usuario = new Usuario_1.Usuario();
        statusbar_1.statusbarTransparente();
    }
    ComponenteLogin.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "~/recursos/playa.jpg";
    };
    ComponenteLogin.prototype.touch = function () {
        console.log("HOLA");
    };
    ComponenteLogin.prototype.acceder = function () {
        alert(this.usuario.correo);
    };
    return ComponenteLogin;
}());
ComponenteLogin = __decorate([
    core_1.Component({
        selector: 'login',
        templateUrl: 'paginas/login/login.html',
        styleUrls: ["paginas/login/login-global.css", "paginas/login/login.css"]
    }),
    __metadata("design:paramtypes", [page_1.Page])
], ComponenteLogin);
exports.ComponenteLogin = ComponenteLogin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUQ7QUFDakQsZ0NBQStCO0FBQy9CLHdEQUFtRTtBQUNuRSw0REFBMkQ7QUFPM0QsSUFBYSxlQUFlO0lBRzFCLHlCQUFvQixJQUFXO1FBQVgsU0FBSSxHQUFKLElBQUksQ0FBTztRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFDO1FBQzdCLGlDQUFxQixFQUFFLENBQUM7SUFDekIsQ0FBQztJQUNGLGtDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsc0JBQXNCLENBQUM7SUFDckQsQ0FBQztJQUNELCtCQUFLLEdBQUw7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFDRCxpQ0FBTyxHQUFQO1FBQ0UsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQWpCRCxJQWlCQztBQWpCWSxlQUFlO0lBTDNCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsT0FBTztRQUNqQixXQUFXLEVBQUUsMEJBQTBCO1FBQ3ZDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxFQUFFLHlCQUF5QixDQUFDO0tBQ3pFLENBQUM7cUNBSTJCLFdBQUk7R0FIcEIsZUFBZSxDQWlCM0I7QUFqQlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBzdGF0dXNiYXJUcmFuc3BhcmVudGUgfSBmcm9tIFwiLi4vLi4vdXRpbGlkYWRlcy9zdGF0dXNiYXJcIjtcclxuaW1wb3J0IHsgVXN1YXJpbyB9IGZyb20gXCIuLi8uLi9jb21wYXJ0aWRvL3VzdWFyaW8vVXN1YXJpb1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsb2dpbicsXHJcbiAgdGVtcGxhdGVVcmw6ICdwYWdpbmFzL2xvZ2luL2xvZ2luLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogW1wicGFnaW5hcy9sb2dpbi9sb2dpbi1nbG9iYWwuY3NzXCIsIFwicGFnaW5hcy9sb2dpbi9sb2dpbi5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudGVMb2dpbiBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIHVzdWFyaW86IFVzdWFyaW87XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlIDogUGFnZSkge1xyXG4gICAgdGhpcy51c3VhcmlvID0gbmV3IFVzdWFyaW8oKTtcclxuICAgIHN0YXR1c2JhclRyYW5zcGFyZW50ZSgpO1xyXG4gICB9XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgIHRoaXMucGFnZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcIn4vcmVjdXJzb3MvcGxheWEuanBnXCI7XHJcbiAgfVxyXG4gIHRvdWNoKCl7XHJcbiAgICBjb25zb2xlLmxvZyhcIkhPTEFcIik7XHJcbiAgfVxyXG4gIGFjY2VkZXIoKSB7XHJcbiAgICBhbGVydCh0aGlzLnVzdWFyaW8uY29ycmVvKTtcclxuICB9XHJcbn1cclxuIl19