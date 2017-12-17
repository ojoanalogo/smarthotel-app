"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = require("application");
var frame_1 = require("ui/frame");
var color_1 = require("color");
var Platform = require("platform");
var SwissArmyKnife = (function () {
    function SwissArmyKnife() {
    }
    Object.defineProperty(SwissArmyKnife.prototype, "android", {
        get: function () {
            return;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SwissArmyKnife.prototype, "ios", {
        get: function () {
            return;
        },
        enumerable: true,
        configurable: true
    });
    /**
       * Takes a layout and removes all the child Views and returns them in an Array<View>
       */
    SwissArmyKnife.pluckChildViewsFromLayout = function (parent) {
        var returnViews = [];
        parent.eachLayoutChild(function (child) {
            returnViews.push(child);
        });
        parent.removeChildren();
        return returnViews;
    };
    /**
       *Disables bounce/overscroll for scrollViews or ListViews on Android and iOS
          *  */
    SwissArmyKnife.disableScrollBounce = function (view) {
        //no ui bounce. causes problems
        if (app.ios) {
            view.ios.bounces = false;
        }
        else if (app.android && view.android != null) {
            view.android.setOverScrollMode(2);
        }
    };
    /**
       *Hides horizontal scrollbars for scrollViews or ListViews on Android and iOS
      *  */
    SwissArmyKnife.removeHorizontalScrollBars = function (view) {
        if (app.ios) {
            view.ios.showsHorizontalScrollIndicator = false;
        }
        else {
            view.android.setHorizontalScrollBarEnabled(false);
        }
    };
    /**
       *Hides vertical scrollbars for scrollViews or ListViews on Android and iOS
      *  */
    SwissArmyKnife.removeVerticalScrollBars = function (view) {
        if (app.ios) {
            view.ios.showsVerticalScrollIndicator = false;
        }
        else {
            view.android.setVerticalScrollBarEnabled(false);
        }
    };
    /**
       * returns an IScreenHeight ojecjt with the protrait demension, landscape deminsions, and android status bar height*/
    SwissArmyKnife.getScreenHeight = function () {
        var height1 = Platform.screen.mainScreen.heightDIPs;
        var height2 = Platform.screen.mainScreen.widthDIPs;
        var statusbar = this.getStatusBarHeight();
        var navbar = this.getNavBarHeight();
        return {
            portrait: height1,
            landscape: height2,
            androidStatusBar: statusbar,
            androidNavBar: navbar
        };
    };
    SwissArmyKnife.getStatusBarHeight = function () {
        if (app.android) {
            var result = 0;
            var resourceId = app.android.currentContext
                .getResources()
                .getIdentifier("status_bar_height", "dimen", "android");
            if (resourceId > 0) {
                result = app.android.currentContext
                    .getResources()
                    .getDimensionPixelSize(resourceId);
                result =
                    result /
                        app.android.currentContext.getResources().getDisplayMetrics().density;
            }
            return result;
        }
        else {
            return 0;
        }
    };
    SwissArmyKnife.getNavBarHeight = function () {
        if (app.android) {
            var result = 0;
            var resourceId = app.android.currentContext
                .getResources()
                .getIdentifier("navigation_bar_height", "dimen", "android");
            if (resourceId > 0) {
                result = app.android.currentContext
                    .getResources()
                    .getDimensionPixelSize(resourceId);
                result =
                    result /
                        app.android.currentContext.getResources().getDisplayMetrics().density;
            }
            return result;
        }
        else {
            return 0;
        }
    };
    /** ActionBar Utilities */
    /**
       * Programmatically set title
       */
    SwissArmyKnife.actionBarSetTitle = function (title) {
        var actionBar = frame_1.topmost().currentPage.actionBar;
        actionBar.title = title;
    };
    /**
       * Programmatically add button to the ActionBar
       * NOTE: This MUST be called BEFORE actionBarSetTitle on start
       */
    SwissArmyKnife.actionBarAddButton = function (button) {
        frame_1.topmost().currentPage.actionBar.actionItems.addItem(button);
    };
    /**
       * Programmatically remove all buttons from the ActionBar
       */
    SwissArmyKnife.actionBarClearButtons = function () {
        var actionBar = frame_1.topmost().currentPage.actionBar;
        var actionItems = actionBar.actionItems.getItems();
        actionItems.forEach(function (item) {
            actionBar.actionItems.removeItem(item);
        });
    };
    /**
       * Sets the Android statusbar to translucent
       * Android API >= 19 only
       */
    SwissArmyKnife.setAndroidStatusBarTranslucentFlag = function () {
        if (app.android && Platform.device.sdkVersion >= "19") {
            var LayoutParams = android.view.WindowManager.LayoutParams;
            var window_1 = app.android.startActivity.getWindow();
            // check for status bar
            window_1.addFlags(LayoutParams.FLAG_TRANSLUCENT_STATUS);
        }
    };
    /**
       * Sets the Android statusbar color, accepts either a string color or a Color object
       * Android API >= 21 only
       */
    SwissArmyKnife.setAndroidStatusBarColor = function (color) {
        if (app.android && Platform.device.sdkVersion >= "21") {
            var barColor = this.getBarColor(color);
            var LayoutParams = android.view.WindowManager.LayoutParams;
            var window_2;
            if (app.android.foregroundActivity != null) {
                window_2 = app.android.foregroundActivity.getWindow();
            }
            else {
                window_2 = app.android.startActivity.getWindow();
            }
            window_2.addFlags(LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
            window_2.setStatusBarColor(barColor.android);
        }
    };
    /**
           * Sets the Android NavigationBar color, accepts either a string color or a Color object
           * Android API >= 21 only
           */
    SwissArmyKnife.setAndroidNavBarColor = function (color) {
        if (app.android && Platform.device.sdkVersion >= "21") {
            var barColor = this.getBarColor(color);
            var LayoutParams = android.view.WindowManager.LayoutParams;
            var window_3;
            if (app.android.foregroundActivity != null) {
                window_3 = app.android.foregroundActivity.getWindow();
            }
            else {
                window_3 = app.android.startActivity.getWindow();
            }
            window_3.addFlags(LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
            window_3.setNavigationBarColor(barColor.android);
        }
    };
    SwissArmyKnife.getBarColor = function (color) {
        var barColor;
        if (color instanceof color_1.Color === false) {
            barColor = new color_1.Color(color);
        }
        else {
            barColor = color;
        }
        return barColor;
    };
    /**
       * Clears the Android Translucent StatusBar flag
       */
    SwissArmyKnife.resetAndroidStatusBarTranslucentFlag = function () {
        if (app.android && Platform.device.sdkVersion >= "19") {
            var window_4 = app.android.startActivity.getWindow();
            var LayoutParams = android.view.WindowManager.LayoutParams;
            window_4.clearFlags(LayoutParams.FLAG_TRANSLUCENT_STATUS);
        }
    };
    /**
      * Sets the Android navigation bar to translucent
      * Android API >= 19 only
      */
    SwissArmyKnife.setAndroidNavBarTranslucentFlag = function () {
        if (app.android && Platform.device.sdkVersion >= "19") {
            var window_5 = app.android.startActivity.getWindow();
            var LayoutParams = android.view.WindowManager.LayoutParams;
            window_5.addFlags(LayoutParams.FLAG_TRANSLUCENT_NAVIGATION);
        }
    };
    /**
       * Clears the Android Translucent NavigationBar flag
       */
    SwissArmyKnife.resetAndroidNavBarTranslucentFlag = function () {
        if (app.android && Platform.device.sdkVersion >= "19") {
            var window_6 = app.android.startActivity.getWindow();
            var LayoutParams = android.view.WindowManager.LayoutParams;
            window_6.clearFlags(LayoutParams.FLAG_TRANSLUCENT_NAVIGATION);
        }
    };
    /** ActionBar Utilities */
    /**
         * Programmatically hide the back button from the ActionBar
         */
    SwissArmyKnife.actionBarHideBackButton = function () {
        if (frame_1.topmost().ios) {
            frame_1.topmost().ios.controller.visibleViewController.navigationItem.setHidesBackButtonAnimated(true, false);
        }
    };
    /**
         * Programmatically remove all buttons from the ActionBar
         */
    SwissArmyKnife.actionBarSetStatusBarStyle = function (style) {
        if (frame_1.topmost().ios) {
            var navigationBar = frame_1.topmost().ios.controller.navigationBar;
            // 0: default
            // 1: light
            navigationBar.barStyle = style;
        }
    };
    return SwissArmyKnife;
}());
exports.SwissArmyKnife = SwissArmyKnife;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2LnV0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGV2LnV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQW1DO0FBSW5DLGtDQUFtQztBQUluQywrQkFBOEI7QUFDOUIsbUNBQXFDO0FBV3JDO0lBQUE7SUFvUUEsQ0FBQztJQW5RQyxzQkFBSSxtQ0FBTzthQUFYO1lBQ0UsTUFBTSxDQUFDO1FBQ1QsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwrQkFBRzthQUFQO1lBQ0UsTUFBTSxDQUFDO1FBQ1QsQ0FBQzs7O09BQUE7SUFFRDs7U0FFRTtJQUNZLHdDQUF5QixHQUF2QyxVQUF3QyxNQUFrQjtRQUN4RCxJQUFJLFdBQVcsR0FBVyxFQUFFLENBQUM7UUFDN0IsTUFBTSxDQUFDLGVBQWUsQ0FBQyxVQUFDLEtBQVc7WUFDakMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixNQUFNLENBQUMsV0FBVyxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7ZUFFSztJQUNTLGtDQUFtQixHQUFqQyxVQUFrQyxJQUEyQjtRQUMzRCwrQkFBK0I7UUFDL0IsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDWixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLENBQUM7SUFDSCxDQUFDO0lBRUQ7O1dBRUk7SUFDVSx5Q0FBMEIsR0FBeEMsVUFBeUMsSUFBMkI7UUFDbEUsRUFBRSxD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QUMsQ0FBQztZQUNsQixlQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLGNBQWMsQ0FBQywwQkFBMEIsQ0FDdEYsSUFBSSxFQUNKLEtBQUssQ0FDTixDQUFDO1FBQ0osQ0FBQztJQUNILENBQUM7SUFFRDs7V0FFSTtJQUNVLHlDQUEwQixHQUF4QyxVQUF5QyxLQUFhO1FBQ3BELEVBQUUsQ0FBQyxDQUFDLGVBQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxhQUFhLEdBQUcsZUFBTyxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7WUFDM0QsYUFBYTtZQUNiLFdBQVc7WUFDWCxhQUFhLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQyxDQUFDO0lBQ0gsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQXBRRCxJQW9RQztBQXBRWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFwcCBmcm9tIFwiYXBwbGljYXRpb25cIjtcclxuaW1wb3J0IHsgVmlldywgQWRkQ2hpbGRGcm9tQnVpbGRlciB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcclxuaW1wb3J0IHsgTGF5b3V0QmFzZSB9IGZyb20gXCJ1aS9sYXlvdXRzL2xheW91dC1iYXNlXCI7XHJcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSBcInVpL2xheW91dHMvc3RhY2stbGF5b3V0XCI7XHJcbmltcG9ydCB7IHRvcG1vc3QgfSBmcm9tIFwidWkvZnJhbWVcIjtcclxuaW1wb3J0IHsgU2Nyb2xsVmlldywgU2Nyb2xsRXZlbnREYXRhIH0gZnJvbSBcInVpL3Njcm9sbC12aWV3XCI7XHJcbmltcG9ydCB7IExpc3RWaWV3IH0gZnJvbSBcInVpL2xpc3Qtdmlld1wiO1xyXG5pbXBvcnQgeyBBY3Rpb25JdGVtLCBBY3Rpb25JdGVtcyB9IGZyb20gXCJ1aS9hY3Rpb24tYmFyXCI7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcImNvbG9yXCI7XHJcbmltcG9ydCAqIGFzIFBsYXRmb3JtIGZyb20gXCJwbGF0Zm9ybVwiO1xyXG5cclxuZGVjbGFyZSBjb25zdCBhbmRyb2lkOiBhbnk7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTY3JlZW5IZWlnaHQge1xyXG4gIHBvcnRyYWl0OiBudW1iZXI7XHJcbiAgbGFuZHNjYXBlOiBudW1iZXI7XHJcbiAgYW5kcm9pZFN0YXR1c0JhcjogbnVtYmVyO1xyXG4gIGFuZHJvaWROYXZCYXI6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFN3aXNzQXJteUtuaWZlIHtcclxuICBnZXQgYW5kcm9pZCgpOiBhbnkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlvcygpOiBhbnkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcblx0ICogVGFrZXMgYSBsYXlvdXQgYW5kIHJlbW92ZXMgYWxsIHRoZSBjaGlsZCBWaWV3cyBhbmQgcmV0dXJucyB0aGVtIGluIGFuIEFycmF5PFZpZXc+XHJcblx0ICovXHJcbiAgcHVibGljIHN0YXRpYyBwbHVja0NoaWxkVmlld3NGcm9tTGF5b3V0KHBhcmVudDogTGF5b3V0QmFzZSk6IEFycmF5PFZpZXc+IHtcclxuICAgIGxldCByZXR1cm5WaWV3czogVmlld1tdID0gW107XHJcbiAgICBwYXJlbnQuZWFjaExheW91dENoaWxkKChjaGlsZDogVmlldykgPT4ge1xyXG4gICAgICByZXR1cm5WaWV3cy5wdXNoKGNoaWxkKTtcclxuICAgIH0pO1xyXG4gICAgcGFyZW50LnJlbW92ZUNoaWxkcmVuKCk7XHJcbiAgICByZXR1cm4gcmV0dXJuVmlld3M7XHJcbiAgfVxyXG5cclxuICAvKipcclxuXHQgKkRpc2FibGVzIGJvdW5jZS9vdmVyc2Nyb2xsIGZvciBzY3JvbGxWaWV3cyBvciBMaXN0Vmlld3Mgb24gQW5kcm9pZCBhbmQgaU9TXHJcblx0XHQqICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgZGlzYWJsZVNjcm9sbEJvdW5jZSh2aWV3OiBTY3JvbGxWaWV3IHwgTGlzdFZpZXcpOiB2b2lkIHtcclxuICAgIC8vbm8gdWkgYm91bmNlLiBjYXVzZXMgcHJvYmxlbXNcclxuICAgIGlmIChhcHAuaW9zKSB7XHJcbiAgICAgIHZpZXcuaW9zLmJvdW5jZXMgPSBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAoYXBwLmFuZHJvaWQgJiYgdmlldy5hbmRyb2lkICE9IG51bGwpIHtcclxuICAgICAgdmlldy5hbmRyb2lkLnNldE92ZXJTY3JvbGxNb2RlKDIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcblx0ICpIaWRlcyBob3Jpem9udGFsIHNjcm9sbGJhcnMgZm9yIHNjcm9sbFZpZXdzIG9yIExpc3RWaWV3cyBvbiBBbmRyb2lkIGFuZCBpT1NcclxuXHQqICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgcmVtb3ZlSG9yaXpvbnRhbFNjcm9sbEJhcnModmlldzogU2Nyb2xsVmlldyB8IExpc3RWaWV3KTogdm9pZCB7XHJcbiAgICBpZiAoYXBwLmlvcykge1xyXG4gICAgICB2aWV3Lmlvcy5zaG93c0hvcml6b250YWxTY3JvbGxJbmRpY2F0b3IgPSBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZpZXcuYW5kcm9pZC5zZXRIb3Jpem9udGFsU2Nyb2xsQmFyRW5hYmxlZChmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuXHQgKkhpZGVzIHZlcnRpY2FsIHNjcm9sbGJhcnMgZm9yIHNjcm9sbFZpZXdzIG9yIExpc3RWaWV3cyBvbiBBbmRyb2lkIGFuZCBpT1NcclxuXHQqICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgcmVtb3ZlVmVydGljYWxTY3JvbGxCYXJzKHZpZXc6IFNjcm9sbFZpZXcgfCBMaXN0Vmlldyk6IHZvaWQge1xyXG4gICAgaWYgKGFwcC5pb3MpIHtcclxuICAgICAgdmlldy5pb3Muc2hvd3NWZXJ0aWNhbFNjcm9sbEluZGljYXRvciA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmlldy5hbmRyb2lkLnNldFZlcnRpY2FsU2Nyb2xsQmFyRW5hYmxlZChmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuXHQgKiByZXR1cm5zIGFuIElTY3JlZW5IZWlnaHQgb2plY2p0IHdpdGggdGhlIHByb3RyYWl0IGRlbWVuc2lvbiwgbGFuZHNjYXBlIGRlbWluc2lvbnMsIGFuZCBhbmRyb2lkIHN0YXR1cyBiYXIgaGVpZ2h0Ki9cclxuICBwdWJsaWMgc3RhdGljIGdldFNjcmVlbkhlaWdodCgpOiBJU2NyZWVuSGVpZ2h0IHtcclxuICAgIGxldCBoZWlnaHQxID0gUGxhdGZvcm0uc2NyZWVuLm1haW5TY3JlZW4uaGVpZ2h0RElQcztcclxuICAgIGxldCBoZWlnaHQyID0gUGxhdGZvcm0uc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhESVBzO1xyXG4gICAgbGV0IHN0YXR1c2JhciA9IHRoaXMuZ2V0U3RhdHVzQmFySGVpZ2h0KCk7XHJcbiAgICBsZXQgbmF2YmFyID0gdGhpcy5nZXROYXZCYXJIZWlnaHQoKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBvcnRyYWl0OiBoZWlnaHQxLFxyXG4gICAgICBsYW5kc2NhcGU6IGhlaWdodDIsXHJcbiAgICAgIGFuZHJvaWRTdGF0dXNCYXI6IHN0YXR1c2JhcixcclxuICAgICAgYW5kcm9pZE5hdkJhcjogbmF2YmFyXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgZ2V0U3RhdHVzQmFySGVpZ2h0KCk6IG51bWJlciB7XHJcbiAgICBpZiAoYXBwLmFuZHJvaWQpIHtcclxuICAgICAgbGV0IHJlc3VsdCA9IDA7XHJcbiAgICAgIGxldCByZXNvdXJjZUlkID0gYXBwLmFuZHJvaWQuY3VycmVudENvbnRleHRcclxuICAgICAgICAuZ2V0UmVzb3VyY2VzKClcclxuICAgICAgICAuZ2V0SWRlbnRpZmllcihcInN0YXR1c19iYXJfaGVpZ2h0XCIsIFwiZGltZW5cIiwgXCJhbmRyb2lkXCIpO1xyXG4gICAgICBpZiAocmVzb3VyY2VJZCA+IDApIHtcclxuICAgICAgICByZXN1bHQgPSBhcHAuYW5kcm9pZC5jdXJyZW50Q29udGV4dFxyXG4gICAgICAgICAgLmdldFJlc291cmNlcygpXHJcbiAgICAgICAgICAuZ2V0RGltZW5zaW9uUGl4ZWxTaXplKHJlc291cmNlSWQpO1xyXG4gICAgICAgIHJlc3VsdCA9XHJcbiAgICAgICAgICByZXN1bHQgL1xyXG4gICAgICAgICAgYXBwLmFuZHJvaWQuY3VycmVudENvbnRleHQuZ2V0UmVzb3VyY2VzKCkuZ2V0RGlzcGxheU1ldHJpY3MoKS5kZW5zaXR5O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGdldE5hdkJhckhlaWdodCgpOiBudW1iZXIge1xyXG4gICAgaWYgKGFwcC5hbmRyb2lkKSB7XHJcbiAgICAgIGxldCByZXN1bHQgPSAwO1xyXG4gICAgICBsZXQgcmVzb3VyY2VJZCA9IGFwcC5hbmRyb2lkLmN1cnJlbnRDb250ZXh0XHJcbiAgICAgICAgLmdldFJlc291cmNlcygpXHJcbiAgICAgICAgLmdldElkZW50aWZpZXIoXCJuYXZpZ2F0aW9uX2Jhcl9oZWlnaHRcIiwgXCJkaW1lblwiLCBcImFuZHJvaWRcIik7XHJcbiAgICAgIGlmIChyZXNvdXJjZUlkID4gMCkge1xyXG4gICAgICAgIHJlc3VsdCA9IGFwcC5hbmRyb2lkLmN1cnJlbnRDb250ZXh0XHJcbiAgICAgICAgICAuZ2V0UmVzb3VyY2VzKClcclxuICAgICAgICAgIC5nZXREaW1lbnNpb25QaXhlbFNpemUocmVzb3VyY2VJZCk7XHJcbiAgICAgICAgcmVzdWx0ID1cclxuICAgICAgICAgIHJlc3VsdCAvXHJcbiAgICAgICAgICBhcHAuYW5kcm9pZC5jdXJyZW50Q29udGV4dC5nZXRSZXNvdXJjZXMoKS5nZXREaXNwbGF5TWV0cmljcygpLmRlbnNpdHk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIEFjdGlvbkJhciBVdGlsaXRpZXMgKi9cclxuICAvKipcclxuXHQgKiBQcm9ncmFtbWF0aWNhbGx5IHNldCB0aXRsZVxyXG5cdCAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgYWN0aW9uQmFyU2V0VGl0bGUodGl0bGU6IHN0cmluZykge1xyXG4gICAgdmFyIGFjdGlvbkJhciA9IHRvcG1vc3QoKS5jdXJyZW50UGFnZS5hY3Rpb25CYXI7XHJcbiAgICBhY3Rpb25CYXIudGl0bGUgPSB0aXRsZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG5cdCAqIFByb2dyYW1tYXRpY2FsbHkgYWRkIGJ1dHRvbiB0byB0aGUgQWN0aW9uQmFyXHJcblx0ICogTk9URTogVGhpcyBNVVNUIGJlIGNhbGxlZCBCRUZPUkUgYWN0aW9uQmFyU2V0VGl0bGUgb24gc3RhcnRcclxuXHQgKi9cclxuICBwdWJsaWMgc3RhdGljIGFjdGlvbkJhckFkZEJ1dHRvbihidXR0b246IEFjdGlvbkl0ZW0pIHtcclxuICAgIHRvcG1vc3QoKS5jdXJyZW50UGFnZS5hY3Rpb25CYXIuYWN0aW9uSXRlbXMuYWRkSXRlbShidXR0b24pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcblx0ICogUHJvZ3JhbW1hdGljYWxseSByZW1vdmUgYWxsIGJ1dHRvbnMgZnJvbSB0aGUgQWN0aW9uQmFyXHJcblx0ICovXHJcbiAgcHVibGljIHN0YXRpYyBhY3Rpb25CYXJDbGVhckJ1dHRvbnMoKSB7XHJcbiAgICB2YXIgYWN0aW9uQmFyID0gdG9wbW9zdCgpLmN1cnJlbnRQYWdlLmFjdGlvbkJhcjtcclxuICAgIHZhciBhY3Rpb25JdGVtcyA9IGFjdGlvbkJhci5hY3Rpb25JdGVtcy5nZXRJdGVtcygpO1xyXG4gICAgYWN0aW9uSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgYWN0aW9uQmFyLmFjdGlvbkl0ZW1zLnJlbW92ZUl0ZW0oaXRlbSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBBbmRyb2lkIHN0YXR1c2JhciB0byB0cmFuc2x1Y2VudFxyXG4gICAgICogQW5kcm9pZCBBUEkgPj0gMTkgb25seVxyXG4gICAgICovXHJcbiAgcHVibGljIHN0YXRpYyBzZXRBbmRyb2lkU3RhdHVzQmFyVHJhbnNsdWNlbnRGbGFnKCk6IHZvaWQge1xyXG4gICAgaWYgKGFwcC5hbmRyb2lkICYmIFBsYXRmb3JtLmRldmljZS5zZGtWZXJzaW9uID49IFwiMTlcIikge1xyXG4gICAgICBsZXQgTGF5b3V0UGFyYW1zID0gPGFueT5hbmRyb2lkLnZpZXcuV2luZG93TWFuYWdlci5MYXlvdXRQYXJhbXM7XHJcbiAgICAgIGxldCB3aW5kb3cgPSBhcHAuYW5kcm9pZC5zdGFydEFjdGl2aXR5LmdldFdpbmRvdygpO1xyXG4gICAgICAvLyBjaGVjayBmb3Igc3RhdHVzIGJhclxyXG4gICAgICB3aW5kb3cuYWRkRmxhZ3MoTGF5b3V0UGFyYW1zLkZMQUdfVFJBTlNMVUNFTlRfU1RBVFVTKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgICogU2V0cyB0aGUgQW5kcm9pZCBzdGF0dXNiYXIgY29sb3IsIGFjY2VwdHMgZWl0aGVyIGEgc3RyaW5nIGNvbG9yIG9yIGEgQ29sb3Igb2JqZWN0XHJcbiAgICAgKiBBbmRyb2lkIEFQSSA+PSAyMSBvbmx5XHJcbiAgICAgKi9cclxuICBwdWJsaWMgc3RhdGljIHNldEFuZHJvaWRTdGF0dXNCYXJDb2xvcihjb2xvcjogc3RyaW5nIHwgQ29sb3IpOiB2b2lkIHtcclxuICAgIGlmIChhcHAuYW5kcm9pZCAmJiBQbGF0Zm9ybS5kZXZpY2Uuc2RrVmVyc2lvbiA+PSBcIjIxXCIpIHtcclxuICAgICAgbGV0IGJhckNvbG9yID0gdGhpcy5nZXRCYXJDb2xvcihjb2xvcik7XHJcbiAgICAgIGxldCBMYXlvdXRQYXJhbXMgPSA8YW55PmFuZHJvaWQudmlldy5XaW5kb3dNYW5hZ2VyLkxheW91dFBhcmFtcztcclxuICAgICAgbGV0IHdpbmRvdzogYW55O1xyXG4gICAgICBpZiAoYXBwLmFuZHJvaWQuZm9yZWdyb3VuZEFjdGl2aXR5ICE9IG51bGwpIHtcclxuICAgICAgICB3aW5kb3cgPSBhcHAuYW5kcm9pZC5mb3JlZ3JvdW5kQWN0aXZpdHkuZ2V0V2luZG93KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd2luZG93ID0gYXBwLmFuZHJvaWQuc3RhcnRBY3Rpdml0eS5nZXRXaW5kb3coKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgd2luZG93LmFkZEZsYWdzKExheW91dFBhcmFtcy5GTEFHX0RSQVdTX1NZU1RFTV9CQVJfQkFDS0dST1VORFMpO1xyXG4gICAgICB3aW5kb3cuc2V0U3RhdHVzQmFyQ29sb3IoYmFyQ29sb3IuYW5kcm9pZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuXHRcdCAqIFNldHMgdGhlIEFuZHJvaWQgTmF2aWdhdGlvbkJhciBjb2xvciwgYWNjZXB0cyBlaXRoZXIgYSBzdHJpbmcgY29sb3Igb3IgYSBDb2xvciBvYmplY3RcclxuXHRcdCAqIEFuZHJvaWQgQVBJID49IDIxIG9ubHlcclxuXHRcdCAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgc2V0QW5kcm9pZE5hdkJhckNvbG9yKGNvbG9yOiBzdHJpbmcgfCBDb2xvcik6IHZvaWQge1xyXG4gICAgaWYgKGFwcC5hbmRyb2lkICYmIFBsYXRmb3JtLmRldmljZS5zZGtWZXJzaW9uID49IFwiMjFcIikge1xyXG4gICAgICBsZXQgYmFyQ29sb3IgPSB0aGlzLmdldEJhckNvbG9yKGNvbG9yKTtcclxuICAgICAgbGV0IExheW91dFBhcmFtcyA9IDxhbnk+YW5kcm9pZC52aWV3LldpbmRvd01hbmFnZXIuTGF5b3V0UGFyYW1zO1xyXG4gICAgICBsZXQgd2luZG93OiBhbnk7XHJcbiAgICAgIGlmIChhcHAuYW5kcm9pZC5mb3JlZ3JvdW5kQWN0aXZpdHkgIT0gbnVsbCkge1xyXG4gICAgICAgIHdpbmRvdyA9IGFwcC5hbmRyb2lkLmZvcmVncm91bmRBY3Rpdml0eS5nZXRXaW5kb3coKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB3aW5kb3cgPSBhcHAuYW5kcm9pZC5zdGFydEFjdGl2aXR5LmdldFdpbmRvdygpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB3aW5kb3cuYWRkRmxhZ3MoTGF5b3V0UGFyYW1zLkZMQUdfRFJBV1NfU1lTVEVNX0JBUl9CQUNLR1JPVU5EUyk7XHJcbiAgICAgIHdpbmRvdy5zZXROYXZpZ2F0aW9uQmFyQ29sb3IoYmFyQ29sb3IuYW5kcm9pZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXRpYyBnZXRCYXJDb2xvcihjb2xvcjogc3RyaW5nIHwgQ29sb3IpOiBDb2xvciB7XHJcbiAgICBsZXQgYmFyQ29sb3I6IENvbG9yO1xyXG5cclxuICAgIGlmIChjb2xvciBpbnN0YW5jZW9mIENvbG9yID09PSBmYWxzZSkge1xyXG4gICAgICBiYXJDb2xvciA9IG5ldyBDb2xvcig8c3RyaW5nPmNvbG9yKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJhckNvbG9yID0gPENvbG9yPmNvbG9yO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGJhckNvbG9yO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAgKiBDbGVhcnMgdGhlIEFuZHJvaWQgVHJhbnNsdWNlbnQgU3RhdHVzQmFyIGZsYWdcclxuICAgICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgcmVzZXRBbmRyb2lkU3RhdHVzQmFyVHJhbnNsdWNlbnRGbGFnKCk6IHZvaWQge1xyXG4gICAgaWYgKGFwcC5hbmRyb2lkICYmIFBsYXRmb3JtLmRldmljZS5zZGtWZXJzaW9uID49IFwiMTlcIikge1xyXG4gICAgICBsZXQgd2luZG93ID0gYXBwLmFuZHJvaWQuc3RhcnRBY3Rpdml0eS5nZXRXaW5kb3coKTtcclxuICAgICAgbGV0IExheW91dFBhcmFtcyA9IDxhbnk+YW5kcm9pZC52aWV3LldpbmRvd01hbmFnZXIuTGF5b3V0UGFyYW1zO1xyXG5cclxuICAgICAgd2luZG93LmNsZWFyRmxhZ3MoTGF5b3V0UGFyYW1zLkZMQUdfVFJBTlNMVUNFTlRfU1RBVFVTKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgKiBTZXRzIHRoZSBBbmRyb2lkIG5hdmlnYXRpb24gYmFyIHRvIHRyYW5zbHVjZW50XHJcbiAgICAqIEFuZHJvaWQgQVBJID49IDE5IG9ubHlcclxuICAgICovXHJcbiAgcHVibGljIHN0YXRpYyBzZXRBbmRyb2lkTmF2QmFyVHJhbnNsdWNlbnRGbGFnKCk6IHZvaWQge1xyXG4gICAgaWYgKGFwcC5hbmRyb2lkICYmIFBsYXRmb3JtLmRldmljZS5zZGtWZXJzaW9uID49IFwiMTlcIikge1xyXG4gICAgICBsZXQgd2luZG93ID0gYXBwLmFuZHJvaWQuc3RhcnRBY3Rpdml0eS5nZXRXaW5kb3coKTtcclxuICAgICAgbGV0IExheW91dFBhcmFtcyA9IDxhbnk+YW5kcm9pZC52aWV3LldpbmRvd01hbmFnZXIuTGF5b3V0UGFyYW1zO1xyXG4gICAgICB3aW5kb3cuYWRkRmxhZ3MoTGF5b3V0UGFyYW1zLkZMQUdfVFJBTlNMVUNFTlRfTkFWSUdBVElPTik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICAqIENsZWFycyB0aGUgQW5kcm9pZCBUcmFuc2x1Y2VudCBOYXZpZ2F0aW9uQmFyIGZsYWdcclxuICAgICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgcmVzZXRBbmRyb2lkTmF2QmFyVHJhbnNsdWNlbnRGbGFnKCk6IHZvaWQge1xyXG4gICAgaWYgKGFwcC5hbmRyb2lkICYmIFBsYXRmb3JtLmRldmljZS5zZGtWZXJzaW9uID49IFwiMTlcIikge1xyXG4gICAgICBsZXQgd2luZG93ID0gYXBwLmFuZHJvaWQuc3RhcnRBY3Rpdml0eS5nZXRXaW5kb3coKTtcclxuICAgICAgbGV0IExheW91dFBhcmFtcyA9IDxhbnk+YW5kcm9pZC52aWV3LldpbmRvd01hbmFnZXIuTGF5b3V0UGFyYW1zO1xyXG4gICAgICB3aW5kb3cuY2xlYXJGbGFncyhMYXlvdXRQYXJhbXMuRkxBR19UUkFOU0xVQ0VOVF9OQVZJR0FUSU9OKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBBY3Rpb25CYXIgVXRpbGl0aWVzICovXHJcbiAgLyoqXHJcblx0ICAgKiBQcm9ncmFtbWF0aWNhbGx5IGhpZGUgdGhlIGJhY2sgYnV0dG9uIGZyb20gdGhlIEFjdGlvbkJhclxyXG5cdCAgICovXHJcbiAgcHVibGljIHN0YXRpYyBhY3Rpb25CYXJIaWRlQmFja0J1dHRvbigpIHtcclxuICAgIGlmICh0b3Btb3N0KCkuaW9zKSB7XHJcbiAgICAgIHRvcG1vc3QoKS5pb3MuY29udHJvbGxlci52aXNpYmxlVmlld0NvbnRyb2xsZXIubmF2aWdhdGlvbkl0ZW0uc2V0SGlkZXNCYWNrQnV0dG9uQW5pbWF0ZWQoXHJcbiAgICAgICAgdHJ1ZSxcclxuICAgICAgICBmYWxzZVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcblx0ICAgKiBQcm9ncmFtbWF0aWNhbGx5IHJlbW92ZSBhbGwgYnV0dG9ucyBmcm9tIHRoZSBBY3Rpb25CYXJcclxuXHQgICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgYWN0aW9uQmFyU2V0U3RhdHVzQmFyU3R5bGUoc3R5bGU6IG51bWJlcikge1xyXG4gICAgaWYgKHRvcG1vc3QoKS5pb3MpIHtcclxuICAgICAgbGV0IG5hdmlnYXRpb25CYXIgPSB0b3Btb3N0KCkuaW9zLmNvbnRyb2xsZXIubmF2aWdhdGlvbkJhcjtcclxuICAgICAgLy8gMDogZGVmYXVsdFxyXG4gICAgICAvLyAxOiBsaWdodFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyLmJhclN0eWxlID0gc3R5bGU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==