import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SnackBar, SnackBarOptions } from "nativescript-snackbar";
import { LoadingIndicator } from "nativescript-loading-indicator";
import { BackendService } from "../../../../services/backend.service";
@Component({
  selector: 'Room',
  templateUrl: 'pages/menu/tabs/room/room.html',
  styleUrls: ['pages/menu/tabs/room/room.css']
})

export class RoomComponent implements OnInit {
  private lightsState : boolean = false;
  private habitacion : number;
  constructor() {}
  public toggleCheck() {
    this.lightsState = !this.lightsState;
  }
  ngOnInit(): void {
    this.habitacion = BackendService.userData.room;
  }
}
