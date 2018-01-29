"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var page_1 = require("ui/page");
var color_1 = require("tns-core-modules/color");
var location_service_1 = require("../services/location.service");
var pageCommon = require("tns-core-modules/ui/page/page-common").PageBase;
var InfoModalComponent = (function () {
    function InfoModalComponent(params, page, locationServices) {
        var _this = this;
        this.params = params;
        this.page = page;
        this.locationServices = locationServices;
        this.placeInfo = params.context;
        this.page.on("unloaded", function () {
            _this.params.closeCallback();
        });
        var location = this.locationServices.getLocation();
        console.log("DISTANCIA KM:" + this.getDistanceFromLatLonInKm(location.latitude, location.longitude, this.placeInfo.location["lat"], this.placeInfo.location["lng"]));
        this.page.backgroundColor = new color_1.Color(50, 0, 0, 0);
        // if (page.ios) {
        //
        //   // iOS by default won't let us have a transparent background on a modal
        //   // Ugly workaround from: https://github.com/NativeScript/nativescript/issues/2086#issuecomment-221956483
        //   // this.page.backgroundColor = new Color(50, 0, 0, 0);
        //
        //   (<any>page)._showNativeModalView = function (parent, context, closeCallback, fullscreen) {
        //     pageCommon.prototype._showNativeModalView.call(this, parent, context, closeCallback, fullscreen);
        //     let that = this;
        //
        //     // noinspection JSUnusedGlobalSymbols
        //     this._modalParent = parent;
        //
        //     if (fullscreen) {
        //       this._ios.modalPresentationStyle = 0;
        //     } else {
        //       this._ios.modalPresentationStyle = 2;
        //       this._UIModalPresentationFormSheet = true;
        //     }
        //
        //     pageCommon.prototype._raiseShowingModallyEvent.call(this);
        //
        //     this._ios.providesPresentationContextTransitionStyle = true;
        //     this._ios.definesPresentationContext = true;
        //     this._ios.modalPresentationStyle = UIModalPresentationStyle.OverFullScreen;
        //     this._ios.modalTransitionStyle = UIModalTransitionStyle.CrossDissolve;
        //     this._ios.view.backgroundColor = UIColor.clearColor;
        //
        //     parent.ios.presentViewControllerAnimatedCompletion(this._ios, utils.ios.MajorVersion >= 9, function () {
        //       that._ios.modalPresentationStyle = UIModalPresentationStyle.CurrentContext;
        //       that._raiseShownModallyEvent(parent, context, closeCallback);
        //     });
        //   };
        // }
    }
    InfoModalComponent.prototype.getDistanceFromLatLonInKm = function (lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = this.deg2rad(lat2 - lat1); // deg2rad below
        var dLon = this.deg2rad(lon2 - lon1);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c; // Distance in km
        return d;
    };
    InfoModalComponent.prototype.deg2rad = function (deg) {
        return deg * (Math.PI / 180);
    };
    InfoModalComponent.prototype.close = function () {
        this.params.closeCallback();
    };
    InfoModalComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "./info-modal.html",
            styleUrls: [
                "./info-modal-common.css",
                "./info-modal.css"
            ]
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams,
            page_1.Page, location_service_1.LocationService])
    ], InfoModalComponent);
    return InfoModalComponent;
}());
exports.InfoModalComponent = InfoModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby1tb2RhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluZm8tbW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsa0VBQXNFO0FBQ3RFLGdDQUErQjtBQUMvQixnREFBK0M7QUFLL0MsaUVBQStEO0FBRS9ELElBQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLFFBQVEsQ0FBQztBQVU1RTtJQUVFLDRCQUFvQixNQUF5QixFQUN6QixJQUFVLEVBQVUsZ0JBQWtDO1FBRDFFLGlCQTRDQztRQTVDbUIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFDekIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDeEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRTtZQUN2QixLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxRQUFRLEdBQWMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzlELE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUMzRSxRQUFRLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLGFBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNuRCxrQkFBa0I7UUFDbEIsRUFBRTtRQUNGLDRFQUE0RTtRQUM1RSw2R0FBNkc7UUFDN0csMkRBQTJEO1FBQzNELEVBQUU7UUFDRiwrRkFBK0Y7UUFDL0Ysd0dBQXdHO1FBQ3hHLHVCQUF1QjtRQUN2QixFQUFFO1FBQ0YsNENBQTRDO1FBQzVDLGtDQUFrQztRQUNsQyxFQUFFO1FBQ0Ysd0JBQXdCO1FBQ3hCLDhDQUE4QztRQUM5QyxlQUFlO1FBQ2YsOENBQThDO1FBQzlDLG1EQUFtRDtRQUNuRCxRQUFRO1FBQ1IsRUFBRTtRQUNGLGlFQUFpRTtRQUNqRSxFQUFFO1FBQ0YsbUVBQW1FO1FBQ25FLG1EQUFtRDtRQUNuRCxrRkFBa0Y7UUFDbEYsNkVBQTZFO1FBQzdFLDJEQUEyRDtRQUMzRCxFQUFFO1FBQ0YsK0dBQStHO1FBQy9HLG9GQUFvRjtRQUNwRixzRUFBc0U7UUFDdEUsVUFBVTtRQUNWLE9BQU87UUFDUCxJQUFJO0lBQ04sQ0FBQztJQUVNLHNEQUF5QixHQUFqQyxVQUFrQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJO1FBQ3BELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLDRCQUE0QjtRQUMxQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFFLGdCQUFnQjtRQUNyRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsR0FDSCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMzRCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBQyxDQUFDLENBQUMsQ0FDbEM7UUFDSCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGlCQUFpQjtRQUNoQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNPLG9DQUFPLEdBQWYsVUFBZ0IsR0FBRztRQUNqQixNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ08sa0NBQUssR0FBYjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQWxFVSxrQkFBa0I7UUFSOUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsbUJBQW1CO1lBQ2hDLFNBQVMsRUFBRTtnQkFDVCx5QkFBeUI7Z0JBQ3pCLGtCQUFrQjthQUNuQjtTQUNGLENBQUM7eUNBRzRCLGdDQUFpQjtZQUNuQixXQUFJLEVBQTZCLGtDQUFlO09BSC9ELGtCQUFrQixDQW1FOUI7SUFBRCx5QkFBQztDQUFBLEFBbkVELElBbUVDO0FBbkVZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9jb2xvclwiO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAndXRpbHMvdXRpbHMnO1xuaW1wb3J0IHsgb3BlblVybCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3V0aWxzL3V0aWxzXCI7XG5pbXBvcnQgeyBQbGFjZSB9IGZyb20gXCIuLi9tb2RlbHMvcGxhY2UubW9kZWxcIjtcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSBcIi4uL21vZGVscy9sb2NhdGlvbi5tb2RlbFwiXG5pbXBvcnQgeyBMb2NhdGlvblNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvbG9jYXRpb24uc2VydmljZVwiO1xuXG5jb25zdCBwYWdlQ29tbW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlLWNvbW1vblwiKS5QYWdlQmFzZTtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiBcIi4vaW5mby1tb2RhbC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1xuICAgIFwiLi9pbmZvLW1vZGFsLWNvbW1vbi5jc3NcIixcbiAgICBcIi4vaW5mby1tb2RhbC5jc3NcIlxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEluZm9Nb2RhbENvbXBvbmVudCB7XG4gIHBsYWNlSW5mbyA6IFBsYWNlO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMsXG4gICAgICAgICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSBsb2NhdGlvblNlcnZpY2VzIDogTG9jYXRpb25TZXJ2aWNlKSB7XG4gICAgdGhpcy5wbGFjZUluZm8gPSBwYXJhbXMuY29udGV4dDtcbiAgICB0aGlzLnBhZ2Uub24oXCJ1bmxvYWRlZFwiLCAoKSA9PiB7XG4gICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKCk7XG4gICAgfSk7XG4gICAgbGV0IGxvY2F0aW9uIDogTG9jYXRpb24gPSB0aGlzLmxvY2F0aW9uU2VydmljZXMuZ2V0TG9jYXRpb24oKTtcbiAgICBjb25zb2xlLmxvZyhcIkRJU1RBTkNJQSBLTTpcIiArIHRoaXMuZ2V0RGlzdGFuY2VGcm9tTGF0TG9uSW5LbShsb2NhdGlvbi5sYXRpdHVkZSxcbiAgICAgICBsb2NhdGlvbi5sb25naXR1ZGUsIHRoaXMucGxhY2VJbmZvLmxvY2F0aW9uW1wibGF0XCJdLCB0aGlzLnBsYWNlSW5mby5sb2NhdGlvbltcImxuZ1wiXSkpO1xuICAgIHRoaXMucGFnZS5iYWNrZ3JvdW5kQ29sb3IgPSBuZXcgQ29sb3IoNTAsIDAsIDAsIDApO1xuICAgIC8vIGlmIChwYWdlLmlvcykge1xuICAgIC8vXG4gICAgLy8gICAvLyBpT1MgYnkgZGVmYXVsdCB3b24ndCBsZXQgdXMgaGF2ZSBhIHRyYW5zcGFyZW50IGJhY2tncm91bmQgb24gYSBtb2RhbFxuICAgIC8vICAgLy8gVWdseSB3b3JrYXJvdW5kIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9OYXRpdmVTY3JpcHQvbmF0aXZlc2NyaXB0L2lzc3Vlcy8yMDg2I2lzc3VlY29tbWVudC0yMjE5NTY0ODNcbiAgICAvLyAgIC8vIHRoaXMucGFnZS5iYWNrZ3JvdW5kQ29sb3IgPSBuZXcgQ29sb3IoNTAsIDAsIDAsIDApO1xuICAgIC8vXG4gICAgLy8gICAoPGFueT5wYWdlKS5fc2hvd05hdGl2ZU1vZGFsVmlldyA9IGZ1bmN0aW9uIChwYXJlbnQsIGNvbnRleHQsIGNsb3NlQ2FsbGJhY2ssIGZ1bGxzY3JlZW4pIHtcbiAgICAvLyAgICAgcGFnZUNvbW1vbi5wcm90b3R5cGUuX3Nob3dOYXRpdmVNb2RhbFZpZXcuY2FsbCh0aGlzLCBwYXJlbnQsIGNvbnRleHQsIGNsb3NlQ2FsbGJhY2ssIGZ1bGxzY3JlZW4pO1xuICAgIC8vICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgLy9cbiAgICAvLyAgICAgLy8gbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xuICAgIC8vICAgICB0aGlzLl9tb2RhbFBhcmVudCA9IHBhcmVudDtcbiAgICAvL1xuICAgIC8vICAgICBpZiAoZnVsbHNjcmVlbikge1xuICAgIC8vICAgICAgIHRoaXMuX2lvcy5tb2RhbFByZXNlbnRhdGlvblN0eWxlID0gMDtcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICB0aGlzLl9pb3MubW9kYWxQcmVzZW50YXRpb25TdHlsZSA9IDI7XG4gICAgLy8gICAgICAgdGhpcy5fVUlNb2RhbFByZXNlbnRhdGlvbkZvcm1TaGVldCA9IHRydWU7XG4gICAgLy8gICAgIH1cbiAgICAvL1xuICAgIC8vICAgICBwYWdlQ29tbW9uLnByb3RvdHlwZS5fcmFpc2VTaG93aW5nTW9kYWxseUV2ZW50LmNhbGwodGhpcyk7XG4gICAgLy9cbiAgICAvLyAgICAgdGhpcy5faW9zLnByb3ZpZGVzUHJlc2VudGF0aW9uQ29udGV4dFRyYW5zaXRpb25TdHlsZSA9IHRydWU7XG4gICAgLy8gICAgIHRoaXMuX2lvcy5kZWZpbmVzUHJlc2VudGF0aW9uQ29udGV4dCA9IHRydWU7XG4gICAgLy8gICAgIHRoaXMuX2lvcy5tb2RhbFByZXNlbnRhdGlvblN0eWxlID0gVUlNb2RhbFByZXNlbnRhdGlvblN0eWxlLk92ZXJGdWxsU2NyZWVuO1xuICAgIC8vICAgICB0aGlzLl9pb3MubW9kYWxUcmFuc2l0aW9uU3R5bGUgPSBVSU1vZGFsVHJhbnNpdGlvblN0eWxlLkNyb3NzRGlzc29sdmU7XG4gICAgLy8gICAgIHRoaXMuX2lvcy52aWV3LmJhY2tncm91bmRDb2xvciA9IFVJQ29sb3IuY2xlYXJDb2xvcjtcbiAgICAvL1xuICAgIC8vICAgICBwYXJlbnQuaW9zLnByZXNlbnRWaWV3Q29udHJvbGxlckFuaW1hdGVkQ29tcGxldGlvbih0aGlzLl9pb3MsIHV0aWxzLmlvcy5NYWpvclZlcnNpb24gPj0gOSwgZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICAgIHRoYXQuX2lvcy5tb2RhbFByZXNlbnRhdGlvblN0eWxlID0gVUlNb2RhbFByZXNlbnRhdGlvblN0eWxlLkN1cnJlbnRDb250ZXh0O1xuICAgIC8vICAgICAgIHRoYXQuX3JhaXNlU2hvd25Nb2RhbGx5RXZlbnQocGFyZW50LCBjb250ZXh0LCBjbG9zZUNhbGxiYWNrKTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gICB9O1xuICAgIC8vIH1cbiAgfVxuXG4gcHJpdmF0ZSBnZXREaXN0YW5jZUZyb21MYXRMb25JbkttKGxhdDEsbG9uMSxsYXQyLGxvbjIpIHtcbiAgdmFyIFIgPSA2MzcxOyAvLyBSYWRpdXMgb2YgdGhlIGVhcnRoIGluIGttXG4gIHZhciBkTGF0ID0gdGhpcy5kZWcycmFkKGxhdDItbGF0MSk7ICAvLyBkZWcycmFkIGJlbG93XG4gIHZhciBkTG9uID0gdGhpcy5kZWcycmFkKGxvbjItbG9uMSk7XG4gIHZhciBhID1cbiAgICBNYXRoLnNpbihkTGF0LzIpICogTWF0aC5zaW4oZExhdC8yKSArXG4gICAgTWF0aC5jb3ModGhpcy5kZWcycmFkKGxhdDEpKSAqIE1hdGguY29zKHRoaXMuZGVnMnJhZChsYXQyKSkgKlxuICAgIE1hdGguc2luKGRMb24vMikgKiBNYXRoLnNpbihkTG9uLzIpXG4gICAgO1xuICB2YXIgYyA9IDIgKiBNYXRoLmF0YW4yKE1hdGguc3FydChhKSwgTWF0aC5zcXJ0KDEtYSkpO1xuICB2YXIgZCA9IFIgKiBjOyAvLyBEaXN0YW5jZSBpbiBrbVxuICByZXR1cm4gZDtcbn1cbnByaXZhdGUgZGVnMnJhZChkZWcpIHtcbiAgcmV0dXJuIGRlZyAqIChNYXRoLlBJLzE4MCk7XG59XG5wcml2YXRlIGNsb3NlKCkge1xuICAgIHRoaXMucGFyYW1zLmNsb3NlQ2FsbGJhY2soKTtcbiAgfVxufVxuIl19