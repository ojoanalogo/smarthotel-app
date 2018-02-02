"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var places_service_1 = require("../../../../services/places.service");
var location_service_1 = require("../../../../services/location.service");
var location_model_1 = require("../../../../models/location.model");
var nativescript_snackbar_1 = require("nativescript-snackbar");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var nativescript_fancyalert_1 = require("nativescript-fancyalert");
var nativescript_angular_1 = require("nativescript-angular");
var dialogs = require("ui/dialogs");
var nativescript_mapbox_1 = require("nativescript-mapbox");
var connectivity = require("tns-core-modules/connectivity");
var info_modal_1 = require("../../../../info-modal/info-modal");
var MapComponent = (function () {
    function MapComponent(placesService, locationService, vcRef, modalService) {
        this.placesService = placesService;
        this.locationService = locationService;
        this.vcRef = vcRef;
        this.modalService = modalService;
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
            _this.location = _this.locationService.getLocation();
            _this.mapEnabled = true;
            _this.loader.hide();
            _this.snackBar.simple('Ubicación obtenida');
            _this.onMapReady(_this.mapObject);
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
        this.placesService.placesExist().then(function (val) {
            if (val != null) {
                _this.loader.show({ message: "Obteniendo lugares cercanos" });
                _this.placesService.getSavedPlaces().then(function (response) {
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
        });
    };
    MapComponent.prototype.onCalloutTap = function (place) {
        this.showModal(place);
    };
    MapComponent.prototype.putMarks = function (mapObject) {
        var _this = this;
        this.places.forEach(function (place) {
            var placeLocation = new location_model_1.Location();
            placeLocation.latitude = place.location["lat"];
            placeLocation.longitude = place.location["lng"];
            var placeType = _this.getType(place.placeType);
            mapObject.map.addMarkers([{
                    lat: placeLocation.latitude,
                    lng: placeLocation.longitude,
                    title: place.name,
                    subtitle: placeType + "\n📍 Distancia: " + _this.placesService.getDistancePlace(placeLocation) + "\nPresiona para ver más opciones",
                    iconPath: _this.getIcon(place.placeType),
                    onCalloutTap: function () {
                        _this.showModal(place);
                    }
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
    MapComponent.prototype.showModal = function (place) {
        var info = place;
        var options = {
            viewContainerRef: this.vcRef,
            context: info,
            fullscreen: false,
        };
        this.modalService.showModal(info_modal_1.InfoModalComponent, options).then(function () { });
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
        }
    };
    MapComponent.prototype.getType = function (type) {
        switch (type) {
            case "park": return "Parque";
            case "restaurant": return "Restaurante";
            case "museum": return "Museo";
            case "art_gallery": return "Galería de arte";
            case "cafe": return "Café";
            case "casino": return "Casino";
            case "zoo": return "Zoo";
            case "shopping_mall": return "Compras";
            case "bar": return "Bar";
            case "night_club": return "Club nocturno";
        }
    };
    MapComponent = __decorate([
        core_1.Component({
            selector: 'Map',
            templateUrl: 'pages/menu/tabs/map/map.html',
            styleUrls: ['pages/menu/tabs/map/map.css']
        }),
        __metadata("design:paramtypes", [places_service_1.PlacesService, location_service_1.LocationService, core_1.ViewContainerRef,
            nativescript_angular_1.ModalDialogService])
    ], MapComponent);
    return MapComponent;
}());
exports.MapComponent = MapComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0U7QUFHcEUsc0VBQW1FO0FBQ25FLDBFQUF1RTtBQUN2RSxvRUFBNkQ7QUFFN0QsK0RBQWlEO0FBQ2pELGlGQUFrRTtBQUVsRSxtRUFBd0Q7QUFDeEQsNkRBQThFO0FBQzlFLG9DQUFzQztBQUN0QywyREFBd0g7QUFDeEgsNERBQThEO0FBQzlELGdFQUF1RTtBQVF2RTtJQVFFLHNCQUFvQixhQUE0QixFQUFVLGVBQWdDLEVBQVUsS0FBdUIsRUFDakgsWUFBZ0M7UUFEdEIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUNqSCxpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFSbEMsV0FBTSxHQUFpQixFQUFFLENBQUM7UUFJMUIsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUtsQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksNEJBQU0sRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFDRCwrQkFBUSxHQUFSO1FBQUEsaUJBU0M7UUFSQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksaURBQWdCLEVBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksZ0NBQVEsQ0FBQztRQUM3QixJQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQztZQUMvQyxLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkQsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN6QixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFD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IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIGdlb2xvY2F0aW9uIGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjtcclxuaW1wb3J0IHsgQWNjdXJhY3kgfSBmcm9tIFwidWkvZW51bXNcIjtcclxuaW1wb3J0IHsgUGxhY2VzU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9zZXJ2aWNlcy9wbGFjZXMuc2VydmljZVwiXHJcbmltcG9ydCB7IExvY2F0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9zZXJ2aWNlcy9sb2NhdGlvbi5zZXJ2aWNlXCJcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tIFwiLi4vLi4vLi4vLi4vbW9kZWxzL2xvY2F0aW9uLm1vZGVsXCI7XHJcbmltcG9ydCB7IFBsYWNlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL21vZGVscy9wbGFjZS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBTbmFja0JhciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtc25hY2tiYXJcIjtcclxuaW1wb3J0IHsgTG9hZGluZ0luZGljYXRvciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtbG9hZGluZy1pbmRpY2F0b3JcIjtcclxuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCBhbmltYXRlLCB0cmFuc2l0aW9uIH0gZnJvbSBcIkBhbmd1bGFyL2FuaW1hdGlvbnNcIjtcclxuaW1wb3J0IHsgVE5TRmFuY3lBbGVydCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1mYW5jeWFsZXJ0JztcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dPcHRpb25zLCBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5pbXBvcnQgeyBNYXBib3gsIE1hcFN0eWxlLCBPZmZsaW5lUmVnaW9uLCBMYXRMbmcsIFZpZXdwb3J0LCBEb3dubG9hZFByb2dyZXNzLCBNYXBib3hNYXJrZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LW1hcGJveFwiO1xyXG5pbXBvcnQgKiBhcyBjb25uZWN0aXZpdHkgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvY29ubmVjdGl2aXR5XCI7XHJcbmltcG9ydCB7IEluZm9Nb2RhbENvbXBvbmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9pbmZvLW1vZGFsL2luZm8tbW9kYWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnTWFwJyxcclxuICB0ZW1wbGF0ZVVybDogJ3BhZ2VzL21lbnUvdGFicy9tYXAvbWFwLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydwYWdlcy9tZW51L3RhYnMvbWFwL21hcC5jc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1hcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHJpdmF0ZSBwbGFjZXM6IEFycmF5PFBsYWNlPiA9IFtdO1xyXG4gIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uO1xyXG4gIHByaXZhdGUgbG9hZGVyOiBMb2FkaW5nSW5kaWNhdG9yO1xyXG4gIHByaXZhdGUgc25hY2tCYXI6IFNuYWNrQmFyO1xyXG4gIHByaXZhdGUgbWFwRW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgbWFwT2JqZWN0O1xyXG4gIHByaXZhdGUgbWFwYm94OiBNYXBib3g7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwbGFjZXNTZXJ2aWNlOiBQbGFjZXNTZXJ2aWNlLCBwcml2YXRlIGxvY2F0aW9uU2VydmljZTogTG9jYXRpb25TZXJ2aWNlLCBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSkge1xyXG4gICAgdGhpcy5tYXBib3ggPSBuZXcgTWFwYm94KCk7XHJcbiAgfVxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2FkZXIgPSBuZXcgTG9hZGluZ0luZGljYXRvcigpO1xyXG4gICAgdGhpcy5zbmFja0JhciA9IG5ldyBTbmFja0JhcjtcclxuICAgIHRoaXMubG9jYXRpb25TZXJ2aWNlLmxvY2F0aW9uU2V0Q2hhbmdlLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubG9jYXRpb24gPSB0aGlzLmxvY2F0aW9uU2VydmljZS5nZXRMb2NhdGlvbigpO1xyXG4gICAgICBpZiAoIXRoaXMuaGFzQ29ubmVjdGl2aXR5KCkpIHtcclxuICAgICAgICB0aGlzLm1hcEVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgcHJpdmF0ZSBoYXNDb25uZWN0aXZpdHkoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY29ubmVjdGl2aXR5LmdldENvbm5lY3Rpb25UeXBlKCkgPT0gY29ubmVjdGl2aXR5LmNvbm5lY3Rpb25UeXBlLm5vbmU7XHJcbiAgfVxyXG4gIHByaXZhdGUgc2hvd01hcEludGVybmV0KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmhhc0Nvbm5lY3Rpdml0eSgpKSB7XHJcbiAgICAgIHRoaXMub25NYXBSZWFkeSh0aGlzLm1hcE9iamVjdCk7XHJcbiAgICAgIHRoaXMubWFwRW5hYmxlZCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNuYWNrQmFyLnNpbXBsZShcIk5vIHRpZW5lcyBjb25leGnDs24gYSBpbnRlcm5ldCBwYXJhIHZlciBlbCBtYXBhXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuICBwcml2YXRlIGFsbG93TG9jYXRpb24oKTogdm9pZCB7XHJcbiAgICB0aGlzLmxvYWRlci5zaG93KHsgbWVzc2FnZTogXCJPYnRlbmllbmRvIHViaWNhY2nDs25cIiB9KTtcclxuICAgIHRoaXMubG9jYXRpb25TZXJ2aWNlLnNldHVwTG9jYXRpb24oKS5zdWJzY3JpYmUoKGxvY2F0aW9uKSA9PiB7XHJcbiAgICAgIHRoaXMubG9jYXRpb24gPSB0aGlzLmxvY2F0aW9uU2VydmljZS5nZXRMb2NhdGlvbigpO1xyXG4gICAgICB0aGlzLm1hcEVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLmxvYWRlci5oaWRlKCk7XHJcbiAgICAgIHRoaXMuc25hY2tCYXIuc2ltcGxlKCdVYmljYWNpw7NuIG9idGVuaWRhJyk7XHJcbiAgICAgIHRoaXMub25NYXBSZWFkeSh0aGlzLm1hcE9iamVjdCk7XHJcbiAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgdGhpcy5sb2FkZXIuaGlkZSgpO1xyXG4gICAgICB0aGlzLnNuYWNrQmFyLnNpbXBsZSgnTm8gc2UgcHVkbyBvYnRlbmVyIGxhIHViaWNhY2nDs24nKTtcclxuICAgIH0pXHJcbiAgfVxyXG4gIHByaXZhdGUgb25NYXBSZWFkeShtYXBPYmplY3QpOiB2b2lkIHtcclxuICAgIHRoaXMubWFwT2JqZWN0ID0gbWFwT2JqZWN0O1xyXG4gICAgdGhpcy5sb2FkTWFya3MobWFwT2JqZWN0KTtcclxuICB9XHJcbiAgcHJpdmF0ZSBsb2FkTWFya3MobWFwT2JqZWN0KTogdm9pZCB7XHJcbiAgICB0aGlzLnBsYWNlc1NlcnZpY2UucGxhY2VzRXhpc3QoKS50aGVuKHZhbCA9PiB7XHJcbiAgICAgIGlmICh2YWwgIT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMubG9hZGVyLnNob3coeyBtZXNzYWdlOiBcIk9idGVuaWVuZG8gbHVnYXJlcyBjZXJjYW5vc1wiIH0pO1xyXG4gICAgICAgIHRoaXMucGxhY2VzU2VydmljZS5nZXRTYXZlZFBsYWNlcygpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnBsYWNlcyA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xyXG4gICAgICAgICAgdGhpcy5wdXRNYXJrcyhtYXBPYmplY3QpO1xyXG4gICAgICAgICAgdGhpcy5sb2FkZXIuaGlkZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRpYWxvZ3MuY29uZmlybSh7XHJcbiAgICAgICAgICB0aXRsZTogXCJJbmZvcm1hY2nDs25cIixcclxuICAgICAgICAgIG1lc3NhZ2U6IFwiUGFyYSBtZWpvcmFyIGxhIGV4cGVyaWVuY2lhIGRlIHVzdWFyaW8gbmVjZXNpdGFtb3MgZGVzY2FyZ2FyIGluZm9ybWFjacOzbiBleHRyYSBkZSBsb3Mgc2l0aW9zIGNlcmNhbm9zIGEgdHUgdWJpY2FjacOzbiwgc2UgcmVjb21pZW5kYSBlc3RhciBjb25lY3RhZG8gYSBsYSByZWQgV2ktRmkgZGVsIGhvdGVsLlwiLFxyXG4gICAgICAgICAgb2tCdXR0b25UZXh0OiBcIkNvbmZpcm1hciAoZGVzY2FyZ2FyKVwiLFxyXG4gICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJSZWNoYXphclwiLFxyXG4gICAgICAgICAgbmV1dHJhbEJ1dHRvblRleHQ6IG51bGxcclxuICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGVyLnNob3coeyBtZXNzYWdlOiBcIk9idGVuaWVuZG8gbHVnYXJlcyBjZXJjYW5vc1wiIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnBsYWNlc1NlcnZpY2UuZ2V0UGxhY2VzKHRoaXMubG9jYXRpb24pLnN1YnNjcmliZSgocGxhY2VzUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLnBsYWNlc1NlcnZpY2Uuc3RvcmVQbGFjZXMocGxhY2VzUmVzcG9uc2UpLnRoZW4oKHN1Y2Nlc3MpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc25hY2tCYXIuc2ltcGxlKFwiTHVnYXJlcyBndWFyZGFkb3NcIiwgXCIjQUVENTgxXCIpO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlc1NlcnZpY2UuZ2V0U2F2ZWRQbGFjZXMoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhY2VzID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXRNYXJrcyhtYXBPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGVyLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmxvYWRlci5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgIFROU0ZhbmN5QWxlcnQuc2hvd0Vycm9yKFwiRXJyb3IgYWwgZ3VhcmRhciBsdWdhcmVzXCIsIFwiTm8gc2UgcHVkaWVyb24gZ3VhcmRhciBsb3MgbHVnYXJlcyBjZXJjYW5vcyBhIHRpXCIsIFwiRW50ZW5kaWRvXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmxvYWRlci5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgdGhpcy5zbmFja0Jhci5zaW1wbGUoJ05vIHNlIHB1ZGllcm9uIG9idGVuZXIgbG9zIGx1Z2FyZXMgY2VyY2Fub3MnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBUTlNGYW5jeUFsZXJ0LnNob3dFcnJvcihcIk5vIGhheSBpbmZvcm1hY2nDs24gdHVyaXN0aWNhc1wiLCBcIkxhIGFwbGljYWNpw7NuIG5vIGZ1bmNpb25hcmEgZGUgbWFuZXJhIGNvbXBsZXRhXCIsIFwiRW50ZW5kaWRvXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgcHJpdmF0ZSBvbkNhbGxvdXRUYXAocGxhY2UpIHtcclxuICAgIHRoaXMuc2hvd01vZGFsKHBsYWNlKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBwdXRNYXJrcyhtYXBPYmplY3QpOiB2b2lkIHtcclxuICAgIHRoaXMucGxhY2VzLmZvckVhY2gocGxhY2UgPT4ge1xyXG4gICAgICBsZXQgcGxhY2VMb2NhdGlvbiA9IG5ldyBMb2NhdGlvbigpO1xyXG4gICAgICBwbGFjZUxvY2F0aW9uLmxhdGl0dWRlID0gcGxhY2UubG9jYXRpb25bXCJsYXRcIl07XHJcbiAgICAgIHBsYWNlTG9jYXRpb24ubG9uZ2l0dWRlID0gcGxhY2UubG9jYXRpb25bXCJsbmdcIl07XHJcbiAgICAgIGxldCBwbGFjZVR5cGUgPSB0aGlzLmdldFR5cGUocGxhY2UucGxhY2VUeXBlKTtcclxuICAgICAgbWFwT2JqZWN0Lm1hcC5hZGRNYXJrZXJzKFt7XHJcbiAgICAgICAgbGF0OiBwbGFjZUxvY2F0aW9uLmxhdGl0dWRlLFxyXG4gICAgICAgIGxuZzogcGxhY2VMb2NhdGlvbi5sb25naXR1ZGUsXHJcbiAgICAgICAgdGl0bGU6IHBsYWNlLm5hbWUsXHJcbiAgICAgICAgc3VidGl0bGU6IHBsYWNlVHlwZSArIFwiXFxu7aC97bONIERpc3RhbmNpYTogXCIgKyB0aGlzLnBsYWNlc1NlcnZpY2UuZ2V0RGlzdGFuY2VQbGFjZShwbGFjZUxvY2F0aW9uKSArIFwiXFxuUHJlc2lvbmEgcGFyYSB2ZXIgbcOhcyBvcGNpb25lc1wiLFxyXG4gICAgICAgIGljb25QYXRoOiB0aGlzLmdldEljb24ocGxhY2UucGxhY2VUeXBlKSxcclxuICAgICAgICBvbkNhbGxvdXRUYXA6ICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuc2hvd01vZGFsKHBsYWNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1dXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgcHJpdmF0ZSBnb0NlbnRlcigpOiB2b2lkIHtcclxuICAgIHRoaXMubWFwT2JqZWN0Lm1hcC5zZXRDZW50ZXIoe1xyXG4gICAgICBsYXQ6IHRoaXMubG9jYXRpb25TZXJ2aWNlLmdldExvY2F0aW9uKCkubGF0aXR1ZGUsXHJcbiAgICAgIGxuZzogdGhpcy5sb2NhdGlvblNlcnZpY2UuZ2V0TG9jYXRpb24oKS5sb25naXR1ZGUsXHJcbiAgICAgIGFuaW1hdGVkOiB0cnVlXHJcbiAgICB9KVxyXG4gIH1cclxuICBwcml2YXRlIHNob3dNb2RhbChwbGFjZTogUGxhY2UpIHtcclxuICAgIGNvbnN0IGluZm8gPSBwbGFjZTtcclxuICAgIGNvbnN0IG9wdGlvbnM6IE1vZGFsRGlhbG9nT3B0aW9ucyA9IHtcclxuICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZixcclxuICAgICAgY29udGV4dDogaW5mbyxcclxuICAgICAgZnVsbHNjcmVlbjogZmFsc2UsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5tb2RhbFNlcnZpY2Uuc2hvd01vZGFsKEluZm9Nb2RhbENvbXBvbmVudCwgb3B0aW9ucykudGhlbigoKSA9PiB7IH0pO1xyXG4gIH1cclxuICBwcml2YXRlIGdldEljb24odHlwZSk6IHN0cmluZyB7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSBcInBhcmtcIjogcmV0dXJuIFwiYXNzZXRzL21hcC9wYXJrLnBuZ1wiO1xyXG4gICAgICBjYXNlIFwicmVzdGF1cmFudFwiOiByZXR1cm4gXCJhc3NldHMvbWFwL3Jlc3RhdXJhbnQucG5nXCI7XHJcbiAgICAgIGNhc2UgXCJtdXNldW1cIjogcmV0dXJuIFwiYXNzZXRzL21hcC9tdXNldW0ucG5nXCI7XHJcbiAgICAgIGNhc2UgXCJhcnRfZ2FsbGVyeVwiOiByZXR1cm4gXCJhc3NldHMvbWFwL2FydF9nYWxsZXJ5LnBuZ1wiO1xyXG4gICAgICBjYXNlIFwiY2FmZVwiOiByZXR1cm4gXCJhc3NldHMvbWFwL2NhZmUucG5nXCI7XHJcbiAgICAgIGNhc2UgXCJjYXNpbm9cIjogcmV0dXJuIFwiYXNzZXRzL21hcC9jYXNpbm8ucG5nXCI7XHJcbiAgICAgIGNhc2UgXCJ6b29cIjogcmV0dXJuIFwiYXNzZXRzL21hcC96b28ucG5nXCI7XHJcbiAgICAgIGNhc2UgXCJzaG9wcGluZ19tYWxsXCI6IHJldHVybiBcImFzc2V0cy9tYXAvc2hvcHBpbmcucG5nXCI7XHJcbiAgICAgIGNhc2UgXCJiYXJcIjogcmV0dXJuIFwiYXNzZXRzL21hcC9iYXIucG5nXCI7XHJcbiAgICAgIGNhc2UgXCJuaWdodF9jbHViXCI6IHJldHVybiBcImFzc2V0cy9tYXAvYmFyLnBuZ1wiO1xyXG4gICAgfVxyXG4gIH1cclxuICBwcml2YXRlIGdldFR5cGUodHlwZSk6IHN0cmluZyB7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSBcInBhcmtcIjogcmV0dXJuIFwiUGFycXVlXCI7XHJcbiAgICAgIGNhc2UgXCJyZXN0YXVyYW50XCI6IHJldHVybiBcIlJlc3RhdXJhbnRlXCI7XHJcbiAgICAgIGNhc2UgXCJtdXNldW1cIjogcmV0dXJuIFwiTXVzZW9cIjtcclxuICAgICAgY2FzZSBcImFydF9nYWxsZXJ5XCI6IHJldHVybiBcIkdhbGVyw61hIGRlIGFydGVcIjtcclxuICAgICAgY2FzZSBcImNhZmVcIjogcmV0dXJuIFwiQ2Fmw6lcIjtcclxuICAgICAgY2FzZSBcImNhc2lub1wiOiByZXR1cm4gXCJDYXNpbm9cIjtcclxuICAgICAgY2FzZSBcInpvb1wiOiByZXR1cm4gXCJab29cIjtcclxuICAgICAgY2FzZSBcInNob3BwaW5nX21hbGxcIjogcmV0dXJuIFwiQ29tcHJhc1wiO1xyXG4gICAgICBjYXNlIFwiYmFyXCI6IHJldHVybiBcIkJhclwiO1xyXG4gICAgICBjYXNlIFwibmlnaHRfY2x1YlwiOiByZXR1cm4gXCJDbHViIG5vY3R1cm5vXCI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==