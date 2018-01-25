"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var places_service_1 = require("../../../../services/places.service");
var location_service_1 = require("../../../../services/location.service");
var mapbox = require("nativescript-mapbox");
var MapComponent = (function () {
    function MapComponent(placesService, locationService) {
        this.placesService = placesService;
        this.locationService = locationService;
        this.places = [];
        this.mapEnabled = false;
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.locationService.locationSetChange.subscribe(function () {
            _this.location = _this.locationService.getLocation();
            _this.mapEnabled = true;
        });
    };
    MapComponent.prototype.onMapReady = function (args) {
        this.loadMarks(args);
    };
    MapComponent.prototype.loadMarks = function (args) {
        this.placesService.getPlaces(this.location.latitude.toString(), this.location.longitude.toString()).subscribe(function (placesResponse) {
            placesResponse.forEach(function (place) {
                var lat = place["location"]["latitude"];
                var long = place["location"]["longitude"];
                args.map.addMarkers([{
                        lat: lat,
                        lng: long,
                        title: place["name"],
                        subtitle: place["about"],
                        onCalloutTap: function () { console.log("'Nice location' marker callout tapped"); }
                    }]);
            });
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFHbEQsc0VBQW1FO0FBQ25FLDBFQUF1RTtBQUt2RSxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQVE1QztJQUlFLHNCQUFvQixhQUE2QixFQUFVLGVBQWlDO1FBQXhFLGtCQUFhLEdBQWIsYUFBYSxDQUFnQjtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFrQjtRQUhwRixXQUFNLEdBQWtCLEVBQUUsQ0FBQztRQUVuQyxlQUFVLEdBQWEsS0FBSyxDQUFDO0lBQ29FLENBQUM7SUFDbEcsK0JBQVEsR0FBUjtRQUFBLGlCQUtDO1FBSkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUM7WUFDL0MsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25ELEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELGlDQUFVLEdBQVYsVUFBVyxJQUFJO1FBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBQ0gsZ0NBQVMsR0FBVCxVQUFVLElBQUk7UUFDVixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLGNBQWM7WUFDM0gsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEtBQUs7Z0JBQzFCLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDeEMsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUMxQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO3dCQUNqQixHQUFHLEVBQUUsR0FBRzt3QkFDUixHQUFHLEVBQUUsSUFBSTt3QkFDVCxLQUFLLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQzt3QkFDcEIsUUFBUSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUM7d0JBQ3hCLFlBQVksRUFBRSxjQUFXLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLENBQUMsQ0FBQyxDQUFBLENBQUM7cUJBQ2hGLENBQUMsQ0FDSCxDQUFDO1lBQ0osQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUE3QlksWUFBWTtRQU54QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLEtBQUs7WUFDZixXQUFXLEVBQUUsOEJBQThCO1lBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO1NBQzNDLENBQUM7eUNBTW9DLDhCQUFhLEVBQTRCLGtDQUFlO09BSmpGLFlBQVksQ0E4QnhCO0lBQUQsbUJBQUM7Q0FBQSxBQTlCRCxJQThCQztBQTlCWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIGdlb2xvY2F0aW9uIGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjtcclxuaW1wb3J0IHsgQWNjdXJhY3kgfSBmcm9tIFwidWkvZW51bXNcIjtcclxuaW1wb3J0IHsgUGxhY2VzU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9zZXJ2aWNlcy9wbGFjZXMuc2VydmljZVwiXHJcbmltcG9ydCB7IExvY2F0aW9uU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9zZXJ2aWNlcy9sb2NhdGlvbi5zZXJ2aWNlXCJcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tIFwiLi4vLi4vLi4vLi4vbW9kZWxzL2xvY2F0aW9uLm1vZGVsXCI7XHJcbmltcG9ydCB7IFBsYWNlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL21vZGVscy9wbGFjZS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBTbmFja0JhciwgU25hY2tCYXJPcHRpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1zbmFja2JhclwiO1xyXG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIGFuaW1hdGUsIHRyYW5zaXRpb24gfSBmcm9tIFwiQGFuZ3VsYXIvYW5pbWF0aW9uc1wiO1xyXG52YXIgbWFwYm94ID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1tYXBib3hcIik7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ01hcCcsXHJcbiAgdGVtcGxhdGVVcmw6ICdwYWdlcy9tZW51L3RhYnMvbWFwL21hcC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsncGFnZXMvbWVudS90YWJzL21hcC9tYXAuY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNYXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHByaXZhdGUgcGxhY2VzIDogQXJyYXk8UGxhY2U+ID0gW107XHJcbiAgcHJpdmF0ZSBsb2NhdGlvbiA6IExvY2F0aW9uO1xyXG4gIG1hcEVuYWJsZWQgOiBib29sZWFuID0gZmFsc2U7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwbGFjZXNTZXJ2aWNlIDogUGxhY2VzU2VydmljZSwgcHJpdmF0ZSBsb2NhdGlvblNlcnZpY2UgOiBMb2NhdGlvblNlcnZpY2UpIHsgIH1cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMubG9jYXRpb25TZXJ2aWNlLmxvY2F0aW9uU2V0Q2hhbmdlLnN1YnNjcmliZSgoKT0+e1xyXG4gICAgICB0aGlzLmxvY2F0aW9uID0gdGhpcy5sb2NhdGlvblNlcnZpY2UuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgdGhpcy5tYXBFbmFibGVkID0gdHJ1ZTtcclxuICAgIH0pO1xyXG4gIH1cclxuICBvbk1hcFJlYWR5KGFyZ3MpIHtcclxuICAgIHRoaXMubG9hZE1hcmtzKGFyZ3MpO1xyXG4gIH1cclxubG9hZE1hcmtzKGFyZ3MpIHtcclxuICAgIHRoaXMucGxhY2VzU2VydmljZS5nZXRQbGFjZXModGhpcy5sb2NhdGlvbi5sYXRpdHVkZS50b1N0cmluZygpLCB0aGlzLmxvY2F0aW9uLmxvbmdpdHVkZS50b1N0cmluZygpKS5zdWJzY3JpYmUoKHBsYWNlc1Jlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHBsYWNlc1Jlc3BvbnNlLmZvckVhY2gocGxhY2UgPT4ge1xyXG4gICAgICAgIHZhciBsYXQgPSBwbGFjZVtcImxvY2F0aW9uXCJdW1wibGF0aXR1ZGVcIl07XHJcbiAgICAgICAgdmFyIGxvbmcgPSBwbGFjZVtcImxvY2F0aW9uXCJdW1wibG9uZ2l0dWRlXCJdO1xyXG4gICAgICAgIGFyZ3MubWFwLmFkZE1hcmtlcnMoW3tcclxuICAgICAgICAgICAgbGF0OiBsYXQsXHJcbiAgICAgICAgICAgIGxuZzogbG9uZyxcclxuICAgICAgICAgICAgdGl0bGU6IHBsYWNlW1wibmFtZVwiXSxcclxuICAgICAgICAgICAgc3VidGl0bGU6IHBsYWNlW1wiYWJvdXRcIl0sXHJcbiAgICAgICAgICAgIG9uQ2FsbG91dFRhcDogZnVuY3Rpb24oKXtjb25zb2xlLmxvZyhcIidOaWNlIGxvY2F0aW9uJyBtYXJrZXIgY2FsbG91dCB0YXBwZWRcIik7fVxyXG4gICAgICAgICAgfV1cclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbn1cclxuIl19