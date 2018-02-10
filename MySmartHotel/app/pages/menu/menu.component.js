"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var places_service_1 = require("../../services/places.service");
var location_service_1 = require("../../services/location.service");
var login_service_1 = require("../../services/login.service");
var nativescript_fancyalert_1 = require("nativescript-fancyalert");
var nativescript_snackbar_1 = require("nativescript-snackbar");
var dialogs = require("ui/dialogs");
var MenuComponent = (function () {
    function MenuComponent(locationService, placesService, loginService) {
        this.locationService = locationService;
        this.placesService = placesService;
        this.loginService = loginService;
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.snackBar = new nativescript_snackbar_1.SnackBar();
        this.locationService.setupLocation().subscribe(function (location) {
            _this.snackBar.simple('Ubicación obtenida');
        }, function (error) {
            nativescript_fancyalert_1.TNSFancyAlert.showError("Error al activar ubicación", "Es necesario que actives el GPS de tu dispositivo para poder usar la app correctamente", "Entendido");
        });
    };
    MenuComponent.prototype.changeTab = function (i) {
        if (i == 3) {
            this.handleLogout();
            return;
        }
        this.tab.nativeElement.selectedIndex = i;
    };
    MenuComponent.prototype.handleLogout = function () {
        var _this = this;
        dialogs.confirm({
            title: "¿Estás seguro que quieres cerrar sesión?",
            message: "Tendrás que iniciar sesión de nuevo",
            okButtonText: "Cerrar sesión",
            cancelButtonText: "Cancelar",
            neutralButtonText: null,
        }).then(function (r) {
            if (r) {
                _this.loginService.logout();
            }
        });
    };
    __decorate([
        core_1.ViewChild("tab"),
        __metadata("design:type", core_1.ElementRef)
    ], MenuComponent.prototype, "tab", void 0);
    MenuComponent = __decorate([
        core_1.Component({
            selector: 'MenuComponent',
            templateUrl: 'pages/menu/menu.html'
        }),
        __metadata("design:paramtypes", [location_service_1.LocationService, places_service_1.PlacesService, login_service_1.LoginService])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSxnRUFBOEQ7QUFDOUQsb0VBQWtFO0FBQ2xFLDhEQUE0RDtBQUM1RCxtRUFBd0Q7QUFDeEQsK0RBQWlEO0FBRWpELG9DQUFzQztBQU90QztJQUdFLHVCQUFvQixlQUFnQyxFQUFVLGFBQTRCLEVBQVUsWUFBMEI7UUFBMUcsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUFJLENBQUM7SUFDbkksZ0NBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGdDQUFRLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFDLFFBQVE7WUFDdEQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUM3QyxDQUFDLEVBQUUsVUFBQyxLQUFLO1lBQ1AsdUNBQWEsQ0FBQyxTQUFTLENBQUMsNEJBQTRCLEVBQUUsd0ZBQXdGLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDL0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ00saUNBQVMsR0FBaEIsVUFBaUIsQ0FBQztRQUNoQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNYLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixNQUFNLENBQUM7UUFDVCxDQUFDO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0Qsb0NBQVksR0FBWjtRQUFBLGlCQVlDO1FBWEMsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUNkLEtBQUssRUFBRSwwQ0FBMEM7WUFDakQsT0FBTyxFQUFFLHFDQUFxQztZQUM5QyxZQUFZLEVBQUUsZUFBZTtZQUM3QixnQkFBZ0IsRUFBRSxVQUFVO1lBQzVCLGlCQUFpQixFQUFFLElBQUk7U0FDeEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7WUFDUCxFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNMLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDN0IsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQTlCaUI7UUFBakIsZ0JBQVMsQ0FBQyxLQUFLLENBQUM7a0NBQU0saUJBQVU7OENBQUM7SUFEdkIsYUFBYTtRQUx6QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLHNCQUFzQjtTQUNwQyxDQUFDO3lDQUtxQyxrQ0FBZSxFQUF5Qiw4QkFBYSxFQUF3Qiw0QkFBWTtPQUhuSCxhQUFhLENBZ0N6QjtJQUFELG9CQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7QUFoQ1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGxhY2VzU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9wbGFjZXMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBMb2NhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvbG9jYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvbG9naW4uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBUTlNGYW5jeUFsZXJ0IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWZhbmN5YWxlcnQnO1xyXG5pbXBvcnQgeyBTbmFja0JhciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtc25hY2tiYXJcIjtcclxuaW1wb3J0IHsgUGxhY2UgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3BsYWNlLm1vZGVsXCI7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnTWVudUNvbXBvbmVudCcsXHJcbiAgdGVtcGxhdGVVcmw6ICdwYWdlcy9tZW51L21lbnUuaHRtbCdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBAVmlld0NoaWxkKFwidGFiXCIpIHRhYjogRWxlbWVudFJlZjtcclxuICBwcml2YXRlIHNuYWNrQmFyOiBTbmFja0JhcjtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvY2F0aW9uU2VydmljZTogTG9jYXRpb25TZXJ2aWNlLCBwcml2YXRlIHBsYWNlc1NlcnZpY2U6IFBsYWNlc1NlcnZpY2UsIHByaXZhdGUgbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UpIHsgfVxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zbmFja0JhciA9IG5ldyBTbmFja0JhcigpO1xyXG4gICAgdGhpcy5sb2NhdGlvblNlcnZpY2Uuc2V0dXBMb2NhdGlvbigpLnN1YnNjcmliZSgobG9jYXRpb24pID0+IHtcclxuICAgICAgdGhpcy5zbmFja0Jhci5zaW1wbGUoJ1ViaWNhY2nDs24gb2J0ZW5pZGEnKTtcclxuICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICBUTlNGYW5jeUFsZXJ0LnNob3dFcnJvcihcIkVycm9yIGFsIGFjdGl2YXIgdWJpY2FjacOzblwiLCBcIkVzIG5lY2VzYXJpbyBxdWUgYWN0aXZlcyBlbCBHUFMgZGUgdHUgZGlzcG9zaXRpdm8gcGFyYSBwb2RlciB1c2FyIGxhIGFwcCBjb3JyZWN0YW1lbnRlXCIsIFwiRW50ZW5kaWRvXCIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHB1YmxpYyBjaGFuZ2VUYWIoaSk6IHZvaWQge1xyXG4gICAgaWYgKGkgPT0gMykge1xyXG4gICAgICB0aGlzLmhhbmRsZUxvZ291dCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnRhYi5uYXRpdmVFbGVtZW50LnNlbGVjdGVkSW5kZXggPSBpO1xyXG4gIH1cclxuICBoYW5kbGVMb2dvdXQoKTogdm9pZCB7XHJcbiAgICBkaWFsb2dzLmNvbmZpcm0oe1xyXG4gICAgICB0aXRsZTogXCLCv0VzdMOhcyBzZWd1cm8gcXVlIHF1aWVyZXMgY2VycmFyIHNlc2nDs24/XCIsXHJcbiAgICAgIG1lc3NhZ2U6IFwiVGVuZHLDoXMgcXVlIGluaWNpYXIgc2VzacOzbiBkZSBudWV2b1wiLFxyXG4gICAgICBva0J1dHRvblRleHQ6IFwiQ2VycmFyIHNlc2nDs25cIixcclxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxhclwiLFxyXG4gICAgICBuZXV0cmFsQnV0dG9uVGV4dDogbnVsbCxcclxuICAgIH0pLnRoZW4ociA9PiB7XHJcbiAgICAgIGlmKHIpIHtcclxuICAgICAgICB0aGlzLmxvZ2luU2VydmljZS5sb2dvdXQoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==