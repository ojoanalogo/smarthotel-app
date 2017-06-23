/**
 * main.ts
 *
 * Declaraciones e inicializar el modulo app con NativeScript
 *
 * @author Alfonso Reyes Cortés | hola@mrarc.xyz
 * @version 0.0.1
 */

/**
* Imports
*/
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";
//import { statusbarTransparente } from "./statusbar";
//statusbarTransparente();
platformNativeScriptDynamic().bootstrapModule(AppModule);
