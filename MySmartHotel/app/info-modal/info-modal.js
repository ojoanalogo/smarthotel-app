"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var page_1 = require("ui/page");
var color_1 = require("tns-core-modules/color");
var location_service_1 = require("../services/location.service");
var nativescript_directions_1 = require("nativescript-directions");
var nativescript_fancyalert_1 = require("nativescript-fancyalert");
var nativescript_snackbar_1 = require("nativescript-snackbar");
var pageCommon = require("tns-core-modules/ui/page/page-common").PageBase;
var InfoModalComponent = (function () {
    function InfoModalComponent(params, page, locationServices) {
        var _this = this;
        this.params = params;
        this.page = page;
        this.locationServices = locationServices;
        this.directions = new nativescript_directions_1.Directions();
        this.placeInfo = params.context;
        this.page.on("unloaded", function () {
            _this.params.closeCallback();
        });
        this.page.backgroundColor = new color_1.Color(50, 0, 0, 0);
        this.snackBar = new nativescript_snackbar_1.SnackBar();
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
    InfoModalComponent.prototype.openNavgps = function () {
        var _this = this;
        this.directions.available().then(function (available) {
            if (available) {
                _this.directions.navigate({
                    to: {
                        lat: _this.placeInfo.location["lat"],
                        lng: _this.placeInfo.location["lng"]
                    }
                }).then(function () {
                    _this.snackBar.simple("Abriendo mapas");
                }, function (error) {
                    _this.snackBar.simple("Error al abrir mapas");
                });
            }
            else {
                nativescript_fancyalert_1.TNSFancyAlert.showError("Google Maps", "Al parecer no tienes instalado GoogleMaps para la navegación", "Entendido");
            }
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby1tb2RhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluZm8tbW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsa0VBQXNFO0FBQ3RFLGdDQUErQjtBQUMvQixnREFBK0M7QUFLL0MsaUVBQStEO0FBQy9ELG1FQUFxRDtBQUNyRCxtRUFBd0Q7QUFDeEQsK0RBQWlEO0FBRWpELElBQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLFFBQVEsQ0FBQztBQVU1RTtJQUlFLDRCQUFvQixNQUF5QixFQUNuQyxJQUFVLEVBQVUsZ0JBQWlDO1FBRC9ELGlCQTJDQztRQTNDbUIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFDbkMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFDN0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLG9DQUFVLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFO1lBQ3ZCLEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLGFBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksZ0NBQVEsRUFBRSxDQUFDO1FBQy9CLGtCQUFrQjtRQUNsQixFQUFFO1FBQ0YsNEVBQTRFO1FBQzVFLDZHQUE2RztRQUM3RywyREFBMkQ7UUFDM0QsRUFBRTtRQUNGLCtGQUErRjtRQUMvRix3R0FBd0c7UUFDeEcsdUJBQXVCO1FBQ3ZCLEVBQUU7UUFDRiw0Q0FBNEM7UUFDNUMsa0NBQWtDO1FBQ2xDLEVBQUU7UUFDRix3QkFBd0I7UUFDeEIsOENBQThDO1FBQzlDLGVBQWU7UUFDZiw4Q0FBOEM7UUFDOUMsbURBQW1EO1FBQ25ELFFBQVE7UUFDUixFQUFFO1FBQ0YsaUVBQWlFO1FBQ2pFLEVBQUU7UUFDRixtRUFBbUU7UUFDbkUsbURBQW1EO1FBQ25ELGtGQUFrRjtRQUNsRiw2RUFBNkU7UUFDN0UsMkRBQTJEO1FBQzNELEVBQUU7UUFDRiwrR0FBK0c7UUFDL0csb0ZBQW9GO1FBQ3BGLHNFQUFzRTtRQUN0RSxVQUFVO1FBQ1YsT0FBTztRQUNQLElBQUk7SUFDTixDQUFDO0lBQ08sdUNBQVUsR0FBbEI7UUFBQSxpQkFpQkM7UUFoQkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxTQUFTO1lBQ3pDLEVBQUUsQ0FBQSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2IsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7b0JBQ3ZCLEVBQUUsRUFBRTt3QkFDRixHQUFHLEVBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO3dCQUNwQyxHQUFHLEVBQUUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO3FCQUNwQztpQkFDRixDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNOLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQ3pDLENBQUMsRUFBRSxVQUFBLEtBQUs7b0JBQ04sS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQztnQkFDL0MsQ0FBQyxDQUFDLENBQUE7WUFDSixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sdUNBQWEsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLDhEQUE4RCxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ3RILENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDTyxrQ0FBSyxHQUFiO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBcEVVLGtCQUFrQjtRQVI5QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxtQkFBbUI7WUFDaEMsU0FBUyxFQUFFO2dCQUNULHlCQUF5QjtnQkFDekIsa0JBQWtCO2FBQ25CO1NBQ0YsQ0FBQzt5Q0FLNEIsZ0NBQWlCO1lBQzdCLFdBQUksRUFBNEIsa0NBQWU7T0FMcEQsa0JBQWtCLENBcUU5QjtJQUFELHlCQUFDO0NBQUEsQUFyRUQsSUFxRUM7QUFyRVksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2NvbG9yXCI7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICd1dGlscy91dGlscyc7XG5pbXBvcnQgeyBvcGVuVXJsIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdXRpbHMvdXRpbHNcIjtcbmltcG9ydCB7IFBsYWNlIH0gZnJvbSBcIi4uL21vZGVscy9wbGFjZS5tb2RlbFwiO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tIFwiLi4vbW9kZWxzL2xvY2F0aW9uLm1vZGVsXCJcbmltcG9ydCB7IExvY2F0aW9uU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9sb2NhdGlvbi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBEaXJlY3Rpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1kaXJlY3Rpb25zXCI7XG5pbXBvcnQgeyBUTlNGYW5jeUFsZXJ0IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWZhbmN5YWxlcnQnO1xuaW1wb3J0IHsgU25hY2tCYXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXNuYWNrYmFyXCI7XG5cbmNvbnN0IHBhZ2VDb21tb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2UtY29tbW9uXCIpLlBhZ2VCYXNlO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6IFwiLi9pbmZvLW1vZGFsLmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXG4gICAgXCIuL2luZm8tbW9kYWwtY29tbW9uLmNzc1wiLFxuICAgIFwiLi9pbmZvLW1vZGFsLmNzc1wiXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgSW5mb01vZGFsQ29tcG9uZW50IHtcbiAgcGxhY2VJbmZvOiBQbGFjZTtcbiAgZGlyZWN0aW9uczogRGlyZWN0aW9ucztcbiAgc25hY2tCYXI6IFNuYWNrQmFyO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMsXG4gICAgcHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIGxvY2F0aW9uU2VydmljZXM6IExvY2F0aW9uU2VydmljZSkge1xuICAgIHRoaXMuZGlyZWN0aW9ucyA9IG5ldyBEaXJlY3Rpb25zKCk7XG4gICAgdGhpcy5wbGFjZUluZm8gPSBwYXJhbXMuY29udGV4dDtcbiAgICB0aGlzLnBhZ2Uub24oXCJ1bmxvYWRlZFwiLCAoKSA9PiB7XG4gICAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKCk7XG4gICAgfSk7XG4gICAgdGhpcy5wYWdlLmJhY2tncm91bmRDb2xvciA9IG5ldyBDb2xvcig1MCwgMCwgMCwgMCk7XG4gICAgdGhpcy5zbmFja0JhciA9IG5ldyBTbmFja0JhcigpO1xuICAgIC8vIGlmIChwYWdlLmlvcykge1xuICAgIC8vXG4gICAgLy8gICAvLyBpT1MgYnkgZGVmYXVsdCB3b24ndCBsZXQgdXMgaGF2ZSBhIHRyYW5zcGFyZW50IGJhY2tncm91bmQgb24gYSBtb2RhbFxuICAgIC8vICAgLy8gVWdseSB3b3JrYXJvdW5kIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9OYXRpdmVTY3JpcHQvbmF0aXZlc2NyaXB0L2lzc3Vlcy8yMDg2I2lzc3VlY29tbWVudC0yMjE5NTY0ODNcbiAgICAvLyAgIC8vIHRoaXMucGFnZS5iYWNrZ3JvdW5kQ29sb3IgPSBuZXcgQ29sb3IoNTAsIDAsIDAsIDApO1xuICAgIC8vXG4gICAgLy8gICAoPGFueT5wYWdlKS5fc2hvd05hdGl2ZU1vZGFsVmlldyA9IGZ1bmN0aW9uIChwYXJlbnQsIGNvbnRleHQsIGNsb3NlQ2FsbGJhY2ssIGZ1bGxzY3JlZW4pIHtcbiAgICAvLyAgICAgcGFnZUNvbW1vbi5wcm90b3R5cGUuX3Nob3dOYXRpdmVNb2RhbFZpZXcuY2FsbCh0aGlzLCBwYXJlbnQsIGNvbnRleHQsIGNsb3NlQ2FsbGJhY2ssIGZ1bGxzY3JlZW4pO1xuICAgIC8vICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgLy9cbiAgICAvLyAgICAgLy8gbm9pbnNwZWN0aW9uIEpTVW51c2VkR2xvYmFsU3ltYm9sc1xuICAgIC8vICAgICB0aGlzLl9tb2RhbFBhcmVudCA9IHBhcmVudDtcbiAgICAvL1xuICAgIC8vICAgICBpZiAoZnVsbHNjcmVlbikge1xuICAgIC8vICAgICAgIHRoaXMuX2lvcy5tb2RhbFByZXNlbnRhdGlvblN0eWxlID0gMDtcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICB0aGlzLl9pb3MubW9kYWxQcmVzZW50YXRpb25TdHlsZSA9IDI7XG4gICAgLy8gICAgICAgdGhpcy5fVUlNb2RhbFByZXNlbnRhdGlvbkZvcm1TaGVldCA9IHRydWU7XG4gICAgLy8gICAgIH1cbiAgICAvL1xuICAgIC8vICAgICBwYWdlQ29tbW9uLnByb3RvdHlwZS5fcmFpc2VTaG93aW5nTW9kYWxseUV2ZW50LmNhbGwodGhpcyk7XG4gICAgLy9cbiAgICAvLyAgICAgdGhpcy5faW9zLnByb3ZpZGVzUHJlc2VudGF0aW9uQ29udGV4dFRyYW5zaXRpb25TdHlsZSA9IHRydWU7XG4gICAgLy8gICAgIHRoaXMuX2lvcy5kZWZpbmVzUHJlc2VudGF0aW9uQ29udGV4dCA9IHRydWU7XG4gICAgLy8gICAgIHRoaXMuX2lvcy5tb2RhbFByZXNlbnRhdGlvblN0eWxlID0gVUlNb2RhbFByZXNlbnRhdGlvblN0eWxlLk92ZXJGdWxsU2NyZWVuO1xuICAgIC8vICAgICB0aGlzLl9pb3MubW9kYWxUcmFuc2l0aW9uU3R5bGUgPSBVSU1vZGFsVHJhbnNpdGlvblN0eWxlLkNyb3NzRGlzc29sdmU7XG4gICAgLy8gICAgIHRoaXMuX2lvcy52aWV3LmJhY2tncm91bmRDb2xvciA9IFVJQ29sb3IuY2xlYXJDb2xvcjtcbiAgICAvL1xuICAgIC8vICAgICBwYXJlbnQuaW9zLnByZXNlbnRWaWV3Q29udHJvbGxlckFuaW1hdGVkQ29tcGxldGlvbih0aGlzLl9pb3MsIHV0aWxzLmlvcy5NYWpvclZlcnNpb24gPj0gOSwgZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICAgIHRoYXQuX2lvcy5tb2RhbFByZXNlbnRhdGlvblN0eWxlID0gVUlNb2RhbFByZXNlbnRhdGlvblN0eWxlLkN1cnJlbnRDb250ZXh0O1xuICAgIC8vICAgICAgIHRoYXQuX3JhaXNlU2hvd25Nb2RhbGx5RXZlbnQocGFyZW50LCBjb250ZXh0LCBjbG9zZUNhbGxiYWNrKTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gICB9O1xuICAgIC8vIH1cbiAgfVxuICBwcml2YXRlIG9wZW5OYXZncHMoKSB7XG4gICAgdGhpcy5kaXJlY3Rpb25zLmF2YWlsYWJsZSgpLnRoZW4oKGF2YWlsYWJsZSkgPT4ge1xuICAgICAgaWYoYXZhaWxhYmxlKSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9ucy5uYXZpZ2F0ZSh7XG4gICAgICAgICAgdG86IHtcbiAgICAgICAgICAgIGxhdDogIHRoaXMucGxhY2VJbmZvLmxvY2F0aW9uW1wibGF0XCJdLFxuICAgICAgICAgICAgbG5nOiB0aGlzLnBsYWNlSW5mby5sb2NhdGlvbltcImxuZ1wiXVxuICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbigoKT0+IHtcbiAgICAgICAgICB0aGlzLnNuYWNrQmFyLnNpbXBsZShcIkFicmllbmRvIG1hcGFzXCIpO1xuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgdGhpcy5zbmFja0Jhci5zaW1wbGUoXCJFcnJvciBhbCBhYnJpciBtYXBhc1wiKTtcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIFROU0ZhbmN5QWxlcnQuc2hvd0Vycm9yKFwiR29vZ2xlIE1hcHNcIiwgXCJBbCBwYXJlY2VyIG5vIHRpZW5lcyBpbnN0YWxhZG8gR29vZ2xlTWFwcyBwYXJhIGxhIG5hdmVnYWNpw7NuXCIsIFwiRW50ZW5kaWRvXCIpO1xuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgcHJpdmF0ZSBjbG9zZSgpIHtcbiAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKCk7XG4gIH1cbn1cbiJdfQ==