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
    BackendService.apiURL = "http://66069d0d.ngrok.io";
    BackendService.placesGoogleURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
    BackendService.photosGoogleURL = "https://maps.googleapis.com/maps/api/place/photo?";
    BackendService.weatherURL = "https://api.openweathermap.org/data/2.5/";
    BackendService = __decorate([
        core_1.Injectable()
    ], BackendService);
    return BackendService;
}());
exports.BackendService = BackendService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZEQUE0RDtBQUU1RCxJQUFNLFNBQVMsR0FBRyxPQUFPLENBQUM7QUFHMUI7SUFBQTtJQWtCQSxDQUFDO0lBWFEseUJBQVUsR0FBakI7UUFDRSxNQUFNLENBQUMsQ0FBQyxDQUFDLGdDQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELHNCQUFXLHVCQUFLO2FBQWhCO1lBQ0UsTUFBTSxDQUFDLGdDQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUIsQ0FBQzthQUNELFVBQWlCLFNBQWlCO1lBQ2hDLGdDQUFTLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7OztPQUhBO0lBWE0scUJBQU0sR0FBRywwQkFBMEIsQ0FBQztJQUNwQyw4QkFBZSxHQUFHLCtEQUErRCxDQUFDO0lBQ2xGLDhCQUFlLEdBQUcsbURBQW1ELENBQUM7SUFDdEUseUJBQVUsR0FBRywwQ0FBMEMsQ0FBQztJQUxwRCxjQUFjO1FBRDFCLGlCQUFVLEVBQUU7T0FDQSxjQUFjLENBa0IxQjtJQUFELHFCQUFDO0NBQUEsQUFsQkQsSUFrQkM7QUFsQlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgZ2V0U3RyaW5nLCBzZXRTdHJpbmcgfSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuXHJcbmNvbnN0IHVzZXJUb2tlbiA9IFwidG9rZW5cIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJhY2tlbmRTZXJ2aWNlIHtcclxuXHJcbiAgc3RhdGljIGFwaVVSTCA9IFwiaHR0cDovLzY2MDY5ZDBkLm5ncm9rLmlvXCI7XHJcbiAgc3RhdGljIHBsYWNlc0dvb2dsZVVSTCA9IFwiaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL3BsYWNlL25lYXJieXNlYXJjaC9qc29uP1wiO1xyXG4gIHN0YXRpYyBwaG90b3NHb29nbGVVUkwgPSBcImh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9wbGFjZS9waG90bz9cIjtcclxuICBzdGF0aWMgd2VhdGhlclVSTCA9IFwiaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L1wiO1xyXG5cclxuICBzdGF0aWMgaXNMb2dnZWRJbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhIWdldFN0cmluZyhcInRva2VuXCIpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCB0b2tlbigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGdldFN0cmluZyhcInRva2VuXCIpO1xyXG4gIH1cclxuICBzdGF0aWMgc2V0IHRva2VuKHVzZXJUb2tlbjogc3RyaW5nKSB7XHJcbiAgICBzZXRTdHJpbmcoXCJ0b2tlblwiLCB1c2VyVG9rZW4pO1xyXG4gIH1cclxuXHJcbn1cclxuIl19