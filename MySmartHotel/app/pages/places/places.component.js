"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var places_service_1 = require("../../services/places.service");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var nativescript_angular_1 = require("nativescript-angular");
var info_modal_1 = require("../../info-modal/info-modal");
var PlacesComponent = (function () {
    // @ViewChild("header") header: ElementRef;
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
        // this.header.nativeElement.backgroundImage = this.place_type.img;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBsYWNlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkY7QUFHM0YsMENBQWlEO0FBS2pELGdDQUErQjtBQUMvQixnRUFBOEQ7QUFDOUQsaUZBQWtFO0FBRWxFLDZEQUE4RTtBQUM5RSwwREFBaUU7QUFRakU7SUFhRSwyQ0FBMkM7SUFDM0MseUJBQW9CLEtBQXNCLEVBQVUsSUFBVyxFQUFVLGFBQTZCLEVBQVUsS0FBdUIsRUFDN0gsWUFBZ0M7UUFEdEIsVUFBSyxHQUFMLEtBQUssQ0FBaUI7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFPO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWdCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFDN0gsaUJBQVksR0FBWixZQUFZLENBQW9CO1FBWmxDLFdBQU0sR0FBa0IsRUFBRSxDQUFDO1FBRTNCLGdCQUFXLEdBQUcsSUFBSSxLQUFLLENBQzNCLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBQyxtQkFBbUIsRUFBRSxJQUFJLEVBQUUsOEJBQThCLEVBQUUsR0FBRyxFQUFFLG1CQUFtQixFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxFQUNsSyxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUMseUJBQXlCLEVBQUUsSUFBSSxFQUFFLCtDQUErQyxFQUFFLEdBQUcsRUFBRSx5QkFBeUIsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsRUFDMU0sRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDLHFCQUFxQixFQUFFLElBQUksRUFBRSx3QkFBd0IsRUFBRSxHQUFHLEVBQUUscUJBQXFC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RUFBaUIsdUJBQWdCO1lBQy9HLHlDQUFrQjtPQWYvQixlQUFlLENBa0QzQjtJQUFELHNCQUFDO0NBQUEsQUFsREQsSUFrREM7QUFsRFksMENBQWU7QUFxRDNCO0lBQUE7SUFRRCxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBUkEsSUFRQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3JztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgVE5TRm9udEljb25TZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XHJcbmltcG9ydCB7IFNjcm9sbFZpZXcsIFNjcm9sbEV2ZW50RGF0YSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvc2Nyb2xsLXZpZXcnO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xyXG5pbXBvcnQgeyBQbGFjZSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvcGxhY2UubW9kZWxcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFBsYWNlc1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvcGxhY2VzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTG9hZGluZ0luZGljYXRvciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtbG9hZGluZy1pbmRpY2F0b3JcIjtcclxuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tIFwidWkvaW1hZ2VcIjtcclxuaW1wb3J0IHsgTW9kYWxEaWFsb2dPcHRpb25zLCBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcclxuaW1wb3J0IHsgSW5mb01vZGFsQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL2luZm8tbW9kYWwvaW5mby1tb2RhbFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwbGFjZXMnLFxyXG4gIHRlbXBsYXRlVXJsOiAncGFnZXMvcGxhY2VzL3BsYWNlcy5odG1sJyxcclxuICBzdHlsZVVybHM6IFtcInBhZ2VzL3BsYWNlcy9wbGFjZXMtZ2xvYmFsLmNzc1wiLCBcInBhZ2VzL3BsYWNlcy9wbGFjZXMuY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUGxhY2VzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwdWJsaWMgbmV3SW1hZ2U6IEltYWdlO1xyXG5cclxuICBwcml2YXRlIHBsYWNlcyA6IEFycmF5PFBsYWNlPiA9IFtdO1xyXG4gIHByaXZhdGUgcGxhY2VfdHlwZSA6IFBsYWNlVHlwZTtcclxuICBwcml2YXRlIHBsYWNlc19saXN0ID0gbmV3IEFycmF5PFBsYWNlVHlwZT4oXHJcbiAgICAgIHsgaWQ6IFwicGFya1wiLCB0eXBlOiBcIlBhcnF1ZXNcIiwgaWNvbjpcIn4vYXNzZXRzL3BhcmsucG5nXCIsIGRlc2M6IFwiUGFyYSBkaXNmcnV0YXIgZWwgYWlyZSBsaWJyZVwiLCBpbWc6IFwifi9hc3NldHMvcGFyay5qcGdcIiwgY29sb3I6IFwiIzgwMzg4RTNDXCIsIGJhckNvbG9yOiBcIiMzODhFM0NcIiB9LFxyXG4gICAgICB7IGlkOiBcInJlc3RhdXJhbnRcIiwgdHlwZTogXCJSZXN0YXVyYW50ZXNcIiwgaWNvbjpcIn4vYXNzZXRzL3Jlc3RhdXJhbnQucG5nXCIsIGRlc2M6IFwiVGllbmVzIGhhbWJyZT8gbWlyYSBsb3MgcmVzdGF1cmFudGVzIGNlcmNhbm9zXCIsIGltZzogXCJ+L2Fzc2V0cy9yZXN0YXVyYW50LmpwZ1wiLCBjb2xvcjogXCIjODA1RDQwMzdcIiwgYmFyQ29sb3I6IFwiIzVENDAzN1wiIH0sXHJcbiAgICAgIHsgaWQ6IFwibXVzZXVtXCIsIHR5cGU6IFwiTXVzZW9zXCIsIGljb246XCJ+L2Fzc2V0cy9tdXNldW0ucG5nXCIsIGRlc2M6IFwiVmlzaXRhIG11c2VvcyBjZXJjYW5vc1wiLCBpbWc6IFwifi9hc3NldHMvbXVzZXVtLmpwZ1wiLCBjb2xvcjogXCIjODBGNTdDMDBcIiwgYmFyQ29sb3I6IFwiI0Y1N0MwMFwiIH0sXHJcbiAgICAgIHsgaWQ6IFwiYmFyXCIsIHR5cGU6IFwiQmFyZXNcIiwgaWNvbjpcIn4vYXNzZXRzL2Jhci5wbmdcIiwgZGVzYzogXCJCYXJlcyBjZXJjYW5vc1wiLCBpbWc6IFwifi9hc3NldHMvYmFyLmpwZ1wiLCBjb2xvcjogXCIjODA1MTJEQThcIiwgYmFyQ29sb3I6IFwiIzUxMkRBOFwiIH0sXHJcbiAgICAgIHsgaWQ6IFwic2hvcHBpbmdfbWFsbFwiLCB0eXBlOiBcIkNvbXByYXNcIiwgaWNvbjpcIn4vYXNzZXRzL3Nob3BwaW5nX21hbGwucG5nXCIsIGRlc2M6IFwiQ29tcHJhIGNvc2FzIGNoaWxhc1wiLCBpbWc6IFwifi9hc3NldHMvc2hvcHBpbmdfbWFsbC5qcGdcIiwgY29sb3I6IFwiIzgwMDA3OTZCXCIsIGJhckNvbG9yOiBcIiMwMDc5NkJcIiB9XHJcbiAgKTtcclxuICBwcml2YXRlIGxvYWRlcjogTG9hZGluZ0luZGljYXRvcjtcclxuICAvLyBAVmlld0NoaWxkKFwiaGVhZGVyXCIpIGhlYWRlcjogRWxlbWVudFJlZjtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlIDogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcGFnZSA6IFBhZ2UsIHByaXZhdGUgcGxhY2VzU2VydmljZSA6IFBsYWNlc1NlcnZpY2UsIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTW9kYWxEaWFsb2dTZXJ2aWNlKSB7IH1cclxuICAgbmdPbkluaXQoKSA6IHZvaWQge1xyXG4gICAgIHRoaXMubG9hZGVyID0gbmV3IExvYWRpbmdJbmRpY2F0b3IoKTtcclxuICAgICBjb25zdCBpZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zW1wiaWRcIl07XHJcbiAgICAgdGhpcy5wbGFjZV90eXBlID0gdGhpcy5nZXRQbGFjZVR5cGUoaWQpO1xyXG4gICAgIC8vIHRoaXMuaGVhZGVyLm5hdGl2ZUVsZW1lbnQuYmFja2dyb3VuZEltYWdlID0gdGhpcy5wbGFjZV90eXBlLmltZztcclxuICAgICB0aGlzLmdldFBsYWNlc0J5SUQoaWQpO1xyXG4gICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gIH1cclxuXHJcbnByaXZhdGUgc2hvd01vZGFsKHBsYWNlIDogUGxhY2UpIHtcclxuICBjb25zdCBpbmZvID0gcGxhY2U7XHJcbiAgY29uc3Qgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xyXG4gICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZixcclxuICAgIGNvbnRleHQ6IGluZm8sXHJcbiAgICBmdWxsc2NyZWVuOiBmYWxzZSxcclxuICB9O1xyXG4gIHRoaXMubW9kYWxTZXJ2aWNlLnNob3dNb2RhbChJbmZvTW9kYWxDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4oKCkgPT4ge30pO1xyXG59XHJcblxyXG4gIHByaXZhdGUgZ2V0UGxhY2VzQnlJRChpZCkge1xyXG4gICAgdGhpcy5sb2FkZXIuc2hvdyh7IG1lc3NhZ2U6IFwiQ2FyZ2FuZG8uLi5cIiB9KTtcclxuICAgIGxldCBzdG9yZWRQbGFjZXMgOiBBcnJheTxQbGFjZT47XHJcbiAgICBpZih0aGlzLnBsYWNlc1NlcnZpY2UucGxhY2VzRXhpc3QoKSkge1xyXG4gICAgICB0aGlzLnBsYWNlc1NlcnZpY2UuZ2V0U2F2ZWRQbGFjZXMoKS50aGVuKChwbGFjZXMpID0+IHtcclxuICAgICAgICBzdG9yZWRQbGFjZXMgPSBKU09OLnBhcnNlKHBsYWNlcyk7XHJcbiAgICAgICAgdGhpcy5wbGFjZXMgPSBzdG9yZWRQbGFjZXMuZmlsdGVyKGl0ZW09PiBpdGVtLnBsYWNlVHlwZSA9PT0gaWQpO1xyXG4gICAgICB0aGlzLmxvYWRlci5oaWRlKCk7XHJcbiAgfSk7XHJcbn1cclxufVxyXG4gIHByaXZhdGUgZ2V0UGxhY2VUeXBlKGlkKSA6IFBsYWNlVHlwZSB7XHJcbiAgICByZXR1cm4gdGhpcy5wbGFjZXNfbGlzdC5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkID09PSBpZClbMF07XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbiBjbGFzcyBQbGFjZVR5cGUge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIGljb246IHN0cmluZztcclxuICBkZXNjOiBzdHJpbmc7XHJcbiAgaW1nOiBzdHJpbmc7XHJcbiAgY29sb3I6IHN0cmluZztcclxuICBiYXJDb2xvcjogc3RyaW5nO1xyXG59XHJcbiJdfQ==