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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7QUFFSDs7RUFFRTtBQUNGLHNDQUFpRDtBQUNqRCxnQ0FBK0I7QUFDL0IsNERBQTJEO0FBTzNELElBQWEsZUFBZTtJQUUxQix5QkFBb0IsSUFBVztRQUFYLFNBQUksR0FBSixJQUFJLENBQU87UUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBQ0Ysa0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxzQkFBc0IsQ0FBQztJQUNyRCxDQUFDO0lBQ0QsK0JBQUssR0FBTDtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUNELGlDQUFPLEdBQVA7UUFDRSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBZkQsSUFlQztBQWZZLGVBQWU7SUFMM0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFdBQVcsRUFBRSwwQkFBMEI7UUFDdkMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLEVBQUUseUJBQXlCLENBQUM7S0FDekUsQ0FBQztxQ0FHMkIsV0FBSTtHQUZwQixlQUFlLENBZTNCO0FBZlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuwqAqIEBuYW1lIGxvZ2luLmNvbXBvbmVudGUudHNcclxuwqAqXHJcbsKgKiBDb21wb25lbnRlIHBhcmEgbGEgcMOhZ2luYSBMb2dpblxyXG7CoCpcclxuwqAqIEBhdXRob3IgQWxmb25zbyBSZXllcyBDb3J0w6lzIHwgaG9sYUBtcmFyYy54eXpcclxuwqAqL1xyXG5cclxuLyoqXHJcbiogSW1wb3J0c1xyXG4qL1xyXG5pbXBvcnQge0NvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBVc3VhcmlvIH0gZnJvbSBcIi4uLy4uL2NvbXBhcnRpZG8vdXN1YXJpby9Vc3VhcmlvXCI7XG5cbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbG9naW4nLFxyXG4gIHRlbXBsYXRlVXJsOiAncGFnaW5hcy9sb2dpbi9sb2dpbi5odG1sJyxcclxuICBzdHlsZVVybHM6IFtcInBhZ2luYXMvbG9naW4vbG9naW4tZ2xvYmFsLmNzc1wiLCBcInBhZ2luYXMvbG9naW4vbG9naW4uY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRlTG9naW4gaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHVzdWFyaW86IFVzdWFyaW87XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlIDogUGFnZSkge1xyXG4gICAgdGhpcy51c3VhcmlvID0gbmV3IFVzdWFyaW8oKTtcclxuICAgfVxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICB0aGlzLnBhZ2UuYmFja2dyb3VuZEltYWdlID0gXCJ+L3JlY3Vyc29zL3BsYXlhLmpwZ1wiO1xyXG4gIH1cclxuICB0b3VjaCgpe1xyXG4gICAgY29uc29sZS5sb2coXCJIT0xBXCIpO1xyXG4gIH1cclxuICBhY2NlZGVyKCkge1xyXG4gICAgYWxlcnQodGhpcy51c3VhcmlvLmNvcnJlbyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==