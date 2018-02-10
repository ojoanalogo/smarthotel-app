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
    Object.defineProperty(BackendService, "fcmToken", {
        get: function () {
            return application_settings_1.getString("fcmToken");
        },
        set: function (fcmToken) {
            application_settings_1.setString("fcmToken", fcmToken);
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
    BackendService.apiURL = "http://f8ffeb2a.ngrok.io";
    BackendService.placesGoogleURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
    BackendService.photosGoogleURL = "https://maps.googleapis.com/maps/api/place/photo?";
    BackendService.weatherURL = "https://api.openweathermap.org/data/2.5/";
    BackendService = __decorate([
        core_1.Injectable()
    ], BackendService);
    return BackendService;
}());
exports.BackendService = BackendService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZEQUE0RDtBQUU1RCxJQUFNLFNBQVMsR0FBRyxPQUFPLENBQUM7QUFHMUI7SUFBQTtJQW1DQSxDQUFDO0lBNUJRLHlCQUFVLEdBQWpCO1FBQ0UsTUFBTSxDQUFDLENBQUMsQ0FBQyxnQ0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxzQkFBVyx1QkFBSzthQUFoQjtZQUNFLE1BQU0sQ0FBQyxnQ0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVCLENBQUM7YUFFRCxVQUFpQixTQUFpQjtZQUNoQyxnQ0FBUyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNoQyxDQUFDOzs7T0FKQTtJQU1ELHNCQUFXLDBCQUFRO2FBSW5CO1lBQ0UsTUFBTSxDQUFDLGdDQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0IsQ0FBQzthQU5ELFVBQW9CLFFBQWlCO1lBQ25DLGdDQUFTLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2xDLENBQUM7OztPQUFBO0lBT0Qsc0JBQVcsMEJBQVE7YUFBbkI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDM0MsQ0FBQzthQUVELFVBQW9CLElBQVc7WUFDN0IsZ0NBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzlDLENBQUM7OztPQUpBO0lBNUJNLHFCQUFNLEdBQUcsMEJBQTBCLENBQUM7SUFDcEMsOEJBQWUsR0FBRywrREFBK0QsQ0FBQztJQUNsRiw4QkFBZSxHQUFHLG1EQUFtRCxDQUFDO0lBQ3RFLHlCQUFVLEdBQUcsMENBQTBDLENBQUM7SUFMcEQsY0FBYztRQUQxQixpQkFBVSxFQUFFO09BQ0EsY0FBYyxDQW1DMUI7SUFBRCxxQkFBQztDQUFBLEFBbkNELElBbUNDO0FBbkNZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IGdldFN0cmluZywgc2V0U3RyaW5nIH0gZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vbW9kZWxzL3VzZXIubW9kZWxcIjtcclxuY29uc3QgdXNlclRva2VuID0gXCJ0b2tlblwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQmFja2VuZFNlcnZpY2Uge1xyXG5cclxuICBzdGF0aWMgYXBpVVJMID0gXCJodHRwOi8vZjhmZmViMmEubmdyb2suaW9cIjtcclxuICBzdGF0aWMgcGxhY2VzR29vZ2xlVVJMID0gXCJodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvcGxhY2UvbmVhcmJ5c2VhcmNoL2pzb24/XCI7XHJcbiAgc3RhdGljIHBob3Rvc0dvb2dsZVVSTCA9IFwiaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL3BsYWNlL3Bob3RvP1wiO1xyXG4gIHN0YXRpYyB3ZWF0aGVyVVJMID0gXCJodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvXCI7XHJcblxyXG4gIHN0YXRpYyBpc0xvZ2dlZEluKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEhZ2V0U3RyaW5nKFwidG9rZW5cIik7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IHRva2VuKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gZ2V0U3RyaW5nKFwidG9rZW5cIik7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc2V0IHRva2VuKHVzZXJUb2tlbjogc3RyaW5nKSB7XHJcbiAgICBzZXRTdHJpbmcoXCJ0b2tlblwiLCB1c2VyVG9rZW4pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHNldCBmY21Ub2tlbihmY21Ub2tlbiA6IHN0cmluZykge1xyXG4gICAgc2V0U3RyaW5nKFwiZmNtVG9rZW5cIiwgZmNtVG9rZW4pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBmY21Ub2tlbigpIDogc3RyaW5nIHtcclxuICAgIHJldHVybiBnZXRTdHJpbmcoXCJmY21Ub2tlblwiKTtcclxuICB9XHJcblxyXG5cclxuICBzdGF0aWMgZ2V0IHVzZXJEYXRhKCk6IFVzZXIge1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UoZ2V0U3RyaW5nKFwidXNlckRhdGFcIikpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHNldCB1c2VyRGF0YSh1c2VyIDogVXNlcikge1xyXG4gICAgc2V0U3RyaW5nKFwidXNlckRhdGFcIiwgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xyXG4gIH1cclxufVxyXG4iXX0=