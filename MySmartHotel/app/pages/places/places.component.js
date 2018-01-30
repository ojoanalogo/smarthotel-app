"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var location_model_1 = require("../../models/location.model");
var page_1 = require("ui/page");
var places_service_1 = require("../../services/places.service");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var nativescript_angular_1 = require("nativescript-angular");
var info_modal_1 = require("../../info-modal/info-modal");
var PlacesComponent = (function () {
    function PlacesComponent(route, page, placesService, vcRef, modalService) {
        this.route = route;
        this.page = page;
        this.placesService = placesService;
        this.vcRef = vcRef;
        this.modalService = modalService;
        this.places = [];
        this.places_list = new Array({ id: "park", type: "Parques", icon: "~/assets/park.png", desc: "Para disfrutar el aire libre", img: "~/assets/park.jpg", color: "#80388E3C", barColor: "#388E3C" }, { id: "restaurant", type: "Restaurantes", icon: "~/assets/restaurant.png", desc: "Tienes hambre? mira los restaurantes cercanos", img: "~/assets/restaurant.jpg", color: "#805D4037", barColor: "#5D4037" }, { id: "museum", type: "Museos", icon: "~/assets/museum.png", desc: "Visita museos cercanos", img: "~/assets/museum.jpg", color: "#80F57C00", barColor: "#F57C00" }, { id: "bar", type: "Bares", icon: "~/assets/bar.png", desc: "Bares cercanos", img: "~/assets/bar.jpg", color: "#80512DA8", barColor: "#512DA8" }, { id: "shopping_mall", type: "Compras", icon: "~/assets/shopping_mall.png", desc: "Compra cosas chilas", img: "~/assets/shopping_mall.jpg", color: "#8000796B", barColor: "#00796B" });
    }
    PlacesComponent.prototype.ngOnInit = function () {
        this.loader = new nativescript_loading_indicator_1.LoadingIndicator();
        var id = this.route.snapshot.params["id"];
        this.place_type = this.getPlaceType(id);
        this.getPlacesByID(id);
        this.page.actionBarHidden = true;
    };
    PlacesComponent.prototype.showModal = function (place) {
        var info = place;
        var options = {
            viewContainerRef: this.vcRef,
            context: info,
            fullscreen: false,
        };
        this.modalService.showModal(info_modal_1.InfoModalComponent, options).then(function () { });
    };
    PlacesComponent.prototype.getPlacesByID = function (id) {
        var _this = this;
        this.loader.show({ message: "Cargando..." });
        var storedPlaces;
        this.placesService.placesExist().then(function (val) {
            if (val != null) {
                _this.placesService.getSavedPlaces().then(function (places) {
                    storedPlaces = JSON.parse(places);
                    _this.places = storedPlaces.filter(function (item) { return item.placeType === id; });
                    _this.loader.hide();
                });
            }
            else {
                // TODO: Añadir que no hay lugares
            }
        });
    };
    PlacesComponent.prototype.getPlaceType = function (id) {
        return this.places_list.filter(function (item) { return item.id === id; })[0];
    };
    PlacesComponent.prototype.getDistance = function (place) {
        var location = new location_model_1.Location();
        location.latitude = place.location["lat"];
        location.longitude = place.location["lng"];
        return this.placesService.getDistancePlace(location);
    };
    PlacesComponent = __decorate([
        core_1.Component({
            selector: 'places',
            templateUrl: 'pages/places/places.html',
            styleUrls: ["pages/places/places-global.css", "pages/places/places.css"]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, page_1.Page, places_service_1.PlacesService, core_1.ViewContainerRef,
            nativescript_angular_1.ModalDialogService])
    ], PlacesComponent);
    return PlacesComponent;
}());
exports.PlacesComponent = PlacesComponent;
var PlaceType = (function () {
    function PlaceType() {
    }
    return PlaceType;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBsYWNlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkY7QUFHM0YsMENBQWlEO0FBS2pELDhEQUF1RDtBQUN2RCxnQ0FBK0I7QUFDL0IsZ0VBQThEO0FBQzlELGlGQUFrRTtBQUVsRSw2REFBOEU7QUFDOUUsMERBQWlFO0FBUWpFO0lBV0UseUJBQW9CLEtBQXFCLEVBQVUsSUFBVSxFQUFVLGFBQTRCLEVBQVUsS0FBdUIsRUFDMUgsWUFBZ0M7UUFEdEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUMxSCxpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFYbEMsV0FBTSxHQUFpQixFQUFFLENBQUM7UUFFMUIsZ0JBQVcsR0FBRyxJQUFJLEtBQUssQ0FDN0IsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFLElBQUksRUFBRSw4QkFBOEIsRUFBRSxHQUFHLEVBQUUsbUJBQW1CLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEVBQ25LLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSx5QkFBeUIsRUFBRSxJQUFJLEVBQUUsK0NBQStDLEVBQUUsR0FBRyxFQUFFLHlCQUF5QixFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxFQUMzTSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUscUJBQXFCLEVBQUUsSUFBSSxFQUFFLHdCQUF3QixFQUFFLEdBQUcsRUFBRSxxQkFBcUIs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QUM7UUFDOUIsUUFBUSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBdkRVLGVBQWU7UUFOM0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLEVBQUUseUJBQXlCLENBQUM7U0FDekUsQ0FBQzt5Q0FhMkIsdUJBQWMsRUFBZ0IsV0FBSSxFQUF5Qiw4QkFBYSxFQUFpQix1QkFBZ0I7WUFDNUcseUNBQWtCO09BWi9CLGVBQWUsQ0F5RDNCO0lBQUQsc0JBQUM7Q0FBQSxBQXpERCxJQXlEQztBQXpEWSwwQ0FBZTtBQTJENUI7SUFBQTtJQVFBLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFSRCxJQVFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9jb3JlL3ZpZXcnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBUTlNGb250SWNvblNlcnZpY2UgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcclxuaW1wb3J0IHsgU2Nyb2xsVmlldywgU2Nyb2xsRXZlbnREYXRhIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9zY3JvbGwtdmlldyc7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XHJcbmltcG9ydCB7IFBsYWNlIH0gZnJvbSBcIi4uLy4uL21vZGVscy9wbGFjZS5tb2RlbFwiO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gXCIuLi8uLi9tb2RlbHMvbG9jYXRpb24ubW9kZWxcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFBsYWNlc1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvcGxhY2VzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTG9hZGluZ0luZGljYXRvciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtbG9hZGluZy1pbmRpY2F0b3JcIjtcclxuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tIFwidWkvaW1hZ2VcIjtcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dPcHRpb25zLCBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcclxuaW1wb3J0IHsgSW5mb01vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2luZm8tbW9kYWwvaW5mby1tb2RhbFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwbGFjZXMnLFxyXG4gIHRlbXBsYXRlVXJsOiAncGFnZXMvcGxhY2VzL3BsYWNlcy5odG1sJyxcclxuICBzdHlsZVVybHM6IFtcInBhZ2VzL3BsYWNlcy9wbGFjZXMtZ2xvYmFsLmNzc1wiLCBcInBhZ2VzL3BsYWNlcy9wbGFjZXMuY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUGxhY2VzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwcml2YXRlIHBsYWNlczogQXJyYXk8UGxhY2U+ID0gW107XHJcbiAgcHJpdmF0ZSBwbGFjZV90eXBlOiBQbGFjZVR5cGU7XHJcbiAgcHJpdmF0ZSBwbGFjZXNfbGlzdCA9IG5ldyBBcnJheTxQbGFjZVR5cGU+KFxyXG4gICAgeyBpZDogXCJwYXJrXCIsIHR5cGU6IFwiUGFycXVlc1wiLCBpY29uOiBcIn4vYXNzZXRzL3BhcmsucG5nXCIsIGRlc2M6IFwiUGFyYSBkaXNmcnV0YXIgZWwgYWlyZSBsaWJyZVwiLCBpbWc6IFwifi9hc3NldHMvcGFyay5qcGdcIiwgY29sb3I6IFwiIzgwMzg4RTNDXCIsIGJhckNvbG9yOiBcIiMzODhFM0NcIiB9LFxyXG4gICAgeyBpZDogXCJyZXN0YXVyYW50XCIsIHR5cGU6IFwiUmVzdGF1cmFudGVzXCIsIGljb246IFwifi9hc3NldHMvcmVzdGF1cmFudC5wbmdcIiwgZGVzYzogXCJUaWVuZXMgaGFtYnJlPyBtaXJhIGxvcyByZXN0YXVyYW50ZXMgY2VyY2Fub3NcIiwgaW1nOiBcIn4vYXNzZXRzL3Jlc3RhdXJhbnQuanBnXCIsIGNvbG9yOiBcIiM4MDVENDAzN1wiLCBiYXJDb2xvcjogXCIjNUQ0MDM3XCIgfSxcclxuICAgIHsgaWQ6IFwibXVzZXVtXCIsIHR5cGU6IFwiTXVzZW9zXCIsIGljb246IFwifi9hc3NldHMvbXVzZXVtLnBuZ1wiLCBkZXNjOiBcIlZpc2l0YSBtdXNlb3MgY2VyY2Fub3NcIiwgaW1nOiBcIn4vYXNzZXRzL211c2V1bS5qcGdcIiwgY29sb3I6IFwiIzgwRjU3QzAwXCIsIGJhckNvbG9yOiBcIiNGNTdDMDBcIiB9LFxyXG4gICAgeyBpZDogXCJiYXJcIiwgdHlwZTogXCJCYXJlc1wiLCBpY29uOiBcIn4vYXNzZXRzL2Jhci5wbmdcIiwgZGVzYzogXCJCYXJlcyBjZXJjYW5vc1wiLCBpbWc6IFwifi9hc3NldHMvYmFyLmpwZ1wiLCBjb2xvcjogXCIjODA1MTJEQThcIiwgYmFyQ29sb3I6IFwiIzUxMkRBOFwiIH0sXHJcbiAgICB7IGlkOiBcInNob3BwaW5nX21hbGxcIiwgdHlwZTogXCJDb21wcmFzXCIsIGljb246IFwifi9hc3NldHMvc2hvcHBpbmdfbWFsbC5wbmdcIiwgZGVzYzogXCJDb21wcmEgY29zYXMgY2hpbGFzXCIsIGltZzogXCJ+L2Fzc2V0cy9zaG9wcGluZ19tYWxsLmpwZ1wiLCBjb2xvcjogXCIjODAwMDc5NkJcIiwgYmFyQ29sb3I6IFwiIzAwNzk2QlwiIH1cclxuICApO1xyXG4gIHByaXZhdGUgbG9hZGVyOiBMb2FkaW5nSW5kaWNhdG9yO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcGxhY2VzU2VydmljZTogUGxhY2VzU2VydmljZSwgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbERpYWxvZ1NlcnZpY2UpIHsgfVxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5sb2FkZXIgPSBuZXcgTG9hZGluZ0luZGljYXRvcigpO1xyXG4gICAgY29uc3QgaWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcImlkXCJdO1xyXG4gICAgdGhpcy5wbGFjZV90eXBlID0gdGhpcy5nZXRQbGFjZVR5cGUoaWQpO1xyXG4gICAgdGhpcy5nZXRQbGFjZXNCeUlEKGlkKTtcclxuICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaG93TW9kYWwocGxhY2U6IFBsYWNlKSB7XHJcbiAgICBjb25zdCBpbmZvID0gcGxhY2U7XHJcbiAgICBjb25zdCBvcHRpb25zOiBNb2RhbERpYWxvZ09wdGlvbnMgPSB7XHJcbiAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWYsXHJcbiAgICAgIGNvbnRleHQ6IGluZm8sXHJcbiAgICAgIGZ1bGxzY3JlZW46IGZhbHNlLFxyXG4gICAgfTtcclxuICAgIHRoaXMubW9kYWxTZXJ2aWNlLnNob3dNb2RhbChJbmZvTW9kYWxDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4oKCkgPT4geyB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0UGxhY2VzQnlJRChpZCkge1xyXG4gICAgdGhpcy5sb2FkZXIuc2hvdyh7IG1lc3NhZ2U6IFwiQ2FyZ2FuZG8uLi5cIiB9KTtcclxuICAgIGxldCBzdG9yZWRQbGFjZXM6IEFycmF5PFBsYWNlPjtcclxuICAgIHRoaXMucGxhY2VzU2VydmljZS5wbGFjZXNFeGlzdCgpLnRoZW4odmFsID0+IHtcclxuICAgICAgaWYgKHZhbCE9bnVsbCkge1xyXG4gICAgICAgIHRoaXMucGxhY2VzU2VydmljZS5nZXRTYXZlZFBsYWNlcygpLnRoZW4oKHBsYWNlcykgPT4ge1xyXG4gICAgICAgICAgc3RvcmVkUGxhY2VzID0gSlNPTi5wYXJzZShwbGFjZXMpO1xyXG4gICAgICAgICAgdGhpcy5wbGFjZXMgPSBzdG9yZWRQbGFjZXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5wbGFjZVR5cGUgPT09IGlkKTtcclxuICAgICAgICAgIHRoaXMubG9hZGVyLmhpZGUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBUT0RPOiBBw7FhZGlyIHF1ZSBubyBoYXkgbHVnYXJlc1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgcHJpdmF0ZSBnZXRQbGFjZVR5cGUoaWQpOiBQbGFjZVR5cGUge1xyXG4gICAgcmV0dXJuIHRoaXMucGxhY2VzX2xpc3QuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCA9PT0gaWQpWzBdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXREaXN0YW5jZShwbGFjZSA6IFBsYWNlKSB7XHJcbiAgICBsZXQgbG9jYXRpb24gPSBuZXcgTG9jYXRpb24oKTtcclxuICAgIGxvY2F0aW9uLmxhdGl0dWRlID0gcGxhY2UubG9jYXRpb25bXCJsYXRcIl07XHJcbiAgICBsb2NhdGlvbi5sb25naXR1ZGUgPSBwbGFjZS5sb2NhdGlvbltcImxuZ1wiXTtcclxuICAgIHJldHVybiB0aGlzLnBsYWNlc1NlcnZpY2UuZ2V0RGlzdGFuY2VQbGFjZShsb2NhdGlvbik7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuY2xhc3MgUGxhY2VUeXBlIHtcclxuICBpZDogc3RyaW5nO1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBpY29uOiBzdHJpbmc7XHJcbiAgZGVzYzogc3RyaW5nO1xyXG4gIGltZzogc3RyaW5nO1xyXG4gIGNvbG9yOiBzdHJpbmc7XHJcbiAgYmFyQ29sb3I6IHN0cmluZztcclxufVxyXG4iXX0=