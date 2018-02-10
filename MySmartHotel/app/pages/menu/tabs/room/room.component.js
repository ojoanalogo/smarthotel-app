"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var backend_service_1 = require("../../../../services/backend.service");
var RoomComponent = (function () {
    function RoomComponent(router) {
        this.router = router;
        this.lightsState = false;
    }
    RoomComponent.prototype.toggleCheck = function () {
        this.lightsState = !this.lightsState;
    };
    RoomComponent.prototype.ngOnInit = function () {
        this.room = backend_service_1.BackendService.userData.room;
    };
    RoomComponent = __decorate([
        core_1.Component({
            selector: 'Room',
            templateUrl: 'pages/menu/tabs/room/room.html',
            styleUrls: ['pages/menu/tabs/room/room.css']
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], RoomComponent);
    return RoomComponent;
}());
exports.RoomComponent = RoomComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyb29tLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSwwQ0FBeUM7QUFHekMsd0VBQXNFO0FBU3RFO0lBR0UsdUJBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRjFCLGdCQUFXLEdBQWEsS0FBSyxDQUFDO0lBRUQsQ0FBQztJQUMvQixtQ0FBVyxHQUFsQjtRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxnQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxnQ0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDM0MsQ0FBQztJQVRVLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFdBQVcsRUFBRSxnQ0FBZ0M7WUFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7U0FDN0MsQ0FBQzt5Q0FLNEIsZUFBTTtPQUh2QixhQUFhLENBVXpCO0lBQUQsb0JBQUM7Q0FBQSxBQVZELElBVUM7QUFWWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBTbmFja0JhciwgU25hY2tCYXJPcHRpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1zbmFja2JhclwiO1xyXG5pbXBvcnQgeyBMb2FkaW5nSW5kaWNhdG9yIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1sb2FkaW5nLWluZGljYXRvclwiO1xyXG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9zZXJ2aWNlcy9iYWNrZW5kLnNlcnZpY2VcIjtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdSb29tJyxcclxuICB0ZW1wbGF0ZVVybDogJ3BhZ2VzL21lbnUvdGFicy9yb29tL3Jvb20uaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ3BhZ2VzL21lbnUvdGFicy9yb29tL3Jvb20uY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBSb29tQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwcml2YXRlIGxpZ2h0c1N0YXRlIDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgcm9vbSA6IG51bWJlcjtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxyXG4gIHB1YmxpYyB0b2dnbGVDaGVjaygpIHtcclxuICAgIHRoaXMubGlnaHRzU3RhdGUgPSAhdGhpcy5saWdodHNTdGF0ZTtcclxuICB9XHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnJvb20gPSBCYWNrZW5kU2VydmljZS51c2VyRGF0YS5yb29tO1xyXG4gIH1cclxufVxyXG4iXX0=