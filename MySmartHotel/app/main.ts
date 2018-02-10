import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";
import { BackendService } from "./services/backend.service";
import * as dialogs from "ui/dialogs";
const firebase = require("nativescript-plugin-firebase");

firebase.init({
  onPushTokenReceivedCallback: function(token) {
    BackendService.fcmToken = token;
       console.log("Firebase push token: " + token);
     },
     onMessageReceivedCallback: (message) => {
       dialogs.alert({
    title: message.title,
    message: message.body,
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
platformNativeScriptDynamic().bootstrapModule(AppModule);
