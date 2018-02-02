"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Place = (function () {
    function Place(place_id, name, location, placeType, photoReference) {
        this.place_id = place_id;
        this.name = name;
        this.location = location;
        this.placeType = placeType;
        this.photoReference = photoReference;
    }
    return Place;
}());
exports.Place = Place;
var PlaceType;
(function (PlaceType) {
    PlaceType["PARK"] = "park";
    PlaceType["RESTAURANT"] = "restaurant";
    PlaceType["MUSEUM"] = "museum";
    PlaceType["ART_GALLERY"] = "art_gallery";
    PlaceType["CAFE"] = "cafe";
    PlaceType["CASINO"] = "casino";
    PlaceType["ZOO"] = "zoo";
    PlaceType["SHOPPING_MALL"] = "shopping_mall";
    PlaceType["BAR"] = "bar";
    PlaceType["NIGHT_CLUB"] = "night_club";
    PlaceType["POINT_OF_INTEREST"] = "point_of_interest";
})(PlaceType = exports.PlaceType || (exports.PlaceType = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2UubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwbGFjZS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0lBQ0UsZUFBb0IsUUFBZ0IsRUFBUyxJQUFZLEVBQ2hELFFBQWlCLEVBQVMsU0FBcUIsRUFBUyxjQUF1QjtRQURwRSxhQUFRLEdBQVIsUUFBUSxDQUFRO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNoRCxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQVMsY0FBUyxHQUFULFNBQVMsQ0FBWTtRQUFTLG1CQUFjLEdBQWQsY0FBYyxDQUFTO0lBQUcsQ0FBQztJQUM5RixZQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7QUFIWSxzQkFBSztBQUlsQixJQUFZLFNBWVg7QUFaRCxXQUFZLFNBQVM7SUFDbkIsMEJBQWEsQ0FBQTtJQUNiLHNDQUF5QixDQUFBO0lBQ3pCLDhCQUFpQixDQUFBO0lBQ2pCLHdDQUEyQixDQUFBO0lBQzNCLDBCQUFhLENBQUE7SUFDYiw4QkFBaUIsQ0FBQTtJQUNqQix3QkFBVyxDQUFBO0lBQ1gsNENBQStCLENBQUE7SUFDL0Isd0JBQVcsQ0FBQTtJQUNYLHNDQUF5QixDQUFBO0lBQ3pCLG9EQUF1QyxDQUFBO0FBQ3pDLENBQUMsRUFaVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQVlwQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBQbGFjZSB7XHJcbiAgY29uc3RydWN0b3IgKHB1YmxpYyBwbGFjZV9pZDogc3RyaW5nLCBwdWJsaWMgbmFtZTogc3RyaW5nLFxyXG4gICAgcHVibGljIGxvY2F0aW9uIDogc3RyaW5nLCBwdWJsaWMgcGxhY2VUeXBlIDogUGxhY2VUeXBlLCBwdWJsaWMgcGhvdG9SZWZlcmVuY2UgOiBzdHJpbmcpIHt9XHJcbn1cclxuZXhwb3J0IGVudW0gUGxhY2VUeXBlIHtcclxuICBQQVJLID0gXCJwYXJrXCIsXHJcbiAgUkVTVEFVUkFOVCA9IFwicmVzdGF1cmFudFwiLFxyXG4gIE1VU0VVTSA9IFwibXVzZXVtXCIsXHJcbiAgQVJUX0dBTExFUlkgPSBcImFydF9nYWxsZXJ5XCIsXHJcbiAgQ0FGRSA9IFwiY2FmZVwiLFxyXG4gIENBU0lOTyA9IFwiY2FzaW5vXCIsXHJcbiAgWk9PID0gXCJ6b29cIixcclxuICBTSE9QUElOR19NQUxMID0gXCJzaG9wcGluZ19tYWxsXCIsXHJcbiAgQkFSID0gXCJiYXJcIixcclxuICBOSUdIVF9DTFVCID0gXCJuaWdodF9jbHViXCIsXHJcbiAgUE9JTlRfT0ZfSU5URVJFU1QgPSBcInBvaW50X29mX2ludGVyZXN0XCJcclxufVxyXG4iXX0=