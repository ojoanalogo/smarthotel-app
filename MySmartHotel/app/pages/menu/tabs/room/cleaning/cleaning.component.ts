import { Component, OnInit } from '@angular/core';
import { SnackBar, SnackBarOptions } from "nativescript-snackbar";
import { Router } from "@angular/router";
import { LoadingIndicator } from "nativescript-loading-indicator";
import { BackendService } from "../../../../../services/backend.service";
import { RoomService } from "../../../../../services/room.service";
import * as dialogs from "ui/dialogs";
import { TNSFancyAlert } from 'nativescript-fancyalert';
import { topmost } from "ui/frame";

@Component({
  selector: 'Cleaning',
  templateUrl: 'pages/menu/tabs/room/cleaning/cleaning.html',
  styleUrls: ['pages/menu/tabs/room/cleaning/cleaning.css']
})

export class CleaningComponent implements OnInit {
  private notes : string;
  private snackBar: SnackBar;
  constructor(private roomService : RoomService, private router : Router) {}
  ngOnInit(): void {
    this.snackBar = new SnackBar();
  }
  private requestCleaning() : void {
    this.roomService.cleaningRequest(BackendService.userData, this.notes).subscribe((res)=>{
      if(res.code == 1) {
        topmost().goBack();
        this.snackBar.simple("Solicitud de limpieza enviada", "#AED581");
      }
      if(res.code == 2) {
        TNSFancyAlert.showWarning("Info", "Ya tienes una solicitud de limpieza activa", "Entendido");
      }
      if(res.code == 0) {
        TNSFancyAlert.showError("Error", "No se pudo procesar tu solicitud de limpieza", "Entendido");
      }
    }, (error)=>{
      TNSFancyAlert.showError("Error", "No se pudo procesar la solicitud", "Entendido");
    });
  }
}
