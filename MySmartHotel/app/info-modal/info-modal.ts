import { Component } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { Page } from "ui/page";
import { Color } from "tns-core-modules/color";
import * as utils from 'utils/utils';
import { openUrl } from "tns-core-modules/utils/utils";
import { Place } from "../models/place.model";
import { Location } from "../models/location.model"
import { LocationService } from "../services/location.service";

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
  placeInfo : Place;
  constructor(private params: ModalDialogParams,
              private page: Page, private locationServices : LocationService) {
    this.placeInfo = params.context;
    this.page.on("unloaded", () => {
      this.params.closeCallback();
    });
    let location : Location = this.locationServices.getLocation();
    console.log("DISTANCIA KM:" + this.getDistanceFromLatLonInKm(location.latitude,
       location.longitude, this.placeInfo.location["lat"], this.placeInfo.location["lng"]));
    this.page.backgroundColor = new Color(50, 0, 0, 0);
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

 private getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
  var dLon = this.deg2rad(lon2-lon1);
  var a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c; // Distance in km
  return d;
}
private deg2rad(deg) {
  return deg * (Math.PI/180);
}
private close() {
    this.params.closeCallback();
  }
}
