/**
 * @name login.componente.ts
 *
 * Componente para la página Login
 *
 * @author Alfonso Reyes Cortés | hola@mrarc.xyz
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
* Imports
*/
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var Usuario_1 = require("../../compartido/usuario/Usuario");
var ComponenteLogin = (function () {
    function ComponenteLogin(page) {
        this.page = page;
        this.usuario = new Usuario_1.Usuario();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7QUFFSDs7RUFFRTtBQUNGLHNDQUFpRDtBQUNqRCxnQ0FBK0I7QUFDL0IsNERBQTJEO0FBTzNELElBQWEsZUFBZTtJQUUxQix5QkFBb0IsSUFBVztRQUFYLFNBQUksR0FBSixJQUFJLENBQU87UUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBQ0Ysa0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxzQkFBc0IsQ0FBQztJQUNyRCxDQUFDO0lBQ0QsK0JBQUssR0FBTDtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUNELGlDQUFPLEdBQVA7UUFDRSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBZkQsSUFlQztBQWZZLGVBQWU7SUFMM0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFdBQVcsRUFBRSwwQkFBMEI7UUFDdkMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLEVBQUUseUJBQXlCLENBQUM7S0FDekUsQ0FBQztxQ0FHMkIsV0FBSTtHQUZwQixlQUFlLENBZTNCO0FBZlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuwqAqIEBuYW1lIGxvZ2luLmNvbXBvbmVudGUudHNcclxuwqAqXHJcbsKgKiBDb21wb25lbnRlIHBhcmEgbGEgcMOhZ2luYSBMb2dpblxyXG7CoCpcclxuwqAqIEBhdXRob3IgQWxmb25zbyBSZXllcyBDb3J0w6lzIHwgaG9sYUBtcmFyYy54eXpcclxuwqAqL1xyXG5cclxuLyoqXHJcbiogSW1wb3J0c1xyXG4qL1xyXG5pbXBvcnQge0NvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBVc3VhcmlvIH0gZnJvbSBcIi4uLy4uL2NvbXBhcnRpZG8vdXN1YXJpby9Vc3VhcmlvXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xvZ2luJyxcclxuICB0ZW1wbGF0ZVVybDogJ3BhZ2luYXMvbG9naW4vbG9naW4uaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbXCJwYWdpbmFzL2xvZ2luL2xvZ2luLWdsb2JhbC5jc3NcIiwgXCJwYWdpbmFzL2xvZ2luL2xvZ2luLmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50ZUxvZ2luIGltcGxlbWVudHMgT25Jbml0IHtcclxuICB1c3VhcmlvOiBVc3VhcmlvO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZSA6IFBhZ2UpIHtcclxuICAgIHRoaXMudXN1YXJpbyA9IG5ldyBVc3VhcmlvKCk7XHJcbiAgIH1cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgdGhpcy5wYWdlLmJhY2tncm91bmRJbWFnZSA9IFwifi9yZWN1cnNvcy9wbGF5YS5qcGdcIjtcclxuICB9XHJcbiAgdG91Y2goKXtcclxuICAgIGNvbnNvbGUubG9nKFwiSE9MQVwiKTtcclxuICB9XHJcbiAgYWNjZWRlcigpIHtcclxuICAgIGFsZXJ0KHRoaXMudXN1YXJpby5jb3JyZW8pO1xyXG4gIH1cclxufVxyXG4iXX0=