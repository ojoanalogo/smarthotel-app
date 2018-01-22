"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var application_settings_1 = require("application-settings");
var BackendService = (function () {
    function BackendService() {
    }
    BackendService.isLoggedIn = function () {
        return !!application_settings_1.getString("token");
    };
    Object.defineProperty(BackendService, "token", {
        get: function () {
            return application_settings_1.getString("token");
        },
        set: function (userToken) {
            application_settings_1.setString("token", userToken);
        },
        enumerable: true,
        configurable: true
    });
    BackendService.apiURL = "http://2b44b59f.ngrok.io";
    BackendService.fbURL = "https://graph.facebook.com/v2.9";
    BackendService = __decorate([
        core_1.Injectable()
    ], BackendService);
    return BackendService;
}());
exports.BackendService = BackendService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2VzU3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGxhY2VzU3RvcmFnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZEQUE0RDtBQUc1RDtJQUFBO0lBZ0JBLENBQUM7SUFYTSx5QkFBVSxHQUFqQjtRQUNFLE1BQU0sQ0FBQyxDQUFDLENBQUMsZ0NBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUMsc0JBQVcsdUJBQUs7YUFBaEI7WUFDRSxNQUFNLENBQUMsZ0NBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QixDQUFDO2FBQ0QsVUFBaUIsU0FBa0I7WUFDakMsZ0NBQVMsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDaEMsQ0FBQzs7O09BSEE7SUFUTSxxQkFBTSxHQUFHLDBCQUEwQixDQUFDO0lBQ3BDLG9CQUFLLEdBQUcsaUNBQWlDLENBQUM7SUFIdEMsY0FBYztRQUQxQixpQkFBVSxFQUFFO09BQ0EsY0FBYyxDQWdCMUI7SUFBRCxxQkFBQztDQUFBLEFBaEJELElBZ0JDO0FBaEJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IGdldFN0cmluZywgc2V0U3RyaW5nIH0gZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCYWNrZW5kU2VydmljZSB7XHJcblxyXG4gIHN0YXRpYyBhcGlVUkwgPSBcImh0dHA6Ly8yYjQ0YjU5Zi5uZ3Jvay5pb1wiO1xyXG4gIHN0YXRpYyBmYlVSTCA9IFwiaHR0cHM6Ly9ncmFwaC5mYWNlYm9vay5jb20vdjIuOVwiO1xyXG5cclxuc3RhdGljIGlzTG9nZ2VkSW4oKSA6IGJvb2xlYW4ge1xyXG4gIHJldHVybiAhIWdldFN0cmluZyhcInRva2VuXCIpO1xyXG59XHJcblxyXG4gIHN0YXRpYyBnZXQgdG9rZW4oKSA6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gZ2V0U3RyaW5nKFwidG9rZW5cIik7XHJcbiAgfVxyXG4gIHN0YXRpYyBzZXQgdG9rZW4odXNlclRva2VuIDogc3RyaW5nKSB7XHJcbiAgICBzZXRTdHJpbmcoXCJ0b2tlblwiLCB1c2VyVG9rZW4pO1xyXG4gIH1cclxuXHJcbn1cclxuIl19