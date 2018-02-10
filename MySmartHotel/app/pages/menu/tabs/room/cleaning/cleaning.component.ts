import { Component, OnInit } from '@angular/core';
import { SnackBar, SnackBarOptions } from "nativescript-snackbar";
import { Router } from "@angular/router";
import { LoadingIndicator } from "nativescript-loading-indicator";
import { BackendService } from "../../../../../services/backend.service";
import { RoomService } from "../../../../../services/room.service";
import * as dialogs from "ui/dialogs";
import { TNSFancyAlert } from 'nativescript-fancyalert';

@Component({
  selector: 'Cleaning',
  templateUrl: 'pages/menu/tabs/room/cleaning/cleaning.html',
  styleUrls: ['pages/menu/tabs/room/cleaning/cleaning.css']
})

export class CleaningComponent implements OnInit {
  private notes : string;
  constructor(private roomService : RoomService, private router : Router) {}
  ngOnInit(): void {}
  private requestCleaning() : void {
    this.roomService.cleaningRequest(BackendService.userData, this.notes).subscribe((res)=>{
      this.router.navigate(["/menu"]);
    }, (error)=>{
      TNSFancyAlert.showError("Error", "No se pudo procesar la solicitud", "Entendido");
    });
  }
}
