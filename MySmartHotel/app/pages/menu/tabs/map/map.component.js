"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var places_service_1 = require("../../../../services/places.service");
var location_service_1 = require("../../../../services/location.service");
var nativescript_snackbar_1 = require("nativescript-snackbar");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var nativescript_fancyalert_1 = require("nativescript-fancyalert");
var dialogs = require("ui/dialogs");
var nativescript_mapbox_1 = require("nativescript-mapbox");
var connectivity = require("tns-core-modules/connectivity");
var MapComponent = (function () {
    function MapComponent(placesService, locationService) {
        this.placesService = placesService;
        this.locationService = locationService;
        this.places = [];
        this.mapEnabled = false;
        this.mapbox = new nativescript_mapbox_1.Mapbox();
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loader = new nativescript_loading_indicator_1.LoadingIndicator();
        this.snackBar = new nativescript_snackbar_1.SnackBar;
        this.locationService.locationSetChange.subscribe(function () {
            _this.location = _this.locationService.getLocation();
            if (!_this.hasConnectivity()) {
                _this.mapEnabled = true;
            }
        });
    };
    MapComponent.prototype.hasConnectivity = function () {
        return connectivity.getConnectionType() == connectivity.connectionType.none;
    };
    MapComponent.prototype.showMapInternet = function () {
        if (!this.hasConnectivity()) {
            this.onMapReady(this.mapObject);
            this.mapEnabled = true;
        }
        else {
            this.snackBar.simple("No tienes conexión a internet para ver el mapa");
        }
    };
    MapComponent.prototype.allowLocation = function () {
        var _this = this;
        this.loader.show({ message: "Obteniendo ubicación" });
        this.locationService.setupLocation().subscribe(function (location) {
            _this.onMapReady(_this.mapObject);
            _this.location = _this.locationService.getLocation();
            _this.mapEnabled = true;
            _this.loader.hide();
            _this.snackBar.simple('Ubicación obtenida');
        }, function (error) {
            _this.loader.hide();
            _this.snackBar.simple('No se pudo obtener la ubicación');
        });
    };
    MapComponent.prototype.onMapReady = function (mapObject) {
        this.mapObject = mapObject;
        this.loadMarks(mapObject);
    };
    MapComponent.prototype.loadMarks = function (mapObject) {
        var _this = this;
        if (this.placesService.placesExist()) {
            this.loader.show({ message: "Obteniendo lugares cercanos" });
            this.placesService.getSavedPlaces().then(function (response) {
                _this.places = JSON.parse(response);
                _this.putMarks(mapObject);
                _this.loader.hide();
            });
        }
        else {
            dialogs.confirm({
                title: "Información",
                message: "Para mejorar la experiencia de usuario necesitamos descargar información extra de los sitios cercanos a tu ubicación, se recomienda estar conectado a la red Wi-Fi del hotel.",
                okButtonText: "Confirmar (descargar)",
                cancelButtonText: "Rechazar",
                neutralButtonText: null
            }).then(function (result) {
                if (result) {
                    _this.loader.show({ message: "Obteniendo lugares cercanos" });
                    _this.placesService.getPlaces(_this.location).subscribe(function (placesResponse) {
                        _this.placesService.storePlaces(placesResponse).then(function (success) {
                            if (success) {
                                _this.snackBar.simple("Lugares guardados", "#AED581");
                                _this.placesService.getSavedPlaces().then(function (response) {
                                    _this.places = JSON.parse(response);
                                    _this.putMarks(mapObject);
                                    _this.loader.hide();
                                });
                            }
                            else {
                                _this.loader.hide();
                                nativescript_fancyalert_1.TNSFancyAlert.showError("Error al guardar lugares", "No se pudieron guardar los lugares cercanos a ti", "Entendido");
                            }
                        });
                    }, function (error) {
                        _this.loader.hide();
                        _this.snackBar.simple('No se pudieron obtener los lugares cercanos');
                    });
                }
                else {
                    nativescript_fancyalert_1.TNSFancyAlert.showError("No hay información turisticas", "La aplicación no funcionara de manera completa", "Entendido");
                }
            });
        }
    };
    MapComponent.prototype.putMarks = function (mapObject) {
        var _this = this;
        this.places.forEach(function (place) {
            mapObject.map.addMarkers([{
                    lat: place.location["lat"],
                    lng: place.location["lng"],
                    title: place.name,
                    iconPath: _this.getIcon(place.placeType),
                    onCalloutTap: function () { console.log("'Nice location' marker callout tapped"); }
                }]);
        });
    };
    MapComponent.prototype.goCenter = function () {
        this.mapObject.map.setCenter({
            lat: this.locationService.getLocation().latitude,
            lng: this.locationService.getLocation().longitude,
            animated: true
        });
    };
    MapComponent.prototype.getIcon = function (type) {
        switch (type) {
            case "park": return "assets/map/park.png";
            case "restaurant": return "assets/map/restaurant.png";
            case "museum": return "assets/map/museum.png";
            case "art_gallery": return "assets/map/art_gallery.png";
            case "cafe": return "assets/map/cafe.png";
            case "casino": return "assets/map/casino.png";
            case "zoo": return "assets/map/zoo.png";
            case "shopping_mall": return "assets/map/shopping.png";
            case "bar": return "assets/map/bar.png";
            case "night_club": return "assets/map/bar.png";
            case "point_of_interest": return "assets/map/point_of_interest.png";
        }
    };
    MapComponent = __decorate([
        core_1.Component({
            selector: 'Map',
            templateUrl: 'pages/menu/tabs/map/map.html',
            styleUrls: ['pages/menu/tabs/map/map.css']
        }),
        __metadata("design:paramtypes", [places_service_1.PlacesService, location_service_1.LocationService])
    ], MapComponent);
    return MapComponent;
}());
exports.MapComponent = MapComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFHbEQsc0VBQW1FO0FBQ25FLDBFQUF1RTtBQUd2RSwrREFBaUQ7QUFDakQsaUZBQWtFO0FBRWxFLG1FQUF3RDtBQUN4RCxvQ0FBc0M7QUFDdEMsMkRBQXdIO0FBQ3hILDREQUE4RDtBQVE5RDtJQVFFLHNCQUFvQixhQUE0QixFQUFVLGVBQWdDO1FBQXRFLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBUGxGLFdBQU0sR0FBaUIsRUFBRSxDQUFDO1FBSTFCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFJbEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLDRCQUFNLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUYsK0JBQVEsR0FBUjtRQUFBLGlCQVNDO1FBUkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGlEQUFnQixFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGdDQUFRLENBQUM7UUFDN0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUM7WUFDL0MsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25ELEVBQUUsQ0FBQSxDQUFDLENBQUMsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDM0IsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDekIsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNPLHNDQUFlLEdBQXZCO1FBQ0csTUFBTSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLFlBQVksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO0lBQzlFLENBQUM7SUFFTyxzQ0FB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QUFLLEVBQUUsTUFBTSxDQUFDLG9CQUFvQixDQUFDO1lBQ3hDLEtBQUssZUFBZSxFQUFFLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQztZQUN2RCxLQUFLLEtBQUssRUFBRSxNQUFNLENBQUMsb0JBQW9CLENBQUM7WUFDeEMsS0FBSyxZQUFZLEVBQUUsTUFBTSxDQUFDLG9CQUFvQixDQUFDO1lBQy9DLEtBQUssbUJBQW1CLEVBQUUsTUFBTSxDQUFDLGtDQUFrQyxDQUFDO1FBQ3RFLENBQUM7SUFDSCxDQUFDO0lBL0hVLFlBQVk7UUFOeEIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxLQUFLO1lBQ2YsV0FBVyxFQUFFLDhCQUE4QjtZQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztTQUMzQyxDQUFDO3lDQVVtQyw4QkFBYSxFQUEyQixrQ0FBZTtPQVIvRSxZQUFZLENBZ0l4QjtJQUFELG1CQUFDO0NBQUEsQUFoSUQsSUFnSUM7QUFoSVksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBnZW9sb2NhdGlvbiBmcm9tIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCI7XHJcbmltcG9ydCB7IEFjY3VyYWN5IH0gZnJvbSBcInVpL2VudW1zXCI7XHJcbmltcG9ydCB7IFBsYWNlc1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvcGxhY2VzLnNlcnZpY2VcIlxyXG5pbXBvcnQgeyBMb2NhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvbG9jYXRpb24uc2VydmljZVwiXHJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIi4uLy4uLy4uLy4uL21vZGVscy9sb2NhdGlvbi5tb2RlbFwiO1xyXG5pbXBvcnQgeyBQbGFjZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9tb2RlbHMvcGxhY2UubW9kZWxcIjtcclxuaW1wb3J0IHsgU25hY2tCYXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXNuYWNrYmFyXCI7XHJcbmltcG9ydCB7IExvYWRpbmdJbmRpY2F0b3IgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWxvYWRpbmctaW5kaWNhdG9yXCI7XHJcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgYW5pbWF0ZSwgdHJhbnNpdGlvbiB9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XHJcbmltcG9ydCB7IFROU0ZhbmN5QWxlcnQgfSBmcm9tICduYXRpdmVzY3JpcHQtZmFuY3lhbGVydCc7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuaW1wb3J0IHsgTWFwYm94LCBNYXBTdHlsZSwgT2ZmbGluZVJlZ2lvbiwgTGF0TG5nLCBWaWV3cG9ydCwgRG93bmxvYWRQcm9ncmVzcywgTWFwYm94TWFya2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1tYXBib3hcIjtcclxuaW1wb3J0ICogYXMgY29ubmVjdGl2aXR5IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2Nvbm5lY3Rpdml0eVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdNYXAnLFxyXG4gIHRlbXBsYXRlVXJsOiAncGFnZXMvbWVudS90YWJzL21hcC9tYXAuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ3BhZ2VzL21lbnUvdGFicy9tYXAvbWFwLmNzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTWFwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwcml2YXRlIHBsYWNlczogQXJyYXk8UGxhY2U+ID0gW107XHJcbiAgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb247XHJcbiAgcHJpdmF0ZSBsb2FkZXI6IExvYWRpbmdJbmRpY2F0b3I7XHJcbiAgcHJpdmF0ZSBzbmFja0JhcjogU25hY2tCYXI7XHJcbiAgcHJpdmF0ZSBtYXBFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBtYXBPYmplY3Q7XHJcbiAgcHJpdmF0ZSBtYXBib3g6IE1hcGJveDtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBsYWNlc1NlcnZpY2U6IFBsYWNlc1NlcnZpY2UsIHByaXZhdGUgbG9jYXRpb25TZXJ2aWNlOiBMb2NhdGlvblNlcnZpY2UpIHtcclxuICAgIHRoaXMubWFwYm94ID0gbmV3IE1hcGJveCgpO1xyXG4gICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2FkZXIgPSBuZXcgTG9hZGluZ0luZGljYXRvcigpO1xyXG4gICAgdGhpcy5zbmFja0JhciA9IG5ldyBTbmFja0JhcjtcclxuICAgIHRoaXMubG9jYXRpb25TZXJ2aWNlLmxvY2F0aW9uU2V0Q2hhbmdlLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubG9jYXRpb24gPSB0aGlzLmxvY2F0aW9uU2VydmljZS5nZXRMb2NhdGlvbigpO1xyXG4gICAgICBpZighdGhpcy5oYXNDb25uZWN0aXZpdHkoKSkge1xyXG4gICAgICAgIHRoaXMubWFwRW5hYmxlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICBwcml2YXRlIGhhc0Nvbm5lY3Rpdml0eSgpIDogYm9vbGVhbiB7XHJcbiAgICAgcmV0dXJuIGNvbm5lY3Rpdml0eS5nZXRDb25uZWN0aW9uVHlwZSgpID09IGNvbm5lY3Rpdml0eS5jb25uZWN0aW9uVHlwZS5ub25lO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIHNob3dNYXBJbnRlcm5ldCgpIDogdm9pZCB7XHJcbiAgICAgaWYoIXRoaXMuaGFzQ29ubmVjdGl2aXR5KCkpIHtcclxuICAgICB0aGlzLm9uTWFwUmVhZHkodGhpcy5tYXBPYmplY3QpO1xyXG4gICAgIHRoaXMubWFwRW5hYmxlZCA9IHRydWU7XHJcbiAgIH0gZWxzZSB7XHJcbiAgICAgdGhpcy5zbmFja0Jhci5zaW1wbGUoXCJObyB0aWVuZXMgY29uZXhpw7NuIGEgaW50ZXJuZXQgcGFyYSB2ZXIgZWwgbWFwYVwiKTtcclxuICAgfVxyXG4gICB9XHJcblxyXG4gIHByaXZhdGUgYWxsb3dMb2NhdGlvbigpOiB2b2lkIHtcclxuICAgIHRoaXMubG9hZGVyLnNob3coeyBtZXNzYWdlOiBcIk9idGVuaWVuZG8gdWJpY2FjacOzblwiIH0pO1xyXG4gICAgdGhpcy5sb2NhdGlvblNlcnZpY2Uuc2V0dXBMb2NhdGlvbigpLnN1YnNjcmliZSgobG9jYXRpb24pID0+IHtcclxuICAgICAgdGhpcy5vbk1hcFJlYWR5KHRoaXMubWFwT2JqZWN0KTtcclxuICAgICAgdGhpcy5sb2NhdGlvbiA9IHRoaXMubG9jYXRpb25TZXJ2aWNlLmdldExvY2F0aW9uKCk7XHJcbiAgICAgIHRoaXMubWFwRW5hYmxlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMubG9hZGVyLmhpZGUoKTtcclxuICAgICAgdGhpcy5zbmFja0Jhci5zaW1wbGUoJ1ViaWNhY2nDs24gb2J0ZW5pZGEnKTtcclxuICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICB0aGlzLmxvYWRlci5oaWRlKCk7XHJcbiAgICAgIHRoaXMuc25hY2tCYXIuc2ltcGxlKCdObyBzZSBwdWRvIG9idGVuZXIgbGEgdWJpY2FjacOzbicpO1xyXG4gICAgfSlcclxuICB9XHJcbiAgcHJpdmF0ZSBvbk1hcFJlYWR5KG1hcE9iamVjdCk6IHZvaWQge1xyXG4gICAgdGhpcy5tYXBPYmplY3QgPSBtYXBPYmplY3Q7XHJcbiAgICB0aGlzLmxvYWRNYXJrcyhtYXBPYmplY3QpO1xyXG4gIH1cclxuICBwcml2YXRlIGxvYWRNYXJrcyhtYXBPYmplY3QpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnBsYWNlc1NlcnZpY2UucGxhY2VzRXhpc3QoKSkge1xyXG4gICAgICB0aGlzLmxvYWRlci5zaG93KHsgbWVzc2FnZTogXCJPYnRlbmllbmRvIGx1Z2FyZXMgY2VyY2Fub3NcIiB9KTtcclxuICAgICAgdGhpcy5wbGFjZXNTZXJ2aWNlLmdldFNhdmVkUGxhY2VzKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICB0aGlzLnBsYWNlcyA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xyXG4gICAgICAgIHRoaXMucHV0TWFya3MobWFwT2JqZWN0KTtcclxuICAgICAgICB0aGlzLmxvYWRlci5oaWRlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGlhbG9ncy5jb25maXJtKHtcclxuICAgICAgICB0aXRsZTogXCJJbmZvcm1hY2nDs25cIixcclxuICAgICAgICBtZXNzYWdlOiBcIlBhcmEgbWVqb3JhciBsYSBleHBlcmllbmNpYSBkZSB1c3VhcmlvIG5lY2VzaXRhbW9zIGRlc2NhcmdhciBpbmZvcm1hY2nDs24gZXh0cmEgZGUgbG9zIHNpdGlvcyBjZXJjYW5vcyBhIHR1IHViaWNhY2nDs24sIHNlIHJlY29taWVuZGEgZXN0YXIgY29uZWN0YWRvIGEgbGEgcmVkIFdpLUZpIGRlbCBob3RlbC5cIixcclxuICAgICAgICBva0J1dHRvblRleHQ6IFwiQ29uZmlybWFyIChkZXNjYXJnYXIpXCIsXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJSZWNoYXphclwiLFxyXG4gICAgICAgIG5ldXRyYWxCdXR0b25UZXh0OiBudWxsXHJcbiAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICB0aGlzLmxvYWRlci5zaG93KHsgbWVzc2FnZTogXCJPYnRlbmllbmRvIGx1Z2FyZXMgY2VyY2Fub3NcIiB9KTtcclxuICAgICAgICAgIHRoaXMucGxhY2VzU2VydmljZS5nZXRQbGFjZXModGhpcy5sb2NhdGlvbikuc3Vic2NyaWJlKChwbGFjZXNSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBsYWNlc1NlcnZpY2Uuc3RvcmVQbGFjZXMocGxhY2VzUmVzcG9uc2UpLnRoZW4oKHN1Y2Nlc3MpID0+IHtcclxuICAgICAgICAgICAgICBpZiAoc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbmFja0Jhci5zaW1wbGUoXCJMdWdhcmVzIGd1YXJkYWRvc1wiLCBcIiNBRUQ1ODFcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYWNlc1NlcnZpY2UuZ2V0U2F2ZWRQbGFjZXMoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlcyA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnB1dE1hcmtzKG1hcE9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGVyLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRlci5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICBUTlNGYW5jeUFsZXJ0LnNob3dFcnJvcihcIkVycm9yIGFsIGd1YXJkYXIgbHVnYXJlc1wiLCBcIk5vIHNlIHB1ZGllcm9uIGd1YXJkYXIgbG9zIGx1Z2FyZXMgY2VyY2Fub3MgYSB0aVwiLCBcIkVudGVuZGlkb1wiKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGVyLmhpZGUoKTtcclxuICAgICAgICAgICAgdGhpcy5zbmFja0Jhci5zaW1wbGUoJ05vIHNlIHB1ZGllcm9uIG9idGVuZXIgbG9zIGx1Z2FyZXMgY2VyY2Fub3MnKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBUTlNGYW5jeUFsZXJ0LnNob3dFcnJvcihcIk5vIGhheSBpbmZvcm1hY2nDs24gdHVyaXN0aWNhc1wiLCBcIkxhIGFwbGljYWNpw7NuIG5vIGZ1bmNpb25hcmEgZGUgbWFuZXJhIGNvbXBsZXRhXCIsIFwiRW50ZW5kaWRvXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHByaXZhdGUgcHV0TWFya3MobWFwT2JqZWN0KTogdm9pZCB7XHJcbiAgICB0aGlzLnBsYWNlcy5mb3JFYWNoKHBsYWNlID0+IHtcclxuICAgICAgbWFwT2JqZWN0Lm1hcC5hZGRNYXJrZXJzKFt7XHJcbiAgICAgICAgbGF0OiBwbGFjZS5sb2NhdGlvbltcImxhdFwiXSxcclxuICAgICAgICBsbmc6IHBsYWNlLmxvY2F0aW9uW1wibG5nXCJdLFxyXG4gICAgICAgIHRpdGxlOiBwbGFjZS5uYW1lLFxyXG4gICAgICAgIGljb25QYXRoOiB0aGlzLmdldEljb24ocGxhY2UucGxhY2VUeXBlKSxcclxuICAgICAgICBvbkNhbGxvdXRUYXA6IGZ1bmN0aW9uKCkgeyBjb25zb2xlLmxvZyhcIidOaWNlIGxvY2F0aW9uJyBtYXJrZXIgY2FsbG91dCB0YXBwZWRcIik7IH1cclxuICAgICAgfV1cclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICAgICAgcHJpdmF0ZSBnb0NlbnRlcigpIDogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tYXBPYmplY3QubWFwLnNldENlbnRlcih7XHJcbiAgICAgICAgICBsYXQ6IHRoaXMubG9jYXRpb25TZXJ2aWNlLmdldExvY2F0aW9uKCkubGF0aXR1ZGUsXHJcbiAgICAgICAgICBsbmc6IHRoaXMubG9jYXRpb25TZXJ2aWNlLmdldExvY2F0aW9uKCkubG9uZ2l0dWRlLFxyXG4gICAgICAgICAgYW5pbWF0ZWQ6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgcHJpdmF0ZSBnZXRJY29uKHR5cGUpOiBzdHJpbmcge1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgIGNhc2UgXCJwYXJrXCI6IHJldHVybiBcImFzc2V0cy9tYXAvcGFyay5wbmdcIjtcclxuICAgICAgY2FzZSBcInJlc3RhdXJhbnRcIjogcmV0dXJuIFwiYXNzZXRzL21hcC9yZXN0YXVyYW50LnBuZ1wiO1xyXG4gICAgICBjYXNlIFwibXVzZXVtXCI6IHJldHVybiBcImFzc2V0cy9tYXAvbXVzZXVtLnBuZ1wiO1xyXG4gICAgICBjYXNlIFwiYXJ0X2dhbGxlcnlcIjogcmV0dXJuIFwiYXNzZXRzL21hcC9hcnRfZ2FsbGVyeS5wbmdcIjtcclxuICAgICAgY2FzZSBcImNhZmVcIjogcmV0dXJuIFwiYXNzZXRzL21hcC9jYWZlLnBuZ1wiO1xyXG4gICAgICBjYXNlIFwiY2FzaW5vXCI6IHJldHVybiBcImFzc2V0cy9tYXAvY2FzaW5vLnBuZ1wiO1xyXG4gICAgICBjYXNlIFwiem9vXCI6IHJldHVybiBcImFzc2V0cy9tYXAvem9vLnBuZ1wiO1xyXG4gICAgICBjYXNlIFwic2hvcHBpbmdfbWFsbFwiOiByZXR1cm4gXCJhc3NldHMvbWFwL3Nob3BwaW5nLnBuZ1wiO1xyXG4gICAgICBjYXNlIFwiYmFyXCI6IHJldHVybiBcImFzc2V0cy9tYXAvYmFyLnBuZ1wiO1xyXG4gICAgICBjYXNlIFwibmlnaHRfY2x1YlwiOiByZXR1cm4gXCJhc3NldHMvbWFwL2Jhci5wbmdcIjtcclxuICAgICAgY2FzZSBcInBvaW50X29mX2ludGVyZXN0XCI6IHJldHVybiBcImFzc2V0cy9tYXAvcG9pbnRfb2ZfaW50ZXJlc3QucG5nXCI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==