/**
@name: MySmartHotel
@author: Alfonso Reyes Cortés (arc980103@gmail.com)
@desc: Archivo principal de la aplicación, aquí se inicializa Angular y sus modulos
**/

// Imports del modulo
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";
import { BackendService } from "./services/backend.service";
import * as dialogs from "ui/dialogs";
const firebase = require("nativescript-plugin-firebase");

/**
* Inicializa Firebase, cada vez que el token cambia se guarda en la base de datos local
*/
firebase.init({
  onPushTokenReceivedCallback: function(token) {
    BackendService.fcmToken = token;
       console.log("Firebase push token: " + token);
     },
     // Callback al recibir mensaje push
     onMessageReceivedCallback: (msg) => {
       dialogs.alert({
    title: msg.title,
    message: msg.body,
    okButtonText: "Enterado"
  });
  }
}).then(
  instance => {
    console.log("firebase.init done");
  },
  error => {
    console.log(`firebase.init error: ${error}`);
  }
);

// Inicializar modulo Angular
platformNativeScriptDynamic().bootstrapModule(AppModule);
