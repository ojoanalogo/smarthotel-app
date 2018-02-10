import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from "@angular/router";
import { SnackBar, SnackBarOptions } from "nativescript-snackbar";
import { LoadingIndicator } from "nativescript-loading-indicator";
import { BackendService } from "../../../../services/backend.service";
import { RoomService } from "../../../../services/room.service";
import * as dialogs from "ui/dialogs";

@Component({
  selector: 'Room',
  templateUrl: 'pages/menu/tabs/room/room.html',
  styleUrls: ['pages/menu/tabs/room/room.css']
})

export class RoomComponent implements OnInit {
  private lightsState : boolean = false;
  private thermostat : number;
  private room : number;
  constructor(private router: Router, private roomService : RoomService) {}
  ngOnInit(): void {
    this.room = BackendService.userData.room;
    this.thermostat = 23;
    this.initWorker();
  }
  private initWorker() {
    let room = BackendService.userData.room;
    this.roomService.getRoomData(room).subscribe((data) => {
      this.lightsState = this.getBoolean(data["data"][0]);
      setTimeout(()=>{
        console.log("Inicializando worker");
        this.initWorker();
      }, 10000);
    });
  }
  private getBoolean(data) {
    return data === "1";
  }
  private lights() {
    // this.lightsState = !this.lightsState;
  }
}
