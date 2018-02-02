"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var places_service_1 = require("../../services/places.service");
var location_service_1 = require("../../services/location.service");
var nativescript_fancyalert_1 = require("nativescript-fancyalert");
var nativescript_snackbar_1 = require("nativescript-snackbar");
var MenuComponent = (function () {
    function MenuComponent(locationService, placesService) {
        this.locationService = locationService;
        this.placesService = placesService;
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
        this.tab.nativeElement.selectedIndex = i;
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
        __metadata("design:paramtypes", [location_service_1.LocationService, places_service_1.PlacesService])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSxnRUFBOEQ7QUFDOUQsb0VBQWtFO0FBQ2xFLG1FQUF3RDtBQUN4RCwrREFBaUQ7QUFRakQ7SUFHRSx1QkFBb0IsZUFBZ0MsRUFBVSxhQUE0QjtRQUF0RSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUFLLENBQUM7SUFDaEcsZ0NBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGdDQUFRLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFDLFFBQVE7WUFDdEQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUM3QyxDQUFDLEVBQUUsVUFBQyxLQUFLO1lBQ1AsdUNBQWEsQ0FBQyxTQUFTLENBQUMsNEJBQTRCLEVBQUUsd0ZBQXdGLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDL0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ00saUNBQVMsR0FBaEIsVUFBaUIsQ0FBQztRQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFiaUI7UUFBakIsZ0JBQVMsQ0FBQyxLQUFLLENBQUM7a0NBQU0saUJBQVU7OENBQUM7SUFEdkIsYUFBYTtRQUx6QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLHNCQUFzQjtTQUNwQyxDQUFDO3lDQUtxQyxrQ0FBZSxFQUF5Qiw4QkFBYTtPQUgvRSxhQUFhLENBZ0J6QjtJQUFELG9CQUFDO0NBQUEsQUFoQkQsSUFnQkM7QUFoQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGxhY2VzU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9wbGFjZXMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBMb2NhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvbG9jYXRpb24uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBUTlNGYW5jeUFsZXJ0IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWZhbmN5YWxlcnQnO1xyXG5pbXBvcnQgeyBTbmFja0JhciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtc25hY2tiYXJcIjtcclxuaW1wb3J0IHsgUGxhY2UgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3BsYWNlLm1vZGVsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ01lbnVDb21wb25lbnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAncGFnZXMvbWVudS9tZW51Lmh0bWwnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQFZpZXdDaGlsZChcInRhYlwiKSB0YWI6IEVsZW1lbnRSZWY7XHJcbiAgcHJpdmF0ZSBzbmFja0JhcjogU25hY2tCYXI7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2NhdGlvblNlcnZpY2U6IExvY2F0aW9uU2VydmljZSwgcHJpdmF0ZSBwbGFjZXNTZXJ2aWNlOiBQbGFjZXNTZXJ2aWNlKSB7ICB9XHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNuYWNrQmFyID0gbmV3IFNuYWNrQmFyKCk7XHJcbiAgICB0aGlzLmxvY2F0aW9uU2VydmljZS5zZXR1cExvY2F0aW9uKCkuc3Vic2NyaWJlKChsb2NhdGlvbikgPT4ge1xyXG4gICAgICB0aGlzLnNuYWNrQmFyLnNpbXBsZSgnVWJpY2FjacOzbiBvYnRlbmlkYScpO1xyXG4gICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgIFROU0ZhbmN5QWxlcnQuc2hvd0Vycm9yKFwiRXJyb3IgYWwgYWN0aXZhciB1YmljYWNpw7NuXCIsIFwiRXMgbmVjZXNhcmlvIHF1ZSBhY3RpdmVzIGVsIEdQUyBkZSB0dSBkaXNwb3NpdGl2byBwYXJhIHBvZGVyIHVzYXIgbGEgYXBwIGNvcnJlY3RhbWVudGVcIiwgXCJFbnRlbmRpZG9cIik7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgcHVibGljIGNoYW5nZVRhYihpKTogdm9pZCB7XHJcbiAgICB0aGlzLnRhYi5uYXRpdmVFbGVtZW50LnNlbGVjdGVkSW5kZXggPSBpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19