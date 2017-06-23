/**
 * sidedrawer.ts
 *
 * Manejo del sidedrawer y crearlo
 *
 * @author Alfonso Reyes Cortés | hola@mrarc.xyz
 * @version 0.0.1
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
* Imports
*/
var nativescript_sidedrawer_1 = require("nativescript-sidedrawer");
var colorModule = require("tns-core-modules/color");
var Sidedrawer = (function () {
    function Sidedrawer() {
    }
    Sidedrawer.prototype.construir = function () {
        nativescript_sidedrawer_1.TnsSideDrawer.build({
            templates: [{
                    title: 'Home',
                }, {
                    title: 'Judgment Day',
                }, {
                    title: 'Bank Roll',
                }, {
                    title: 'Fix Stuff',
                }, {
                    title: 'This Is Me',
                }],
            title: 'This App Name',
            subtitle: 'is just as awesome as this subtitle!',
            headerBackgroundColor: new colorModule.Color("#0097A7"),
            backgroundColor: new colorModule.Color("#fff"),
            textColor: new colorModule.Color("#000"),
            listener: function (index) {
                //this.i = index
            },
            context: this,
        });
    };
    Sidedrawer.prototype.abrir = function () {
        nativescript_sidedrawer_1.TnsSideDrawer.toggle();
    };
    return Sidedrawer;
}());
exports.Sidedrawer = Sidedrawer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWRyYXdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZGVkcmF3ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7R0FPRzs7O0FBRUg7O0VBRUU7QUFDRixtRUFBd0Q7QUFDeEQsb0RBQXNEO0FBRXREO0lBQUE7SUE4QkEsQ0FBQztJQTVCQyw4QkFBUyxHQUFUO1FBQ0EsdUNBQWEsQ0FBQyxLQUFLLENBQUM7WUFDckIsU0FBUyxFQUFFLENBQUM7b0JBQ1gsS0FBSyxFQUFFLE1BQU07aUJBQ2IsRUFBRTtvQkFDRixLQUFLLEVBQUUsY0FBYztpQkFDckIsRUFBRTtvQkFDRixLQUFLLEVBQUUsV0FBVztpQkFDbEIsRUFBRTtvQkFDRixLQUFLLEVBQUUsV0FBVztpQkFDbEIsRUFBRTtvQkFDRixLQUFLLEVBQUUsWUFBWTtpQkFDbkIsQ0FBQztZQUNGLEtBQUssRUFBRSxlQUFlO1lBQ3RCLFFBQVEsRUFBRSxzQ0FBc0M7WUFDL0MscUJBQXFCLEVBQUUsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztZQUN2RCxlQUFlLEVBQUUsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUM5QyxTQUFTLEVBQUUsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUN6QyxRQUFRLEVBQUUsVUFBQyxLQUFLO2dCQUNmLGdCQUFnQjtZQUNqQixDQUFDO1lBQ0QsT0FBTyxFQUFFLElBQUk7U0FDYixDQUFDLENBQUE7SUFDRixDQUFDO0lBRUQsMEJBQUssR0FBTDtRQUNFLHVDQUFhLENBQUMsTUFBTSxFQUFFLENBQUE7SUFDeEIsQ0FBQztJQUNELGlCQUFDO0FBQUQsQ0FBQyxBQTlCRCxJQThCQztBQTlCWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG7CoCogc2lkZWRyYXdlci50c1xyXG7CoCpcclxuwqAqIE1hbmVqbyBkZWwgc2lkZWRyYXdlciB5IGNyZWFybG9cclxuICpcclxuwqAqIEBhdXRob3IgQWxmb25zbyBSZXllcyBDb3J0w6lzIHwgaG9sYUBtcmFyYy54eXpcclxuICogQHZlcnNpb24gMC4wLjFcclxuwqAqL1xyXG5cclxuLyoqXHJcbiogSW1wb3J0c1xyXG4qL1xyXG5pbXBvcnQgeyBUbnNTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXNpZGVkcmF3ZXInO1xyXG5pbXBvcnQgKiBhcyBjb2xvck1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9jb2xvclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNpZGVkcmF3ZXIge1xyXG5cclxuICBjb25zdHJ1aXIgKCkge1xyXG4gIFRuc1NpZGVEcmF3ZXIuYnVpbGQoe1xyXG5cdHRlbXBsYXRlczogW3tcclxuXHRcdHRpdGxlOiAnSG9tZScsXHJcblx0fSwge1xyXG5cdFx0dGl0bGU6ICdKdWRnbWVudCBEYXknLFxyXG5cdH0sIHtcclxuXHRcdHRpdGxlOiAnQmFuayBSb2xsJyxcclxuXHR9LCB7XHJcblx0XHR0aXRsZTogJ0ZpeCBTdHVmZicsXHJcblx0fSwge1xyXG5cdFx0dGl0bGU6ICdUaGlzIElzIE1lJyxcclxuXHR9XSxcclxuXHR0aXRsZTogJ1RoaXMgQXBwIE5hbWUnLFxyXG5cdHN1YnRpdGxlOiAnaXMganVzdCBhcyBhd2Vzb21lIGFzIHRoaXMgc3VidGl0bGUhJyxcclxuICBoZWFkZXJCYWNrZ3JvdW5kQ29sb3I6IG5ldyBjb2xvck1vZHVsZS5Db2xvcihcIiMwMDk3QTdcIiksXHJcbiAgYmFja2dyb3VuZENvbG9yOiBuZXcgY29sb3JNb2R1bGUuQ29sb3IoXCIjZmZmXCIpLFxyXG4gIHRleHRDb2xvcjogbmV3IGNvbG9yTW9kdWxlLkNvbG9yKFwiIzAwMFwiKSxcclxuXHRsaXN0ZW5lcjogKGluZGV4KSA9PiB7XHJcblx0XHQvL3RoaXMuaSA9IGluZGV4XHJcblx0fSxcclxuXHRjb250ZXh0OiB0aGlzLFxyXG59KVxyXG59XHJcblxyXG5hYnJpcigpIHtcclxuICBUbnNTaWRlRHJhd2VyLnRvZ2dsZSgpXHJcbn1cclxufVxyXG4iXX0=