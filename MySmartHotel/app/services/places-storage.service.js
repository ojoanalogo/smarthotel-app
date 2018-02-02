"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var application_settings_1 = require("application-settings");
var PlacesStorage = (function () {
    function PlacesStorage() {
    }
    Object.defineProperty(PlacesStorage, "token", {
        get: function () {
            return application_settings_1.getString("token");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PlacesStorage, "places", {
        set: function (userToken) {
            application_settings_1.setString("places", userToken);
        },
        enumerable: true,
        configurable: true
    });
    PlacesStorage = __decorate([
        core_1.Injectable()
    ], PlacesStorage);
    return PlacesStorage;
}());
exports.PlacesStorage = PlacesStorage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2VzLXN0b3JhZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBsYWNlcy1zdG9yYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkRBQTREO0FBRzVEO0lBQUE7SUFTQSxDQUFDO0lBUEMsc0JBQVcsc0JBQUs7YUFBaEI7WUFDRSxNQUFNLENBQUMsZ0NBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QixDQUFDOzs7T0FBQTtJQUNELHNCQUFXLHVCQUFNO2FBQWpCLFVBQWtCLFNBQWtCO1lBQ2xDLGdDQUFTLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ2pDLENBQUM7OztPQUFBO0lBUFUsYUFBYTtRQUR6QixpQkFBVSxFQUFFO09BQ0EsYUFBYSxDQVN6QjtJQUFELG9CQUFDO0NBQUEsQUFURCxJQVNDO0FBVFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgZ2V0U3RyaW5nLCBzZXRTdHJpbmcgfSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFBsYWNlc1N0b3JhZ2Uge1xyXG5cclxuICBzdGF0aWMgZ2V0IHRva2VuKCkgOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGdldFN0cmluZyhcInRva2VuXCIpO1xyXG4gIH1cclxuICBzdGF0aWMgc2V0IHBsYWNlcyh1c2VyVG9rZW4gOiBzdHJpbmcpIHtcclxuICAgIHNldFN0cmluZyhcInBsYWNlc1wiLCB1c2VyVG9rZW4pO1xyXG4gIH1cclxuXHJcbn1cclxuIl19