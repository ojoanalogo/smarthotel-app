/**
 * main.ts
 *
 * Declaraciones e inicializar el modulo app con NativeScript
 *
 * @author Alfonso Reyes Cortés | hola@mrarc.xyz
 * @version 0.0.1
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
* Imports
*/
var platform_1 = require("nativescript-angular/platform");
var app_module_1 = require("./app.module");
var statusbar_1 = require("./utilidades/statusbar");
statusbar_1.statusbarTransparente();
platform_1.platformNativeScriptDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7R0FPRzs7O0FBRUg7O0VBRUU7QUFDRiwwREFBNEU7QUFDNUUsMkNBQXlDO0FBQ3pDLG9EQUErRDtBQUMvRCxpQ0FBcUIsRUFBRSxDQUFDO0FBQ3hCLHNDQUEyQixFQUFFLENBQUMsZUFBZSxDQUFDLHNCQUFTLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG7CoCogbWFpbi50c1xyXG7CoCpcclxuwqAqIERlY2xhcmFjaW9uZXMgZSBpbmljaWFsaXphciBlbCBtb2R1bG8gYXBwIGNvbiBOYXRpdmVTY3JpcHRcclxuwqAqXHJcbsKgKiBAYXV0aG9yIEFsZm9uc28gUmV5ZXMgQ29ydMOpcyB8IGhvbGFAbXJhcmMueHl6XHJcbiAqIEB2ZXJzaW9uIDAuMC4xXHJcbsKgKi9cclxuXHJcbi8qKlxyXG4qIEltcG9ydHNcclxuKi9cclxuaW1wb3J0IHsgcGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtXCI7XHJcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gXCIuL2FwcC5tb2R1bGVcIjtcclxuaW1wb3J0IHsgc3RhdHVzYmFyVHJhbnNwYXJlbnRlIH0gZnJvbSBcIi4vdXRpbGlkYWRlcy9zdGF0dXNiYXJcIjtcclxuc3RhdHVzYmFyVHJhbnNwYXJlbnRlKCk7XHJcbnBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xyXG4iXX0=