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
        this.locationService.setupLocation().subscribe(function (location) {
            var snackBar = new nativescript_snackbar_1.SnackBar();
            snackBar.simple('Ubicación obtenida');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSxnRUFBOEQ7QUFDOUQsb0VBQWtFO0FBQ2xFLG1FQUF3RDtBQUN4RCwrREFBaUQ7QUFPakQ7SUFFRSx1QkFBb0IsZUFBaUMsRUFBVSxhQUE2QjtRQUF4RSxvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZ0I7SUFBSSxDQUFDO0lBQ2pHLGdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFDLFFBQVE7WUFDdEQsSUFBSSxRQUFRLEdBQUcsSUFBSSxnQ0FBUSxFQUFFLENBQUM7WUFDOUIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsRUFBRSxVQUFDLEtBQUs7WUFDUCx1Q0FBYSxDQUFDLFNBQVMsQ0FBQyw0QkFBNEIsRUFBRSx3RkFBd0YsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUMvSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDTSxpQ0FBUyxHQUFoQixVQUFpQixDQUFDO1FBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQVppQjtRQUFqQixnQkFBUyxDQUFDLEtBQUssQ0FBQztrQ0FBTSxpQkFBVTs4Q0FBQztJQUR2QixhQUFhO1FBTHpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsc0JBQXNCO1NBQ3BDLENBQUM7eUNBSXNDLGtDQUFlLEVBQTBCLDhCQUFhO09BRmpGLGFBQWEsQ0FlekI7SUFBRCxvQkFBQztDQUFBLEFBZkQsSUFlQztBQWZZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBsYWNlc1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvcGxhY2VzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTG9jYXRpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2xvY2F0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgVE5TRmFuY3lBbGVydCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1mYW5jeWFsZXJ0JztcclxuaW1wb3J0IHsgU25hY2tCYXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXNuYWNrYmFyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ01lbnVDb21wb25lbnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAncGFnZXMvbWVudS9tZW51Lmh0bWwnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQFZpZXdDaGlsZChcInRhYlwiKSB0YWI6IEVsZW1lbnRSZWY7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2NhdGlvblNlcnZpY2UgOiBMb2NhdGlvblNlcnZpY2UsIHByaXZhdGUgcGxhY2VzU2VydmljZSA6IFBsYWNlc1NlcnZpY2UpIHsgfVxyXG4gIG5nT25Jbml0KCkgOiB2b2lkIHtcclxuICAgIHRoaXMubG9jYXRpb25TZXJ2aWNlLnNldHVwTG9jYXRpb24oKS5zdWJzY3JpYmUoKGxvY2F0aW9uKSA9PiB7XHJcbiAgICAgIGxldCBzbmFja0JhciA9IG5ldyBTbmFja0JhcigpO1xyXG4gICAgICBzbmFja0Jhci5zaW1wbGUoJ1ViaWNhY2nDs24gb2J0ZW5pZGEnKTtcclxuICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICBUTlNGYW5jeUFsZXJ0LnNob3dFcnJvcihcIkVycm9yIGFsIGFjdGl2YXIgdWJpY2FjacOzblwiLCBcIkVzIG5lY2VzYXJpbyBxdWUgYWN0aXZlcyBlbCBHUFMgZGUgdHUgZGlzcG9zaXRpdm8gcGFyYSBwb2RlciB1c2FyIGxhIGFwcCBjb3JyZWN0YW1lbnRlXCIsIFwiRW50ZW5kaWRvXCIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHB1YmxpYyBjaGFuZ2VUYWIoaSkgOiB2b2lkIHtcclxuICAgIHRoaXMudGFiLm5hdGl2ZUVsZW1lbnQuc2VsZWN0ZWRJbmRleCA9IGk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=