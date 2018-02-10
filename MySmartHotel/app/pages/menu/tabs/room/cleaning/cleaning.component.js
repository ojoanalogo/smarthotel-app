"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var backend_service_1 = require("../../../../../services/backend.service");
var CleaningComponent = (function () {
    function CleaningComponent() {
    }
    CleaningComponent.prototype.ngOnInit = function () {
        this.room = backend_service_1.BackendService.userData.room;
    };
    CleaningComponent = __decorate([
        core_1.Component({
            selector: 'Cleaning',
            templateUrl: 'pages/menu/tabs/room/cleaning/cleaning.html',
            styleUrls: ['pages/menu/tabs/room/cleaning/cleaning.css']
        }),
        __metadata("design:paramtypes", [])
    ], CleaningComponent);
    return CleaningComponent;
}());
exports.CleaningComponent = CleaningComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xlYW5pbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2xlYW5pbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBR3pFLDJFQUF5RTtBQVV6RTtJQUVFO0lBQWUsQ0FBQztJQUNoQixvQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxnQ0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDM0MsQ0FBQztJQUxVLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLDZDQUE2QztZQUMxRCxTQUFTLEVBQUUsQ0FBQyw0Q0FBNEMsQ0FBQztTQUMxRCxDQUFDOztPQUVXLGlCQUFpQixDQU03QjtJQUFELHdCQUFDO0NBQUEsQUFORCxJQU1DO0FBTlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTbmFja0JhciwgU25hY2tCYXJPcHRpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1zbmFja2JhclwiO1xyXG5pbXBvcnQgeyBMb2FkaW5nSW5kaWNhdG9yIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1sb2FkaW5nLWluZGljYXRvclwiO1xyXG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9zZXJ2aWNlcy9iYWNrZW5kLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm9vbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vc2VydmljZXMvcm9vbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnQ2xlYW5pbmcnLFxyXG4gIHRlbXBsYXRlVXJsOiAncGFnZXMvbWVudS90YWJzL3Jvb20vY2xlYW5pbmcvY2xlYW5pbmcuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ3BhZ2VzL21lbnUvdGFicy9yb29tL2NsZWFuaW5nL2NsZWFuaW5nLmNzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ2xlYW5pbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHByaXZhdGUgcm9vbSA6IG51bWJlcjtcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnJvb20gPSBCYWNrZW5kU2VydmljZS51c2VyRGF0YS5yb29tO1xyXG4gIH1cclxufVxyXG4iXX0=