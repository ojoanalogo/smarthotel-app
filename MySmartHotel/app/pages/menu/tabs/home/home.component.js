"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var router_1 = require("@angular/router");
var weather_service_1 = require("../../../../services/weather.service");
var HomeComponent = (function () {
    function HomeComponent(page, router, fonticon, weatherService) {
        this.page = page;
        this.router = router;
        this.fonticon = fonticon;
        this.weatherService = weatherService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.onScroll = function (event, scrollView, topView) {
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
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'Home',
            templateUrl: 'pages/menu/tabs/home/home.html',
            styleUrls: ['pages/menu/tabs/home/home.css']
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.Router, nativescript_ngx_fonticon_1.TNSFontIconService, weather_service_1.WeatherService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxnQ0FBK0I7QUFDL0IsdUVBQStEO0FBQy9ELDBDQUF5QztBQUd6Qyx3RUFBc0U7QUFTdEU7SUFJRSx1QkFBb0IsSUFBVSxFQUFVLE1BQWUsRUFBVSxRQUE0QixFQUFVLGNBQStCO1FBQWxILFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFTO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBaUI7SUFBRyxDQUFDO0lBQzFJLGdDQUFRLEdBQVI7SUFFQSxDQUFDO0lBQ0QsZ0NBQVEsR0FBUixVQUFTLEtBQXNCLEVBQUUsVUFBc0IsRUFBRSxPQUFhO1FBQ3BFLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxjQUFjLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNsQyxJQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztZQUM3QyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDakIsa0ZBQWtGO2dCQUNsRixPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFRLENBQUMsRUFBRSxjQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ25GLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSix1RkFBdUY7Z0JBQ3ZGLE9BQU8sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1QyxDQUFDO1FBQ0wsQ0FBQztJQUNILENBQUM7SUFuQlUsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU07WUFDaEIsV0FBVyxFQUFFLGdDQUFnQztZQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztTQUM3QyxDQUFDO3lDQU0wQixXQUFJLEVBQW1CLGVBQU0sRUFBb0IsOENBQWtCLEVBQTJCLGdDQUFjO09BSjNILGFBQWEsQ0FvQnpCO0lBQUQsb0JBQUM7Q0FBQSxBQXBCRCxJQW9CQztBQXBCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBUTlNGb250SWNvblNlcnZpY2UgfSBmcm9tICduYXRpdmVzY3JpcHQtbmd4LWZvbnRpY29uJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBTY3JvbGxWaWV3LCBTY3JvbGxFdmVudERhdGEgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3Njcm9sbC12aWV3JztcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3JztcclxuaW1wb3J0IHsgV2VhdGhlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vLi4vc2VydmljZXMvd2VhdGhlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFdlYXRoZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vbW9kZWxzL3dlYXRoZXIubW9kZWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnSG9tZScsXHJcbiAgdGVtcGxhdGVVcmw6ICdwYWdlcy9tZW51L3RhYnMvaG9tZS9ob21lLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydwYWdlcy9tZW51L3RhYnMvaG9tZS9ob21lLmNzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgY2l0eSA6IHN0cmluZztcclxuICBkZWdyZWVzIDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyIDogUm91dGVyLCBwcml2YXRlIGZvbnRpY29uOiBUTlNGb250SWNvblNlcnZpY2UsIHByaXZhdGUgd2VhdGhlclNlcnZpY2UgOiBXZWF0aGVyU2VydmljZSkge31cclxuICBuZ09uSW5pdCgpIDogdm9pZCB7XHJcblxyXG4gIH1cclxuICBvblNjcm9sbChldmVudDogU2Nyb2xsRXZlbnREYXRhLCBzY3JvbGxWaWV3OiBTY3JvbGxWaWV3LCB0b3BWaWV3OiBWaWV3KSB7XHJcbiAgICBpZiAoc2Nyb2xsVmlldy52ZXJ0aWNhbE9mZnNldCA8IDI1MCkge1xyXG4gICAgICAgIGNvbnN0IG9mZnNldCA9IHNjcm9sbFZpZXcudmVydGljYWxPZmZzZXQgLyAyO1xyXG4gICAgICAgIGlmIChzY3JvbGxWaWV3Lmlvcykge1xyXG4gICAgICAgICAgICAvLyBpT1MgYWRqdXN0IHRoZSBwb3NpdGlvbiB3aXRoIGFuIGFuaW1hdGlvbiB0byBjcmVhdGUgYSBzbW90aGVyIHNjcm9sbGluZyBlZmZlY3QuXHJcbiAgICAgICAgICAgIHRvcFZpZXcuYW5pbWF0ZSh7IHRyYW5zbGF0ZTogeyB4OiAwLCB5OiBvZmZzZXQgfSB9KS50aGVuKCgpID0+IHsgfSwgKCkgPT4geyB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBBbmRyb2lkLCBhbmltYXRpb25zIGFyZSBqZXJreSBzbyBpbnN0ZWFkIGp1c3QgYWRqdXN0IHRoZSBwb3NpdGlvbiB3aXRob3V0IGFuaW1hdGlvbi5cclxuICAgICAgICAgICAgdG9wVmlldy50cmFuc2xhdGVZID0gTWF0aC5mbG9vcihvZmZzZXQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19