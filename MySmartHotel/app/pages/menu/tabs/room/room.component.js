"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var RoomComponent = (function () {
    function RoomComponent() {
        this.lightsState = false;
    }
    RoomComponent.prototype.toggleCheck = function () {
        this.lightsState = !this.lightsState;
    };
    RoomComponent.prototype.ngOnInit = function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyb29tLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQVV6RTtJQUVFO1FBREEsZ0JBQVcsR0FBYSxLQUFLLENBQUM7SUFDZixDQUFDO0lBQ1QsbUNBQVcsR0FBbEI7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN2QyxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtJQUVBLENBQUM7SUFUVSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTTtZQUNoQixXQUFXLEVBQUUsZ0NBQWdDO1lBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO1NBQzdDLENBQUM7O09BRVcsYUFBYSxDQVd6QjtJQUFELG9CQUFDO0NBQUEsQUFYRCxJQVdDO0FBWFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNuYWNrQmFyLCBTbmFja0Jhck9wdGlvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXNuYWNrYmFyXCI7XHJcbmltcG9ydCB7IExvYWRpbmdJbmRpY2F0b3IgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWxvYWRpbmctaW5kaWNhdG9yXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1Jvb20nLFxyXG4gIHRlbXBsYXRlVXJsOiAncGFnZXMvbWVudS90YWJzL3Jvb20vcm9vbS5odG1sJyxcclxuICBzdHlsZVVybHM6IFsncGFnZXMvbWVudS90YWJzL3Jvb20vcm9vbS5jc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFJvb21Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGxpZ2h0c1N0YXRlIDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuICBwdWJsaWMgdG9nZ2xlQ2hlY2soKSB7XHJcbiAgICB0aGlzLmxpZ2h0c1N0YXRlID0gIXRoaXMubGlnaHRzU3RhdGU7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgfVxyXG5cclxufVxyXG4iXX0=