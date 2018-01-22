"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var application_settings_1 = require("application-settings");
var userToken = "token";
var email = "";
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
    BackendService = __decorate([
        core_1.Injectable()
    ], BackendService);
    return BackendService;
}());
exports.BackendService = BackendService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZEQUE0RDtBQUU1RCxJQUFNLFNBQVMsR0FBRyxPQUFPLENBQUM7QUFDMUIsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBR2pCO0lBQUE7SUFlQSxDQUFDO0lBWE0seUJBQVUsR0FBakI7UUFDRSxNQUFNLENBQUMsQ0FBQyxDQUFDLGdDQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVDLHNCQUFXLHVCQUFLO2FBQWhCO1lBQ0UsTUFBTSxDQUFDLGdDQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUIsQ0FBQzthQUNELFVBQWlCLFNBQWtCO1lBQ2pDLGdDQUFTLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7OztPQUhBO0lBUk0scUJBQU0sR0FBRywwQkFBMEIsQ0FBQztJQUZoQyxjQUFjO1FBRDFCLGlCQUFVLEVBQUU7T0FDQSxjQUFjLENBZTFCO0lBQUQscUJBQUM7Q0FBQSxBQWZELElBZUM7QUFmWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBnZXRTdHJpbmcsIHNldFN0cmluZyB9IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5cclxuY29uc3QgdXNlclRva2VuID0gXCJ0b2tlblwiO1xyXG5jb25zdCBlbWFpbCA9IFwiXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCYWNrZW5kU2VydmljZSB7XHJcblxyXG4gIHN0YXRpYyBhcGlVUkwgPSBcImh0dHA6Ly8yYjQ0YjU5Zi5uZ3Jvay5pb1wiO1xyXG5cclxuc3RhdGljIGlzTG9nZ2VkSW4oKSA6IGJvb2xlYW4ge1xyXG4gIHJldHVybiAhIWdldFN0cmluZyhcInRva2VuXCIpO1xyXG59XHJcblxyXG4gIHN0YXRpYyBnZXQgdG9rZW4oKSA6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gZ2V0U3RyaW5nKFwidG9rZW5cIik7XHJcbiAgfVxyXG4gIHN0YXRpYyBzZXQgdG9rZW4odXNlclRva2VuIDogc3RyaW5nKSB7XHJcbiAgICBzZXRTdHJpbmcoXCJ0b2tlblwiLCB1c2VyVG9rZW4pO1xyXG4gIH1cclxuXHJcbn1cclxuIl19