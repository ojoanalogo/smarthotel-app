"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var geolocation = require("nativescript-geolocation");
var enums_1 = require("ui/enums");
var places_service_1 = require("../../services/places.service");
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
        var snackbar = new nativescript_snackbar_1.SnackBar();
        snackbar.simple('Hola');
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
            templateUrl: 'components/map/map.html',
        }),
        __metadata("design:paramtypes", [places_service_1.PlacesService])
    ], MapComponent);
    return MapComponent;
}());
exports.MapComponent = MapComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUF3RDtBQUN4RCxrQ0FBb0M7QUFDcEMsZ0VBQThEO0FBRTlELCtEQUFrRTtBQUVsRSxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQU81QztJQUdFLHNCQUFvQixhQUE2QjtRQUE3QixrQkFBYSxHQUFiLGFBQWEsQ0FBZ0I7UUFGekMsV0FBTSxHQUFrQixFQUFFLENBQUM7SUFFbUIsQ0FBQztJQUN2RCwrQkFBUSxHQUFSO1FBQ0UsMkNBQTJDO1FBQzNDLDBCQUEwQjtRQUMxQix1QkFBdUI7UUFDdkIsMkNBQTJDO1FBQzNDLG9DQUFvQztRQUNwQyxpQkFBaUI7UUFDakIsMENBQTBDO1FBQzFDLFVBQVU7UUFDVixRQUFRO1FBQ1IsS0FBSztRQUNMLElBQUksUUFBUSxHQUFHLElBQUksZ0NBQVEsRUFBRSxDQUFDO1FBQzlCLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELHdCQUF3QjtJQUN4QixpREFBaUQ7SUFDakQsbUJBQW1CO0lBQ25CLHVEQUF1RDtJQUN2RCx1Q0FBdUM7SUFDdkMsU0FBUztJQUNULElBQUk7SUFDSixpQ0FBVSxHQUFWLFVBQVcsSUFBSTtRQUNiLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUNILGdDQUFTLEdBQVQsVUFBVSxJQUFJO1FBQWQsaUJBcUJDO1FBcEJDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLGVBQWUsRUFBRSxnQkFBUSxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLFFBQVE7WUFDakgsS0FBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsY0FBYztnQkFDakgsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEtBQUs7b0JBQzFCLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDeEMsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUMxQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDOzRCQUNqQixHQUFHLEVBQUUsR0FBRzs0QkFDUixHQUFHLEVBQUUsSUFBSTs0QkFDVCxLQUFLLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQzs0QkFDcEIsUUFBUSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUM7NEJBQ3hCLFFBQVEsRUFBRSxJQUFJOzRCQUNkLFlBQVksRUFBRSxjQUFXLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLENBQUMsQ0FBQyxDQUFBLENBQUM7eUJBQ2hGLENBQUMsQ0FDSCxDQUFDO2dCQUNKLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxLQUFLO1lBQ2IsSUFBSSxRQUFRLEdBQUcsSUFBSSxnQ0FBUSxFQUFFLENBQUM7WUFDOUIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1FBQ3JELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQWpEWSxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsS0FBSztZQUNmLFdBQVcsRUFBRSx5QkFBeUI7U0FDdkMsQ0FBQzt5Q0FLb0MsOEJBQWE7T0FIdEMsWUFBWSxDQWtEeEI7SUFBRCxtQkFBQztDQUFBLEFBbERELElBa0RDO0FBbERZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgZ2VvbG9jYXRpb24gZnJvbSBcIm5hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvblwiO1xyXG5pbXBvcnQgeyBBY2N1cmFjeSB9IGZyb20gXCJ1aS9lbnVtc1wiO1xyXG5pbXBvcnQgeyBQbGFjZXNTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3BsYWNlcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFBsYWNlIH0gZnJvbSBcIi4uLy4uL21vZGVscy9wbGFjZS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBTbmFja0JhciwgU25hY2tCYXJPcHRpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1zbmFja2JhclwiO1xyXG5cclxudmFyIG1hcGJveCA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtbWFwYm94XCIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdNYXAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnY29tcG9uZW50cy9tYXAvbWFwLmh0bWwnLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1hcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHJpdmF0ZSBwbGFjZXMgOiBBcnJheTxQbGFjZT4gPSBbXTtcclxuICBwcml2YXRlIGhhc0xvY2F0aW9uRW5hYmxlZCA6IGZhbHNlO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGxhY2VzU2VydmljZSA6IFBsYWNlc1NlcnZpY2UpIHsgIH1cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vIG1hcGJveC5oYXNGaW5lTG9jYXRpb25QZXJtaXNzaW9uKCkudGhlbihcclxuICAgIC8vICAgICBmdW5jdGlvbihncmFudGVkKSB7XHJcbiAgICAvLyAgICAgICBpZighZ3JhbnRlZCkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmhhc0xvY2F0aW9uRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnJlcXVlc3RQZXJtaXNzaW9uKCk7XHJcbiAgICAvLyAgICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmhhc0xvY2F0aW9uRW5hYmxlZCA9IHRydWU7XHJcbiAgICAvLyAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gKTtcclxuICAgIGxldCBzbmFja2JhciA9IG5ldyBTbmFja0JhcigpO1xyXG4gICAgc25hY2tiYXIuc2ltcGxlKCdIb2xhJyk7XHJcbiAgfVxyXG4gIC8vIHJlcXVlc3RQZXJtaXNzaW9uKCkge1xyXG4gIC8vICAgbWFwYm94LnJlcXVlc3RGaW5lTG9jYXRpb25QZXJtaXNzaW9uKCkudGhlbihcclxuICAvLyAgICAgZnVuY3Rpb24oKSB7XHJcbiAgLy8gICAgICBjb25zb2xlLmxvZyhcIlBlcm1pc28gZGUgdWJpY2FjacOzbiBzb2xpY2l0YWRvXCIpO1xyXG4gIC8vICAgICAgdGhpcy5sb2FkTWFya3ModGhpcy5tYXBib3hPYmopO1xyXG4gIC8vICAgIH0pO1xyXG4gIC8vIH1cclxuICBvbk1hcFJlYWR5KGFyZ3MpIHtcclxuICAgIHRoaXMubG9hZE1hcmtzKGFyZ3MpO1xyXG4gIH1cclxubG9hZE1hcmtzKGFyZ3MpIHtcclxuICBnZW9sb2NhdGlvbi5nZXRDdXJyZW50TG9jYXRpb24oeyBkZXNpcmVkQWNjdXJhY3k6IEFjY3VyYWN5LmhpZ2gsIG1heGltdW1BZ2U6IDUwMDAsIHRpbWVvdXQ6IDEwMDAwIH0pLnRoZW4oKGxvY2F0aW9uKSA9PiB7XHJcbiAgICB0aGlzLnBsYWNlc1NlcnZpY2UuZ2V0UGxhY2VzKGxvY2F0aW9uLmxhdGl0dWRlLnRvU3RyaW5nKCksIGxvY2F0aW9uLmxvbmdpdHVkZS50b1N0cmluZygpKS5zdWJzY3JpYmUoKHBsYWNlc1Jlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHBsYWNlc1Jlc3BvbnNlLmZvckVhY2gocGxhY2UgPT4ge1xyXG4gICAgICAgIHZhciBsYXQgPSBwbGFjZVtcImxvY2F0aW9uXCJdW1wibGF0aXR1ZGVcIl07XHJcbiAgICAgICAgdmFyIGxvbmcgPSBwbGFjZVtcImxvY2F0aW9uXCJdW1wibG9uZ2l0dWRlXCJdO1xyXG4gICAgICAgIGFyZ3MubWFwLmFkZE1hcmtlcnMoW3tcclxuICAgICAgICAgICAgbGF0OiBsYXQsXHJcbiAgICAgICAgICAgIGxuZzogbG9uZyxcclxuICAgICAgICAgICAgdGl0bGU6IHBsYWNlW1wibmFtZVwiXSxcclxuICAgICAgICAgICAgc3VidGl0bGU6IHBsYWNlW1wiYWJvdXRcIl0sXHJcbiAgICAgICAgICAgIHNlbGVjdGVkOiB0cnVlLFxyXG4gICAgICAgICAgICBvbkNhbGxvdXRUYXA6IGZ1bmN0aW9uKCl7Y29uc29sZS5sb2coXCInTmljZSBsb2NhdGlvbicgbWFya2VyIGNhbGxvdXQgdGFwcGVkXCIpO31cclxuICAgICAgICAgIH1dXHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgIGxldCBzbmFja2JhciA9IG5ldyBTbmFja0JhcigpO1xyXG4gICAgc25hY2tiYXIuc2ltcGxlKCdObyBzZSBwdWRvIG9idGVuZXIgbGEgdWJpY2FjacOzbicpO1xyXG4gIH0pO1xyXG59XHJcbn1cclxuIl19