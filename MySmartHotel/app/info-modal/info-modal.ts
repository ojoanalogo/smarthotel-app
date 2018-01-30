import { Component } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { Page } from "ui/page";
import { Color } from "tns-core-modules/color";
import * as utils from 'utils/utils';
import { openUrl } from "tns-core-modules/utils/utils";
import { Place } from "../models/place.model";
import { Location } from "../models/location.model"
import { LocationService } from "../services/location.service";
import { Directions } from "nativescript-directions";
import { TNSFancyAlert } from 'nativescript-fancyalert';
import { SnackBar } from "nativescript-snackbar";

const pageCommon = require("tns-core-modules/ui/page/page-common").PageBase;

@Component({
  moduleId: module.id,
  templateUrl: "./info-modal.html",
  styleUrls: [
    "./info-modal-common.css",
    "./info-modal.css"
  ]
})
export class InfoModalComponent {
  placeInfo: Place;
  directions: Directions;
  snackBar: SnackBar;
  constructor(private params: ModalDialogParams,
    private page: Page, private locationServices: LocationService) {
    this.directions = new Directions();
    this.placeInfo = params.context;
    this.page.on("unloaded", () => {
      this.params.closeCallback();
    });
    this.page.backgroundColor = new Color(50, 0, 0, 0);
    this.snackBar = new SnackBar();
    // if (page.ios) {
    //
    //   // iOS by default won't let us have a transparent background on a modal
    //   // Ugly workaround from: https://github.com/NativeScript/nativescript/issues/2086#issuecomment-221956483
    //   // this.page.backgroundColor = new Color(50, 0, 0, 0);
    //
    //   (<any>page)._showNativeModalView = function (parent, context, closeCallback, fullscreen) {
    //     pageCommon.prototype._showNativeModalView.call(this, parent, context, closeCallback, fullscreen);
    //     let that = this;
    //
    //     // noinspection JSUnusedGlobalSymbols
    //     this._modalParent = parent;
    //
    //     if (fullscreen) {
    //       this._ios.modalPresentationStyle = 0;
    //     } else {
    //       this._ios.modalPresentationStyle = 2;
    //       this._UIModalPresentationFormSheet = true;
    //     }
    //
    //     pageCommon.prototype._raiseShowingModallyEvent.call(this);
    //
    //     this._ios.providesPresentationContextTransitionStyle = true;
    //     this._ios.definesPresentationContext = true;
    //     this._ios.modalPresentationStyle = UIModalPresentationStyle.OverFullScreen;
    //     this._ios.modalTransitionStyle = UIModalTransitionStyle.CrossDissolve;
    //     this._ios.view.backgroundColor = UIColor.clearColor;
    //
    //     parent.ios.presentViewControllerAnimatedCompletion(this._ios, utils.ios.MajorVersion >= 9, function () {
    //       that._ios.modalPresentationStyle = UIModalPresentationStyle.CurrentContext;
    //       that._raiseShownModallyEvent(parent, context, closeCallback);
    //     });
    //   };
    // }
  }
  private openNavgps() {
    this.directions.available().then((available) => {
      if(available) {
        this.directions.navigate({
          to: {
            lat:  this.placeInfo.location["lat"],
            lng: this.placeInfo.location["lng"]
          }
        }).then(()=> {
          this.snackBar.simple("Abriendo mapas");
        }, error => {
          this.snackBar.simple("Error al abrir mapas");
        })
      } else {
        TNSFancyAlert.showError("Google Maps", "Al parecer no tienes instalado GoogleMaps para la navegación", "Entendido");
      }
    })
  }
  private close() {
    this.params.closeCallback();
  }
}
