"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var configuracion_1 = require("../../compartido/configuracion");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
var ServicioUsuario = (function () {
    function ServicioUsuario(http) {
        this.http = http;
    }
    ServicioUsuario.prototype.login = function (usuario) {
        var cabeceras = new http_1.Headers();
        cabeceras.append("Content-Type", "application/json");
        return this.http.get(configuracion_1.Configuracion.apiURL + "usuario/clave/", JSON.stringify({
            cuarto: usuario.cuarto,
            clave: usuario.clave,
        }))
            .map(function (response) { return response.json(); })
            .do(function (data) {
            console.dir(data);
            //Configuracion.token = data.Result.access_token;
        })
            .catch(this.handleErrors);
    };
    ServicioUsuario.prototype.handleErrors = function (error) {
        console.log("ERRORRR");
        return Rx_1.Observable.throw(error);
    };
    return ServicioUsuario;
}());
ServicioUsuario = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ServicioUsuario);
exports.ServicioUsuario = ServicioUsuario;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmljaW9Vc3VhcmlvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU2VydmljaW9Vc3VhcmlvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF1RDtBQUN2RCxnRUFBK0Q7QUFFL0QsOEJBQXFDO0FBQ3JDLGlDQUErQjtBQUMvQixnQ0FBOEI7QUFHOUIsSUFBYSxlQUFlO0lBQzFCLHlCQUFvQixJQUFXO1FBQVgsU0FBSSxHQUFKLElBQUksQ0FBTztJQUFJLENBQUM7SUFFcEMsK0JBQUssR0FBTCxVQUFNLE9BQWlCO1FBQ3JCLElBQUksU0FBUyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDOUIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNyRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ3RCLDZCQUFhLENBQUMsTUFBTSxHQUFHLGdCQUFnQixFQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2IsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO1lBQ3RCLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztTQUNyQixDQUFDLENBQ0g7YUFDQSxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO2FBQ2hDLEVBQUUsQ0FBQyxVQUFBLElBQUk7WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLGlEQUFpRDtRQUNuRCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxzQ0FBWSxHQUFaLFVBQWEsS0FBZTtRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFSCxzQkFBQztBQUFELENBQUMsQUExQkQsSUEwQkM7QUExQlksZUFBZTtJQUQzQixpQkFBVSxFQUFFO3FDQUVnQixXQUFJO0dBRHBCLGVBQWUsQ0EwQjNCO0FBMUJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7SHR0cCwgUmVzcG9uc2UsIEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBDb25maWd1cmFjaW9uIH0gZnJvbSBcIi4uLy4uL2NvbXBhcnRpZG8vY29uZmlndXJhY2lvblwiO1xyXG5pbXBvcnQgeyBVc3VhcmlvIH0gZnJvbSBcIi4uLy4uL2NvbXBhcnRpZG8vdXN1YXJpby9Vc3VhcmlvXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTZXJ2aWNpb1VzdWFyaW8ge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cCA6IEh0dHApIHsgfVxyXG5cclxuICBsb2dpbih1c3VhcmlvIDogVXN1YXJpbykge1xyXG4gICAgbGV0IGNhYmVjZXJhcyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICBjYWJlY2VyYXMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFxyXG4gIENvbmZpZ3VyYWNpb24uYXBpVVJMICsgXCJ1c3VhcmlvL2NsYXZlL1wiLFxyXG4gIEpTT04uc3RyaW5naWZ5KHtcclxuICAgIGN1YXJ0bzogdXN1YXJpby5jdWFydG8sXHJcbiAgICBjbGF2ZTogdXN1YXJpby5jbGF2ZSxcclxuICB9KVxyXG4pXHJcbi5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4uZG8oZGF0YSA9PiB7XHJcbiAgY29uc29sZS5kaXIoZGF0YSk7XHJcbiAgLy9Db25maWd1cmFjaW9uLnRva2VuID0gZGF0YS5SZXN1bHQuYWNjZXNzX3Rva2VuO1xyXG59KVxyXG4uY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xyXG4gICAgY29uc29sZS5sb2coXCJFUlJPUlJSXCIpO1xyXG4gICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19