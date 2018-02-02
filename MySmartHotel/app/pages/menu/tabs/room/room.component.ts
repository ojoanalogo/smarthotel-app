import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SnackBar, SnackBarOptions } from "nativescript-snackbar";
import { LoadingIndicator } from "nativescript-loading-indicator";

@Component({
  selector: 'Room',
  templateUrl: 'pages/menu/tabs/room/room.html',
  styleUrls: ['pages/menu/tabs/room/room.css']
})

export class RoomComponent implements OnInit {
  lightsState : boolean = false;
  constructor() {}
  public toggleCheck() {
    this.lightsState = !this.lightsState;
  }

  ngOnInit(): void {

  }

}
