"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var application_settings_1 = require("application-settings");
var userToken = "token";
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
    BackendService.apiURL = "http://77e4b7d8.ngrok.io";
    BackendService.fbURL = "https://graph.facebook.com/v2.9/";
    BackendService.weatherURL = "https://api.openweathermap.org/data/2.5/";
    BackendService = __decorate([
        core_1.Injectable()
    ], BackendService);
    return BackendService;
}());
exports.BackendService = BackendService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZEQUE0RDtBQUU1RCxJQUFNLFNBQVMsR0FBRyxPQUFPLENBQUM7QUFHMUI7SUFBQTtJQWlCQSxDQUFDO0lBWE0seUJBQVUsR0FBakI7UUFDRSxNQUFNLENBQUMsQ0FBQyxDQUFDLGdDQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVDLHNCQUFXLHVCQUFLO2FBQWhCO1lBQ0UsTUFBTSxDQUFDLGdDQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUIsQ0FBQzthQUNELFVBQWlCLFNBQWtCO1lBQ2pDLGdDQUFTLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7OztPQUhBO0lBVk0scUJBQU0sR0FBRywwQkFBMEIsQ0FBQztJQUNwQyxvQkFBSyxHQUFHLGtDQUFrQyxDQUFDO0lBQzNDLHlCQUFVLEdBQUcsMENBQTBDLENBQUM7SUFKcEQsY0FBYztRQUQxQixpQkFBVSxFQUFFO09BQ0EsY0FBYyxDQWlCMUI7SUFBRCxxQkFBQztDQUFBLEFBakJELElBaUJDO0FBakJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IGdldFN0cmluZywgc2V0U3RyaW5nIH0gZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcblxyXG5jb25zdCB1c2VyVG9rZW4gPSBcInRva2VuXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCYWNrZW5kU2VydmljZSB7XHJcblxyXG4gIHN0YXRpYyBhcGlVUkwgPSBcImh0dHA6Ly83N2U0YjdkOC5uZ3Jvay5pb1wiO1xyXG4gIHN0YXRpYyBmYlVSTCA9IFwiaHR0cHM6Ly9ncmFwaC5mYWNlYm9vay5jb20vdjIuOS9cIjtcclxuICBzdGF0aWMgd2VhdGhlclVSTCA9IFwiaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L1wiO1xyXG5cclxuc3RhdGljIGlzTG9nZ2VkSW4oKSA6IGJvb2xlYW4ge1xyXG4gIHJldHVybiAhIWdldFN0cmluZyhcInRva2VuXCIpO1xyXG59XHJcblxyXG4gIHN0YXRpYyBnZXQgdG9rZW4oKSA6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gZ2V0U3RyaW5nKFwidG9rZW5cIik7XHJcbiAgfVxyXG4gIHN0YXRpYyBzZXQgdG9rZW4odXNlclRva2VuIDogc3RyaW5nKSB7XHJcbiAgICBzZXRTdHJpbmcoXCJ0b2tlblwiLCB1c2VyVG9rZW4pO1xyXG4gIH1cclxuXHJcbn1cclxuIl19