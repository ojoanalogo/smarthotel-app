"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var PlacesComponent = (function () {
    function PlacesComponent(route, page) {
        this.route = route;
        this.page = page;
        this.places = new Array({ id: "parks", type: "Parques", icon: "~/assets/park.png", desc: "Para disfrutar el aire libre", img: "~/assets/park.jpg", color: "#80388E3C" }, { id: "restaurants", type: "Restaurantes", icon: "~/assets/restaurant.png", desc: "Tienes hambre? mira los restaurantes cercanos", img: "~/assets/restaurant.jpg", color: "#805D4037" }, { id: "museums", type: "Museos", icon: "~/assets/museum.png", desc: "Visita museos cercanos", img: "~/assets/museum.jpg", color: "#80F57C00" }, { id: "bars", type: "Bares", icon: "~/assets/bar.png", desc: "Bares cercanos", img: "~/assets/bar.jpg", color: "#80512DA8" }, { id: "shopping", type: "Compras", icon: "~/assets/shopping.png", desc: "Compra cosas chilas", img: "~/assets/shopping.jpg", color: "#8000796B" });
    }
    PlacesComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params["id"];
        this.place = this.getPlaceType(id);
        this.page.actionBarHidden = true;
        this.header.nativeElement.backgroundImage = this.place.img;
    };
    PlacesComponent.prototype.getPlaceType = function (id) {
        return this.places.filter(function (item) { return item.id === id; })[0];
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
        __metadata("design:paramtypes", [router_1.ActivatedRoute, page_1.Page])
    ], PlacesComponent);
    return PlacesComponent;
}());
exports.PlacesComponent = PlacesComponent;
var PlaceType = (function () {
    function PlaceType() {
    }
    return PlaceType;
}());
exports.PlaceType = PlaceType;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBsYWNlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFDekUsZ0NBQStCO0FBRy9CLDBDQUFpRDtBQVdqRDtJQVdFLHlCQUFvQixLQUFzQixFQUFVLElBQVc7UUFBM0MsVUFBSyxHQUFMLEtBQUssQ0FBaUI7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFPO1FBVHZELFdBQU0sR0FBRyxJQUFJLEtBQUssQ0FDdEIsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFDLG1CQUFtQixFQUFFLElBQUksRUFBRSw4QkFBOEIsRUFBRSxHQUFHLEVBQUUsbUJBQW1CLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxFQUM5SSxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUMseUJBQXlCLEVBQUUsSUFBSSxFQUFFLCtDQUErQyxFQUFFLEdBQUcsRUFBRSx5QkFBeUIsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLEVBQ3RMLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQyxxQkFBcUIsRUFBRSxJQUFJLEVBQUUsd0JBQXdCLEVBQUUsR0FBRyxFQUFFLHFCQUFxQixFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsRUFDN0ksRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFDLGtCQUFrQixFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxFQUMzSCxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUMsdUJBQXVCLEVBQUUsSUFBSSxFQUFFLHFCQUFxQixFQUFFLEdBQUcsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLENBRW5KLENBQUM7SUFJRCxDQUFDO0lBQ0Ysa0NBQVEsR0FBUjtRQUNFLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUM3RCxDQUFDO0lBRUQsc0NBQVksR0FBWixVQUFhLEVBQUU7UUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBZCxDQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsa0NBQVEsR0FBUixVQUFTLEtBQXNCLEVBQUUsVUFBc0IsRUFBRSxPQUFhO1FBQ3BFLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxjQUFjLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNsQyxJQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztZQUM3QyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDakIsa0ZBQWtGO2dCQUNsRixPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFRLENBQUMsRUFBRSxjQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ25GLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSix1RkFBdUY7Z0JBQ3ZGLE9BQU8sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1QyxDQUFDO1FBQ0wsQ0FBQztJQUNILENBQUM7SUExQm9CO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFTLGlCQUFVO21EQUFDO0lBVjdCLGVBQWU7UUFOM0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLEVBQUUseUJBQXlCLENBQUM7U0FDekUsQ0FBQzt5Q0FhNEIsdUJBQWMsRUFBaUIsV0FBSTtPQVhwRCxlQUFlLENBcUMzQjtJQUFELHNCQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7QUFyQ1ksMENBQWU7QUF1QzVCO0lBQUE7SUFPQSxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQztBQVBZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3JztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgVE5TRm9udEljb25TZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XHJcbmltcG9ydCB7IFNjcm9sbFZpZXcsIFNjcm9sbEV2ZW50RGF0YSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvc2Nyb2xsLXZpZXcnO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwbGFjZXMnLFxyXG4gIHRlbXBsYXRlVXJsOiAncGFnZXMvcGxhY2VzL3BsYWNlcy5odG1sJyxcclxuICBzdHlsZVVybHM6IFtcInBhZ2VzL3BsYWNlcy9wbGFjZXMtZ2xvYmFsLmNzc1wiLCBcInBhZ2VzL3BsYWNlcy9wbGFjZXMuY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUGxhY2VzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwcml2YXRlIHBsYWNlIDogUGxhY2VUeXBlO1xyXG4gIHByaXZhdGUgcGxhY2VzID0gbmV3IEFycmF5PFBsYWNlVHlwZT4oXHJcbiAgICAgIHsgaWQ6IFwicGFya3NcIiwgdHlwZTogXCJQYXJxdWVzXCIsIGljb246XCJ+L2Fzc2V0cy9wYXJrLnBuZ1wiLCBkZXNjOiBcIlBhcmEgZGlzZnJ1dGFyIGVsIGFpcmUgbGlicmVcIiwgaW1nOiBcIn4vYXNzZXRzL3BhcmsuanBnXCIsIGNvbG9yOiBcIiM4MDM4OEUzQ1wiIH0sXHJcbiAgICAgIHsgaWQ6IFwicmVzdGF1cmFudHNcIiwgdHlwZTogXCJSZXN0YXVyYW50ZXNcIiwgaWNvbjpcIn4vYXNzZXRzL3Jlc3RhdXJhbnQucG5nXCIsIGRlc2M6IFwiVGllbmVzIGhhbWJyZT8gbWlyYSBsb3MgcmVzdGF1cmFudGVzIGNlcmNhbm9zXCIsIGltZzogXCJ+L2Fzc2V0cy9yZXN0YXVyYW50LmpwZ1wiLCBjb2xvcjogXCIjODA1RDQwMzdcIiB9LFxyXG4gICAgICB7IGlkOiBcIm11c2V1bXNcIiwgdHlwZTogXCJNdXNlb3NcIiwgaWNvbjpcIn4vYXNzZXRzL211c2V1bS5wbmdcIiwgZGVzYzogXCJWaXNpdGEgbXVzZW9zIGNlcmNhbm9zXCIsIGltZzogXCJ+L2Fzc2V0cy9tdXNldW0uanBnXCIsIGNvbG9yOiBcIiM4MEY1N0MwMFwiIH0sXHJcbiAgICAgIHsgaWQ6IFwiYmFyc1wiLCB0eXBlOiBcIkJhcmVzXCIsIGljb246XCJ+L2Fzc2V0cy9iYXIucG5nXCIsIGRlc2M6IFwiQmFyZXMgY2VyY2Fub3NcIiwgaW1nOiBcIn4vYXNzZXRzL2Jhci5qcGdcIiwgY29sb3I6IFwiIzgwNTEyREE4XCIgfSxcclxuICAgICAgeyBpZDogXCJzaG9wcGluZ1wiLCB0eXBlOiBcIkNvbXByYXNcIiwgaWNvbjpcIn4vYXNzZXRzL3Nob3BwaW5nLnBuZ1wiLCBkZXNjOiBcIkNvbXByYSBjb3NhcyBjaGlsYXNcIiwgaW1nOiBcIn4vYXNzZXRzL3Nob3BwaW5nLmpwZ1wiLCBjb2xvcjogXCIjODAwMDc5NkJcIiB9XHJcblxyXG4gICk7XHJcbiAgQFZpZXdDaGlsZChcImhlYWRlclwiKSBoZWFkZXI6IEVsZW1lbnRSZWY7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZSA6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHBhZ2UgOiBQYWdlKSB7XHJcblxyXG4gICB9XHJcbiAgbmdPbkluaXQoKSA6IHZvaWQge1xyXG4gICAgY29uc3QgaWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcImlkXCJdO1xyXG4gICAgdGhpcy5wbGFjZSA9IHRoaXMuZ2V0UGxhY2VUeXBlKGlkKTtcclxuICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgdGhpcy5oZWFkZXIubmF0aXZlRWxlbWVudC5iYWNrZ3JvdW5kSW1hZ2UgPSB0aGlzLnBsYWNlLmltZztcclxuICB9XHJcblxyXG4gIGdldFBsYWNlVHlwZShpZCkgOiBQbGFjZVR5cGUge1xyXG4gICAgcmV0dXJuIHRoaXMucGxhY2VzLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgPT09IGlkKVswXTtcclxuICB9XHJcblxyXG4gIG9uU2Nyb2xsKGV2ZW50OiBTY3JvbGxFdmVudERhdGEsIHNjcm9sbFZpZXc6IFNjcm9sbFZpZXcsIHRvcFZpZXc6IFZpZXcpIHtcclxuICAgIGlmIChzY3JvbGxWaWV3LnZlcnRpY2FsT2Zmc2V0IDwgMjUwKSB7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gc2Nyb2xsVmlldy52ZXJ0aWNhbE9mZnNldCAvIDI7XHJcbiAgICAgICAgaWYgKHNjcm9sbFZpZXcuaW9zKSB7XHJcbiAgICAgICAgICAgIC8vIGlPUyBhZGp1c3QgdGhlIHBvc2l0aW9uIHdpdGggYW4gYW5pbWF0aW9uIHRvIGNyZWF0ZSBhIHNtb3RoZXIgc2Nyb2xsaW5nIGVmZmVjdC5cclxuICAgICAgICAgICAgdG9wVmlldy5hbmltYXRlKHsgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IG9mZnNldCB9IH0pLnRoZW4oKCkgPT4geyB9LCAoKSA9PiB7IH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIEFuZHJvaWQsIGFuaW1hdGlvbnMgYXJlIGplcmt5IHNvIGluc3RlYWQganVzdCBhZGp1c3QgdGhlIHBvc2l0aW9uIHdpdGhvdXQgYW5pbWF0aW9uLlxyXG4gICAgICAgICAgICB0b3BWaWV3LnRyYW5zbGF0ZVkgPSBNYXRoLmZsb29yKG9mZnNldCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBsYWNlVHlwZSB7XHJcbiAgaWQ6IHN0cmluZztcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgaWNvbjogc3RyaW5nO1xyXG4gIGRlc2M6IHN0cmluZztcclxuICBpbWc6IHN0cmluZztcclxuICBjb2xvcjogc3RyaW5nO1xyXG59XHJcbiJdfQ==