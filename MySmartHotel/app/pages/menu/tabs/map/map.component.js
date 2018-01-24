"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var geolocation = require("nativescript-geolocation");
var enums_1 = require("ui/enums");
var places_service_1 = require("../../../../services/places.service");
var nativescript_snackbar_1 = require("nativescript-snackbar");
var mapbox = require("nativescript-mapbox");
var MapComponent = (function () {
    function MapComponent(placesService) {
        this.placesService = placesService;
        this.places = [];
    }
    MapComponent.prototype.ngOnInit = function () {
        // mapbox.hasFineLocationPermission().then(
        //     function(granted) {
        //       if(!granted) {
        //         this.hasLocationEnabled = false;
        //         this.requestPermission();
        //       } else {
        //         this.hasLocationEnabled = true;
        //       }
        //     }
        // );
    };
    // requestPermission() {
    //   mapbox.requestFineLocationPermission().then(
    //     function() {
    //      console.log("Permiso de ubicación solicitado");
    //      this.loadMarks(this.mapboxObj);
    //    });
    // }
    MapComponent.prototype.onMapReady = function (args) {
        this.loadMarks(args);
    };
    MapComponent.prototype.loadMarks = function (args) {
        var _this = this;
        geolocation.getCurrentLocation({ desiredAccuracy: enums_1.Accuracy.high, maximumAge: 5000, timeout: 10000 }).then(function (location) {
            _this.placesService.getPlaces(location.latitude.toString(), location.longitude.toString()).subscribe(function (placesResponse) {
                placesResponse.forEach(function (place) {
                    var lat = place["location"]["latitude"];
                    var long = place["location"]["longitude"];
                    args.map.addMarkers([{
                            lat: lat,
                            lng: long,
                            title: place["name"],
                            subtitle: place["about"],
                            selected: true,
                            onCalloutTap: function () { console.log("'Nice location' marker callout tapped"); }
                        }]);
                });
            });
        }).catch(function (error) {
            var snackbar = new nativescript_snackbar_1.SnackBar();
            snackbar.simple('No se pudo obtener la ubicación');
        });
    };
    MapComponent = __decorate([
        core_1.Component({
            selector: 'Map',
            templateUrl: 'pages/menu/tabs/map/map.html',
            styleUrls: ['pages/menu/tabs/map/map.css']
        }),
        __metadata("design:paramtypes", [places_service_1.PlacesService])
    ], MapComponent);
    return MapComponent;
}());
exports.MapComponent = MapComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsc0RBQXdEO0FBQ3hELGtDQUFvQztBQUNwQyxzRUFBbUU7QUFFbkUsK0RBQWtFO0FBRWxFLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBUTVDO0lBR0Usc0JBQW9CLGFBQTZCO1FBQTdCLGtCQUFhLEdBQWIsYUFBYSxDQUFnQjtRQUZ6QyxXQUFNLEdBQWtCLEVBQUUsQ0FBQztJQUVtQixDQUFDO0lBQ3ZELCtCQUFRLEdBQVI7UUFDRSwyQ0FBMkM7UUFDM0MsMEJBQTBCO1FBQzFCLHVCQUF1QjtRQUN2QiwyQ0FBMkM7UUFDM0Msb0NBQW9DO1FBQ3BDLGlCQUFpQjtRQUNqQiwwQ0FBMEM7UUFDMUMsVUFBVTtRQUNWLFFBQVE7UUFDUixLQUFLO0lBQ1AsQ0FBQztJQUNELHdCQUF3QjtJQUN4QixpREFBaUQ7SUFDakQsbUJBQW1CO0lBQ25CLHVEQUF1RDtJQUN2RCx1Q0FBdUM7SUFDdkMsU0FBUztJQUNULElBQUk7SUFDSixpQ0FBVSxHQUFWLFVBQVcsSUFBSTtRQUNiLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUNILGdDQUFTLEdBQVQsVUFBVSxJQUFJO1FBQWQsaUJBcUJDO1FBcEJDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLGVBQWUsRUFBRSxnQkFBUSxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLFFBQVE7WUFDakgsS0FBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsY0FBYztnQkFDakgsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEtBQUs7b0JBQzFCLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDeEMsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUMxQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDOzRCQUNqQixHQUFHLEVBQUUsR0FBRzs0QkFDUixHQUFHLEVBQUUsSUFBSTs0QkFDVCxLQUFLLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQzs0QkFDcEIsUUFBUSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUM7NEJBQ3hCLFFBQVEsRUFBRSxJQUFJOzRCQUNkLFlBQVksRUFBRSxjQUFXLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLENBQUMsQ0FBQyxDQUFBLENBQUM7eUJBQ2hGLENBQUMsQ0FDSCxDQUFDO2dCQUNKLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxLQUFLO1lBQ2IsSUFBSSxRQUFRLEdBQUcsSUFBSSxnQ0FBUSxFQUFFLENBQUM7WUFDOUIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1FBQ3JELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQS9DWSxZQUFZO1FBTnhCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsS0FBSztZQUNmLFdBQVcsRUFBRSw4QkFBOEI7WUFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7U0FDM0MsQ0FBQzt5Q0FLb0MsOEJBQWE7T0FIdEMsWUFBWSxDQWdEeEI7SUFBRCxtQkFBQztDQUFBLEFBaERELElBZ0RDO0FBaERZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgZ2VvbG9jYXRpb24gZnJvbSBcIm5hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvblwiO1xyXG5pbXBvcnQgeyBBY2N1cmFjeSB9IGZyb20gXCJ1aS9lbnVtc1wiO1xyXG5pbXBvcnQgeyBQbGFjZXNTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3NlcnZpY2VzL3BsYWNlcy5zZXJ2aWNlXCJcclxuaW1wb3J0IHsgUGxhY2UgfSBmcm9tIFwiLi4vLi4vLi4vLi4vbW9kZWxzL3BsYWNlLm1vZGVsXCI7XHJcbmltcG9ydCB7IFNuYWNrQmFyLCBTbmFja0Jhck9wdGlvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXNuYWNrYmFyXCI7XHJcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgYW5pbWF0ZSwgdHJhbnNpdGlvbiB9IGZyb20gXCJAYW5ndWxhci9hbmltYXRpb25zXCI7XHJcbnZhciBtYXBib3ggPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LW1hcGJveFwiKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnTWFwJyxcclxuICB0ZW1wbGF0ZVVybDogJ3BhZ2VzL21lbnUvdGFicy9tYXAvbWFwLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydwYWdlcy9tZW51L3RhYnMvbWFwL21hcC5jc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1hcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHJpdmF0ZSBwbGFjZXMgOiBBcnJheTxQbGFjZT4gPSBbXTtcclxuICBwcml2YXRlIGhhc0xvY2F0aW9uRW5hYmxlZCA6IGZhbHNlO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGxhY2VzU2VydmljZSA6IFBsYWNlc1NlcnZpY2UpIHsgIH1cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vIG1hcGJveC5oYXNGaW5lTG9jYXRpb25QZXJtaXNzaW9uKCkudGhlbihcclxuICAgIC8vICAgICBmdW5jdGlvbihncmFudGVkKSB7XHJcbiAgICAvLyAgICAgICBpZighZ3JhbnRlZCkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmhhc0xvY2F0aW9uRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnJlcXVlc3RQZXJtaXNzaW9uKCk7XHJcbiAgICAvLyAgICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmhhc0xvY2F0aW9uRW5hYmxlZCA9IHRydWU7XHJcbiAgICAvLyAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gKTtcclxuICB9XHJcbiAgLy8gcmVxdWVzdFBlcm1pc3Npb24oKSB7XHJcbiAgLy8gICBtYXBib3gucmVxdWVzdEZpbmVMb2NhdGlvblBlcm1pc3Npb24oKS50aGVuKFxyXG4gIC8vICAgICBmdW5jdGlvbigpIHtcclxuICAvLyAgICAgIGNvbnNvbGUubG9nKFwiUGVybWlzbyBkZSB1YmljYWNpw7NuIHNvbGljaXRhZG9cIik7XHJcbiAgLy8gICAgICB0aGlzLmxvYWRNYXJrcyh0aGlzLm1hcGJveE9iaik7XHJcbiAgLy8gICAgfSk7XHJcbiAgLy8gfVxyXG4gIG9uTWFwUmVhZHkoYXJncykge1xyXG4gICAgdGhpcy5sb2FkTWFya3MoYXJncyk7XHJcbiAgfVxyXG5sb2FkTWFya3MoYXJncykge1xyXG4gIGdlb2xvY2F0aW9uLmdldEN1cnJlbnRMb2NhdGlvbih7IGRlc2lyZWRBY2N1cmFjeTogQWNjdXJhY3kuaGlnaCwgbWF4aW11bUFnZTogNTAwMCwgdGltZW91dDogMTAwMDAgfSkudGhlbigobG9jYXRpb24pID0+IHtcclxuICAgIHRoaXMucGxhY2VzU2VydmljZS5nZXRQbGFjZXMobG9jYXRpb24ubGF0aXR1ZGUudG9TdHJpbmcoKSwgbG9jYXRpb24ubG9uZ2l0dWRlLnRvU3RyaW5nKCkpLnN1YnNjcmliZSgocGxhY2VzUmVzcG9uc2UpID0+IHtcclxuICAgICAgcGxhY2VzUmVzcG9uc2UuZm9yRWFjaChwbGFjZSA9PiB7XHJcbiAgICAgICAgdmFyIGxhdCA9IHBsYWNlW1wibG9jYXRpb25cIl1bXCJsYXRpdHVkZVwiXTtcclxuICAgICAgICB2YXIgbG9uZyA9IHBsYWNlW1wibG9jYXRpb25cIl1bXCJsb25naXR1ZGVcIl07XHJcbiAgICAgICAgYXJncy5tYXAuYWRkTWFya2Vycyhbe1xyXG4gICAgICAgICAgICBsYXQ6IGxhdCxcclxuICAgICAgICAgICAgbG5nOiBsb25nLFxyXG4gICAgICAgICAgICB0aXRsZTogcGxhY2VbXCJuYW1lXCJdLFxyXG4gICAgICAgICAgICBzdWJ0aXRsZTogcGxhY2VbXCJhYm91dFwiXSxcclxuICAgICAgICAgICAgc2VsZWN0ZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIG9uQ2FsbG91dFRhcDogZnVuY3Rpb24oKXtjb25zb2xlLmxvZyhcIidOaWNlIGxvY2F0aW9uJyBtYXJrZXIgY2FsbG91dCB0YXBwZWRcIik7fVxyXG4gICAgICAgICAgfV1cclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgbGV0IHNuYWNrYmFyID0gbmV3IFNuYWNrQmFyKCk7XHJcbiAgICBzbmFja2Jhci5zaW1wbGUoJ05vIHNlIHB1ZG8gb2J0ZW5lciBsYSB1YmljYWNpw7NuJyk7XHJcbiAgfSk7XHJcbn1cclxufVxyXG4iXX0=