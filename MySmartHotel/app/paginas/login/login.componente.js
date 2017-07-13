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
var ServicioUsuario_1 = require("../../compartido/usuario/ServicioUsuario");
var ComponenteLogin = (function () {
    function ComponenteLogin(page, servicioUsuario) {
        this.page = page;
        this.servicioUsuario = servicioUsuario;
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
        alert("Accediendo");
        this.servicioUsuario.login(this.usuario).subscribe(function () { return console.log("Okay"); }, function (error) { return alert("ERROR"); });
    };
    return ComponenteLogin;
}());
ComponenteLogin = __decorate([
    core_1.Component({
        selector: 'login',
        providers: [ServicioUsuario_1.ServicioUsuario],
        templateUrl: 'paginas/login/login.html',
        styleUrls: ["paginas/login/login-global.css", "paginas/login/login.css"]
    }),
    __metadata("design:paramtypes", [page_1.Page, ServicioUsuario_1.ServicioUsuario])
], ComponenteLogin);
exports.ComponenteLogin = ComponenteLogin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7QUFFSDs7RUFFRTtBQUNGLHNDQUFpRDtBQUNqRCxnQ0FBK0I7QUFDL0IsNERBQTJEO0FBQzNELDRFQUEyRTtBQVMzRSxJQUFhLGVBQWU7SUFFMUIseUJBQW9CLElBQVcsRUFBVSxlQUFpQztRQUF0RCxTQUFJLEdBQUosSUFBSSxDQUFPO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQWtCO1FBQ3hFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxpQkFBTyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUNGLGtDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsc0JBQXNCLENBQUM7SUFDckQsQ0FBQztJQUNELCtCQUFLLEdBQUw7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFDRCxpQ0FBTyxHQUFQO1FBQ0UsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQzVDLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFuQixDQUFtQixFQUN6QixVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBZCxDQUFjLENBQzlCLENBQUM7SUFDSixDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBbkJELElBbUJDO0FBbkJZLGVBQWU7SUFQM0IsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFNBQVMsRUFBRSxDQUFFLGlDQUFlLENBQUU7UUFDOUIsV0FBVyxFQUFFLDBCQUEwQjtRQUN2QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsRUFBRSx5QkFBeUIsQ0FBQztLQUN6RSxDQUFDO3FDQUkyQixXQUFJLEVBQTRCLGlDQUFlO0dBRi9ELGVBQWUsQ0FtQjNCO0FBbkJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbsKgKiBAbmFtZSBsb2dpbi5jb21wb25lbnRlLnRzXHJcbsKgKlxyXG7CoCogQ29tcG9uZW50ZSBwYXJhIGxhIHDDoWdpbmEgTG9naW5cclxuwqAqXHJcbsKgKiBAYXV0aG9yIEFsZm9uc28gUmV5ZXMgQ29ydMOpcyB8IGhvbGFAbXJhcmMueHl6XHJcbsKgKi9cclxuXHJcbi8qKlxyXG4qIEltcG9ydHNcclxuKi9cclxuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgVXN1YXJpbyB9IGZyb20gXCIuLi8uLi9jb21wYXJ0aWRvL3VzdWFyaW8vVXN1YXJpb1wiO1xyXG5pbXBvcnQgeyBTZXJ2aWNpb1VzdWFyaW8gfSBmcm9tIFwiLi4vLi4vY29tcGFydGlkby91c3VhcmlvL1NlcnZpY2lvVXN1YXJpb1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsb2dpbicsXHJcbiAgcHJvdmlkZXJzOiBbIFNlcnZpY2lvVXN1YXJpbyBdLFxyXG4gIHRlbXBsYXRlVXJsOiAncGFnaW5hcy9sb2dpbi9sb2dpbi5odG1sJyxcclxuICBzdHlsZVVybHM6IFtcInBhZ2luYXMvbG9naW4vbG9naW4tZ2xvYmFsLmNzc1wiLCBcInBhZ2luYXMvbG9naW4vbG9naW4uY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50ZUxvZ2luIGltcGxlbWVudHMgT25Jbml0IHtcclxuICB1c3VhcmlvOiBVc3VhcmlvO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZSA6IFBhZ2UsIHByaXZhdGUgc2VydmljaW9Vc3VhcmlvIDogU2VydmljaW9Vc3VhcmlvKSB7XHJcbiAgICB0aGlzLnVzdWFyaW8gPSBuZXcgVXN1YXJpbygpO1xyXG4gICB9XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICAgIHRoaXMucGFnZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcIn4vcmVjdXJzb3MvcGxheWEuanBnXCI7XHJcbiAgfVxyXG4gIHRvdWNoKCl7XHJcbiAgICBjb25zb2xlLmxvZyhcIkhPTEFcIik7XHJcbiAgfVxyXG4gIGFjY2VkZXIoKSB7XHJcbiAgICBhbGVydChcIkFjY2VkaWVuZG9cIik7XHJcbiAgICB0aGlzLnNlcnZpY2lvVXN1YXJpby5sb2dpbih0aGlzLnVzdWFyaW8pLnN1YnNjcmliZShcclxuICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiT2theVwiKSxcclxuICAgICAgICAgIChlcnJvcikgPT4gYWxlcnQoXCJFUlJPUlwiKVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19