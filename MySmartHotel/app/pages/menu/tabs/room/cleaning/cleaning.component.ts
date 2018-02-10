import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SnackBar, SnackBarOptions } from "nativescript-snackbar";
import { LoadingIndicator } from "nativescript-loading-indicator";
import { BackendService } from "../../../../../services/backend.service";
import { RoomService } from "../../../../../services/room.service";
import * as dialogs from "ui/dialogs";

@Component({
  selector: 'Cleaning',
  templateUrl: 'pages/menu/tabs/room/cleaning/cleaning.html',
  styleUrls: ['pages/menu/tabs/room/cleaning/cleaning.css']
})

export class CleaningComponent implements OnInit {
  private room : number;
  constructor() {}
  ngOnInit(): void {
    this.room = BackendService.userData.room;
  }
}
