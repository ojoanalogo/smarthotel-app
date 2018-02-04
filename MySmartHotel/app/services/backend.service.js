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
    Object.defineProperty(BackendService, "userData", {
        get: function () {
            return JSON.parse(application_settings_1.getString("userData"));
        },
        set: function (user) {
            application_settings_1.setString("userData", JSON.stringify(user));
        },
        enumerable: true,
        configurable: true
    });
    BackendService.apiURL = "http://b3fbcd86.ngrok.io";
    BackendService.placesGoogleURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
    BackendService.photosGoogleURL = "https://maps.googleapis.com/maps/api/place/photo?";
    BackendService.weatherURL = "https://api.openweathermap.org/data/2.5/";
    BackendService = __decorate([
        core_1.Injectable()
    ], BackendService);
    return BackendService;
}());
exports.BackendService = BackendService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZEQUE0RDtBQUU1RCxJQUFNLFNBQVMsR0FBRyxPQUFPLENBQUM7QUFHMUI7SUFBQTtJQTBCQSxDQUFDO0lBbkJRLHlCQUFVLEdBQWpCO1FBQ0UsTUFBTSxDQUFDLENBQUMsQ0FBQyxnQ0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxzQkFBVyx1QkFBSzthQUFoQjtZQUNFLE1BQU0sQ0FBQyxnQ0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVCLENBQUM7YUFFRCxVQUFpQixTQUFpQjtZQUNoQyxnQ0FBUyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNoQyxDQUFDOzs7T0FKQTtJQU1ELHNCQUFXLDBCQUFRO2FBQW5CO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQzNDLENBQUM7YUFFRCxVQUFvQixJQUFXO1lBQzdCLGdDQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUM5QyxDQUFDOzs7T0FKQTtJQW5CTSxxQkFBTSxHQUFHLDBCQUEwQixDQUFDO0lBQ3BDLDhCQUFlLEdBQUcsK0RBQStELENBQUM7SUFDbEYsOEJBQWUsR0FBRyxtREFBbUQsQ0FBQztJQUN0RSx5QkFBVSxHQUFHLDBDQUEwQyxDQUFDO0lBTHBELGNBQWM7UUFEMUIsaUJBQVUsRUFBRTtPQUNBLGNBQWMsQ0EwQjFCO0lBQUQscUJBQUM7Q0FBQSxBQTFCRCxJQTBCQztBQTFCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBnZXRTdHJpbmcsIHNldFN0cmluZyB9IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL21vZGVscy91c2VyLm1vZGVsXCI7XHJcbmNvbnN0IHVzZXJUb2tlbiA9IFwidG9rZW5cIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJhY2tlbmRTZXJ2aWNlIHtcclxuXHJcbiAgc3RhdGljIGFwaVVSTCA9IFwiaHR0cDovL2IzZmJjZDg2Lm5ncm9rLmlvXCI7XHJcbiAgc3RhdGljIHBsYWNlc0dvb2dsZVVSTCA9IFwiaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL3BsYWNlL25lYXJieXNlYXJjaC9qc29uP1wiO1xyXG4gIHN0YXRpYyBwaG90b3NHb29nbGVVUkwgPSBcImh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9wbGFjZS9waG90bz9cIjtcclxuICBzdGF0aWMgd2VhdGhlclVSTCA9IFwiaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L1wiO1xyXG5cclxuICBzdGF0aWMgaXNMb2dnZWRJbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhIWdldFN0cmluZyhcInRva2VuXCIpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCB0b2tlbigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGdldFN0cmluZyhcInRva2VuXCIpO1xyXG4gIH1cclxuICBcclxuICBzdGF0aWMgc2V0IHRva2VuKHVzZXJUb2tlbjogc3RyaW5nKSB7XHJcbiAgICBzZXRTdHJpbmcoXCJ0b2tlblwiLCB1c2VyVG9rZW4pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCB1c2VyRGF0YSgpOiBVc2VyIHtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKGdldFN0cmluZyhcInVzZXJEYXRhXCIpKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzZXQgdXNlckRhdGEodXNlciA6IFVzZXIpIHtcclxuICAgIHNldFN0cmluZyhcInVzZXJEYXRhXCIsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcclxuICB9XHJcbn1cclxuIl19