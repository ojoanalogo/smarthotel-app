import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from "@angular/router";
import { SnackBar, SnackBarOptions } from "nativescript-snackbar";
import { LoadingIndicator } from "nativescript-loading-indicator";
import { BackendService } from "../../../../services/backend.service";
import * as dialogs from "ui/dialogs";

@Component({
  selector: 'Room',
  templateUrl: 'pages/menu/tabs/room/room.html',
  styleUrls: ['pages/menu/tabs/room/room.css']
})

export class RoomComponent implements OnInit {
  private lightsState : boolean = false;
  private room : number;
  constructor(private router: Router) {}
  public toggleCheck() {
    this.lightsState = !this.lightsState;
  }
  ngOnInit(): void {
    this.room = BackendService.userData.room;
  }
}
