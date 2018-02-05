"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var backend_service_1 = require("../../../../services/backend.service");
var RoomComponent = (function () {
    function RoomComponent() {
        this.lightsState = false;
    }
    RoomComponent.prototype.toggleCheck = function () {
        this.lightsState = !this.lightsState;
    };
    RoomComponent.prototype.ngOnInit = function () {
        this.habitacion = backend_service_1.BackendService.userData.room;
    };
    RoomComponent = __decorate([
        core_1.Component({
            selector: 'Room',
            templateUrl: 'pages/menu/tabs/room/room.html',
            styleUrls: ['pages/menu/tabs/room/room.css']
        }),
        __metadata("design:paramtypes", [])
    ], RoomComponent);
    return RoomComponent;
}());
exports.RoomComponent = RoomComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyb29tLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUd6RSx3RUFBc0U7QUFPdEU7SUFHRTtRQUZRLGdCQUFXLEdBQWEsS0FBSyxDQUFDO0lBRXZCLENBQUM7SUFDVCxtQ0FBVyxHQUFsQjtRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxnQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxnQ0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDakQsQ0FBQztJQVRVLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFdBQVcsRUFBRSxnQ0FBZ0M7WUFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7U0FDN0MsQ0FBQzs7T0FFVyxhQUFhLENBVXpCO0lBQUQsb0JBQUM7Q0FBQSxBQVZELElBVUM7QUFWWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU25hY2tCYXIsIFNuYWNrQmFyT3B0aW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtc25hY2tiYXJcIjtcclxuaW1wb3J0IHsgTG9hZGluZ0luZGljYXRvciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtbG9hZGluZy1pbmRpY2F0b3JcIjtcclxuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvYmFja2VuZC5zZXJ2aWNlXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnUm9vbScsXHJcbiAgdGVtcGxhdGVVcmw6ICdwYWdlcy9tZW51L3RhYnMvcm9vbS9yb29tLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydwYWdlcy9tZW51L3RhYnMvcm9vbS9yb29tLmNzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUm9vbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHJpdmF0ZSBsaWdodHNTdGF0ZSA6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIGhhYml0YWNpb24gOiBudW1iZXI7XHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG4gIHB1YmxpYyB0b2dnbGVDaGVjaygpIHtcclxuICAgIHRoaXMubGlnaHRzU3RhdGUgPSAhdGhpcy5saWdodHNTdGF0ZTtcclxuICB9XHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmhhYml0YWNpb24gPSBCYWNrZW5kU2VydmljZS51c2VyRGF0YS5yb29tO1xyXG4gIH1cclxufVxyXG4iXX0=