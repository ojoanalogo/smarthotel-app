"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
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
        this.places_list = new Array({ id: "park", type: "Parques", icon: "~/assets/park.png", desc: "Para disfrutar el aire libre", img: "~/assets/park.jpg", color: "#80388E3C" }, { id: "restaurant", type: "Restaurantes", icon: "~/assets/restaurant.png", desc: "Tienes hambre? mira los restaurantes cercanos", img: "~/assets/restaurant.jpg", color: "#805D4037" }, { id: "museum", type: "Museos", icon: "~/assets/museum.png", desc: "Visita museos cercanos", img: "~/assets/museum.jpg", color: "#80F57C00" }, { id: "bar", type: "Bares", icon: "~/assets/bar.png", desc: "Bares cercanos", img: "~/assets/bar.jpg", color: "#80512DA8" }, { id: "shopping_mall", type: "Compras", icon: "~/assets/shopping.png", desc: "Compra cosas chilas", img: "~/assets/shopping.jpg", color: "#8000796B" });
    }
    PlacesComponent.prototype.ngOnInit = function () {
        this.loader = new nativescript_loading_indicator_1.LoadingIndicator();
        this.page.actionBarHidden = true;
        var id = this.route.snapshot.params["id"];
        this.place_type = this.getPlaceType(id);
        this.header.nativeElement.backgroundImage = this.place_type.img;
        this.getPlacesByID(id);
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
        if (this.placesService.placesExist()) {
            this.placesService.getSavedPlaces().then(function (places) {
                storedPlaces = JSON.parse(places);
                _this.places = storedPlaces.filter(function (item) { return item.placeType === id; });
                _this.loader.hide();
            });
        }
    };
    PlacesComponent.prototype.getPlaceType = function (id) {
        return this.places_list.filter(function (item) { return item.id === id; })[0];
    };
    PlacesComponent.prototype.onScroll = function (event, scrollView, topView) {
        if (scrollView.verticalOffset < 250) {
            var offset = scrollView.verticalOffset / 2;
            if (scrollView.ios) {
                // iOS adjust the position with an animation to create a smother scrolling effect.
                topView.animate({ translate: { x: 0, y: offset } }).then(function () { }, function () { });
            }
            else {
                // Android, animations are jerky so instead just adjust the position without animation.
                topView.translateY = Math.floor(offset);
            }
        }
    };
    __decorate([
        core_1.ViewChild("header"),
        __metadata("design:type", core_1.ElementRef)
    ], PlacesComponent.prototype, "header", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBsYWNlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkY7QUFDM0YsZ0NBQStCO0FBRy9CLDBDQUFpRDtBQUtqRCxnRUFBOEQ7QUFDOUQsaUZBQWtFO0FBRWxFLDZEQUE4RTtBQUM5RSwwREFBaUU7QUFRakU7SUFjRSx5QkFBb0IsS0FBc0IsRUFBVSxJQUFXLEVBQVUsYUFBNkIsRUFBVSxLQUF1QixFQUM3SCxZQUFnQztRQUR0QixVQUFLLEdBQUwsS0FBSyxDQUFpQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQU87UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZ0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUM3SCxpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFabEMsV0FBTSxHQUFrQixFQUFFLENBQUM7UUFFM0IsZ0JBQVcsR0FBRyxJQUFJLEtBQUssQ0FDM0IsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFDLG1CQUFtQixFQUFFLElBQUksRUFBRSw4QkFBOEIsRUFBRSxHQUFHLEVBQUUsbUJBQW1CLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxFQUM3SSxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUMseUJBQXlCLEVBQUUsSUFBSSxFQUFFLCtDQUErQyxFQUFFLEdBQUcsRUFBRSx5QkFBeUIsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLEVBQ3JMLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQyxxQkFBcUIsRUFBRSxJQUFJLEVBQUUsd0JBQXdCLEVBQUUsR0FBRyxFQUFFLHFCQUFxQixFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsRUFDNUksRUFBRSxFQUFFLEVBQUUsS0FBSyxF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QkFDakIsa0ZBQWtGO2dCQUNsRixPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFRLENBQUMsRUFBRSxjQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ25GLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSix1RkFBdUY7Z0JBQ3ZGLE9BQU8sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1QyxDQUFDO1FBQ0wsQ0FBQztJQUNILENBQUM7SUFoRG9CO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFTLGlCQUFVO21EQUFDO0lBYjdCLGVBQWU7UUFOM0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLEVBQUUseUJBQXlCLENBQUM7U0FDekUsQ0FBQzt5Q0FnQjRCLHVCQUFjLEVBQWlCLFdBQUksRUFBMEIsOEJBQWEsRUFBaUIsdUJBQWdCO1lBQy9HLHlDQUFrQjtPQWYvQixlQUFlLENBOEQzQjtJQUFELHNCQUFDO0NBQUEsQUE5REQsSUE4REM7QUE5RFksMENBQWU7QUFpRTNCO0lBQUE7SUFPRCxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBUEEsSUFPQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlldyc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFROU0ZvbnRJY29uU2VydmljZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtZm9udGljb24nO1xyXG5pbXBvcnQgeyBTY3JvbGxWaWV3LCBTY3JvbGxFdmVudERhdGEgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3Njcm9sbC12aWV3JztcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcclxuaW1wb3J0IHsgUGxhY2UgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3BsYWNlLm1vZGVsXCI7XHJcbmltcG9ydCB7IFBsYWNlc1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvcGxhY2VzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTG9hZGluZ0luZGljYXRvciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtbG9hZGluZy1pbmRpY2F0b3JcIjtcclxuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tIFwidWkvaW1hZ2VcIjtcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dPcHRpb25zLCBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcclxuaW1wb3J0IHsgSW5mb01vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2luZm8tbW9kYWwvaW5mby1tb2RhbFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwbGFjZXMnLFxyXG4gIHRlbXBsYXRlVXJsOiAncGFnZXMvcGxhY2VzL3BsYWNlcy5odG1sJyxcclxuICBzdHlsZVVybHM6IFtcInBhZ2VzL3BsYWNlcy9wbGFjZXMtZ2xvYmFsLmNzc1wiLCBcInBhZ2VzL3BsYWNlcy9wbGFjZXMuY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUGxhY2VzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwdWJsaWMgbmV3SW1hZ2U6IEltYWdlO1xyXG5cclxuICBwcml2YXRlIHBsYWNlcyA6IEFycmF5PFBsYWNlPiA9IFtdO1xyXG4gIHByaXZhdGUgcGxhY2VfdHlwZSA6IFBsYWNlVHlwZTtcclxuICBwcml2YXRlIHBsYWNlc19saXN0ID0gbmV3IEFycmF5PFBsYWNlVHlwZT4oXHJcbiAgICAgIHsgaWQ6IFwicGFya1wiLCB0eXBlOiBcIlBhcnF1ZXNcIiwgaWNvbjpcIn4vYXNzZXRzL3BhcmsucG5nXCIsIGRlc2M6IFwiUGFyYSBkaXNmcnV0YXIgZWwgYWlyZSBsaWJyZVwiLCBpbWc6IFwifi9hc3NldHMvcGFyay5qcGdcIiwgY29sb3I6IFwiIzgwMzg4RTNDXCIgfSxcclxuICAgICAgeyBpZDogXCJyZXN0YXVyYW50XCIsIHR5cGU6IFwiUmVzdGF1cmFudGVzXCIsIGljb246XCJ+L2Fzc2V0cy9yZXN0YXVyYW50LnBuZ1wiLCBkZXNjOiBcIlRpZW5lcyBoYW1icmU/IG1pcmEgbG9zIHJlc3RhdXJhbnRlcyBjZXJjYW5vc1wiLCBpbWc6IFwifi9hc3NldHMvcmVzdGF1cmFudC5qcGdcIiwgY29sb3I6IFwiIzgwNUQ0MDM3XCIgfSxcclxuICAgICAgeyBpZDogXCJtdXNldW1cIiwgdHlwZTogXCJNdXNlb3NcIiwgaWNvbjpcIn4vYXNzZXRzL211c2V1bS5wbmdcIiwgZGVzYzogXCJWaXNpdGEgbXVzZW9zIGNlcmNhbm9zXCIsIGltZzogXCJ+L2Fzc2V0cy9tdXNldW0uanBnXCIsIGNvbG9yOiBcIiM4MEY1N0MwMFwiIH0sXHJcbiAgICAgIHsgaWQ6IFwiYmFyXCIsIHR5cGU6IFwiQmFyZXNcIiwgaWNvbjpcIn4vYXNzZXRzL2Jhci5wbmdcIiwgZGVzYzogXCJCYXJlcyBjZXJjYW5vc1wiLCBpbWc6IFwifi9hc3NldHMvYmFyLmpwZ1wiLCBjb2xvcjogXCIjODA1MTJEQThcIiB9LFxyXG4gICAgICB7IGlkOiBcInNob3BwaW5nX21hbGxcIiwgdHlwZTogXCJDb21wcmFzXCIsIGljb246XCJ+L2Fzc2V0cy9zaG9wcGluZy5wbmdcIiwgZGVzYzogXCJDb21wcmEgY29zYXMgY2hpbGFzXCIsIGltZzogXCJ+L2Fzc2V0cy9zaG9wcGluZy5qcGdcIiwgY29sb3I6IFwiIzgwMDA3OTZCXCIgfVxyXG4gICk7XHJcbiAgcHJpdmF0ZSBsb2FkZXI6IExvYWRpbmdJbmRpY2F0b3I7XHJcbiAgQFZpZXdDaGlsZChcImhlYWRlclwiKSBoZWFkZXI6IEVsZW1lbnRSZWY7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZSA6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHBhZ2UgOiBQYWdlLCBwcml2YXRlIHBsYWNlc1NlcnZpY2UgOiBQbGFjZXNTZXJ2aWNlLCBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSkgeyB9XHJcbiAgIG5nT25Jbml0KCkgOiB2b2lkIHtcclxuICAgICB0aGlzLmxvYWRlciA9IG5ldyBMb2FkaW5nSW5kaWNhdG9yKCk7XHJcbiAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XHJcbiAgICAgY29uc3QgaWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcImlkXCJdO1xyXG4gICAgIHRoaXMucGxhY2VfdHlwZSA9IHRoaXMuZ2V0UGxhY2VUeXBlKGlkKTtcclxuICAgICB0aGlzLmhlYWRlci5uYXRpdmVFbGVtZW50LmJhY2tncm91bmRJbWFnZSA9IHRoaXMucGxhY2VfdHlwZS5pbWc7XHJcbiAgICAgdGhpcy5nZXRQbGFjZXNCeUlEKGlkKTtcclxuICB9XHJcblxyXG5wcml2YXRlIHNob3dNb2RhbChwbGFjZSA6IFBsYWNlKSB7XHJcbiAgY29uc3QgaW5mbyA9IHBsYWNlO1xyXG4gIGNvbnN0IG9wdGlvbnM6IE1vZGFsRGlhbG9nT3B0aW9ucyA9IHtcclxuICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWYsXHJcbiAgICBjb250ZXh0OiBpbmZvLFxyXG4gICAgZnVsbHNjcmVlbjogZmFsc2UsXHJcbiAgfTtcclxuICB0aGlzLm1vZGFsU2VydmljZS5zaG93TW9kYWwoSW5mb01vZGFsQ29tcG9uZW50LCBvcHRpb25zKS50aGVuKCgpID0+IHt9KTtcclxufVxyXG5cclxuICBwcml2YXRlIGdldFBsYWNlc0J5SUQoaWQpIHtcclxuICAgIHRoaXMubG9hZGVyLnNob3coeyBtZXNzYWdlOiBcIkNhcmdhbmRvLi4uXCIgfSk7XHJcbiAgICBsZXQgc3RvcmVkUGxhY2VzIDogQXJyYXk8UGxhY2U+O1xyXG4gICAgaWYodGhpcy5wbGFjZXNTZXJ2aWNlLnBsYWNlc0V4aXN0KCkpIHtcclxuICAgICAgdGhpcy5wbGFjZXNTZXJ2aWNlLmdldFNhdmVkUGxhY2VzKCkudGhlbigocGxhY2VzKSA9PiB7XHJcbiAgICAgICAgc3RvcmVkUGxhY2VzID0gSlNPTi5wYXJzZShwbGFjZXMpO1xyXG4gICAgICAgIHRoaXMucGxhY2VzID0gc3RvcmVkUGxhY2VzLmZpbHRlcihpdGVtPT4gaXRlbS5wbGFjZVR5cGUgPT09IGlkKTtcclxuICAgICAgdGhpcy5sb2FkZXIuaGlkZSgpO1xyXG4gIH0pO1xyXG59XHJcbn1cclxuICBwcml2YXRlIGdldFBsYWNlVHlwZShpZCkgOiBQbGFjZVR5cGUge1xyXG4gICAgcmV0dXJuIHRoaXMucGxhY2VzX2xpc3QuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCA9PT0gaWQpWzBdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblNjcm9sbChldmVudDogU2Nyb2xsRXZlbnREYXRhLCBzY3JvbGxWaWV3OiBTY3JvbGxWaWV3LCB0b3BWaWV3OiBWaWV3KSB7XHJcbiAgICBpZiAoc2Nyb2xsVmlldy52ZXJ0aWNhbE9mZnNldCA8IDI1MCkge1xyXG4gICAgICAgIGNvbnN0IG9mZnNldCA9IHNjcm9sbFZpZXcudmVydGljYWxPZmZzZXQgLyAyO1xyXG4gICAgICAgIGlmIChzY3JvbGxWaWV3Lmlvcykge1xyXG4gICAgICAgICAgICAvLyBpT1MgYWRqdXN0IHRoZSBwb3NpdGlvbiB3aXRoIGFuIGFuaW1hdGlvbiB0byBjcmVhdGUgYSBzbW90aGVyIHNjcm9sbGluZyBlZmZlY3QuXHJcbiAgICAgICAgICAgIHRvcFZpZXcuYW5pbWF0ZSh7IHRyYW5zbGF0ZTogeyB4OiAwLCB5OiBvZmZzZXQgfSB9KS50aGVuKCgpID0+IHsgfSwgKCkgPT4geyB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBBbmRyb2lkLCBhbmltYXRpb25zIGFyZSBqZXJreSBzbyBpbnN0ZWFkIGp1c3QgYWRqdXN0IHRoZSBwb3NpdGlvbiB3aXRob3V0IGFuaW1hdGlvbi5cclxuICAgICAgICAgICAgdG9wVmlldy50cmFuc2xhdGVZID0gTWF0aC5mbG9vcihvZmZzZXQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4gY2xhc3MgUGxhY2VUeXBlIHtcclxuICBpZDogc3RyaW5nO1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBpY29uOiBzdHJpbmc7XHJcbiAgZGVzYzogc3RyaW5nO1xyXG4gIGltZzogc3RyaW5nO1xyXG4gIGNvbG9yOiBzdHJpbmc7XHJcbn1cclxuIl19