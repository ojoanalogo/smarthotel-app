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
    BackendService.apiURL = "http://2b44b59f.ngrok.io";
    BackendService.fbURL = "https://graph.facebook.com/v2.9";
    BackendService = __decorate([
        core_1.Injectable()
    ], BackendService);
    return BackendService;
}());
exports.BackendService = BackendService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZEQUE0RDtBQUU1RCxJQUFNLFNBQVMsR0FBRyxPQUFPLENBQUM7QUFHMUI7SUFBQTtJQWdCQSxDQUFDO0lBWE0seUJBQVUsR0FBakI7UUFDRSxNQUFNLENBQUMsQ0FBQyxDQUFDLGdDQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVDLHNCQUFXLHVCQUFLO2FBQWhCO1lBQ0UsTUFBTSxDQUFDLGdDQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUIsQ0FBQzthQUNELFVBQWlCLFNBQWtCO1lBQ2pDLGdDQUFTLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7OztPQUhBO0lBVE0scUJBQU0sR0FBRywwQkFBMEIsQ0FBQztJQUNwQyxvQkFBSyxHQUFHLGlDQUFpQyxDQUFDO0lBSHRDLGNBQWM7UUFEMUIsaUJBQVUsRUFBRTtPQUNBLGNBQWMsQ0FnQjFCO0lBQUQscUJBQUM7Q0FBQSxBQWhCRCxJQWdCQztBQWhCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBnZXRTdHJpbmcsIHNldFN0cmluZyB9IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5cclxuY29uc3QgdXNlclRva2VuID0gXCJ0b2tlblwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQmFja2VuZFNlcnZpY2Uge1xyXG5cclxuICBzdGF0aWMgYXBpVVJMID0gXCJodHRwOi8vMmI0NGI1OWYubmdyb2suaW9cIjtcclxuICBzdGF0aWMgZmJVUkwgPSBcImh0dHBzOi8vZ3JhcGguZmFjZWJvb2suY29tL3YyLjlcIjtcclxuXHJcbnN0YXRpYyBpc0xvZ2dlZEluKCkgOiBib29sZWFuIHtcclxuICByZXR1cm4gISFnZXRTdHJpbmcoXCJ0b2tlblwiKTtcclxufVxyXG5cclxuICBzdGF0aWMgZ2V0IHRva2VuKCkgOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGdldFN0cmluZyhcInRva2VuXCIpO1xyXG4gIH1cclxuICBzdGF0aWMgc2V0IHRva2VuKHVzZXJUb2tlbiA6IHN0cmluZykge1xyXG4gICAgc2V0U3RyaW5nKFwidG9rZW5cIiwgdXNlclRva2VuKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==