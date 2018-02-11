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
  private roomConnected : boolean = true;
  private iotAvailable : boolean = true;
  private thermostatSet : boolean = false;
  private snackBar: SnackBar;
  constructor(private router: Router, private roomService : RoomService) {}
  ngOnInit(): void {
    this.snackBar = new SnackBar();
    this.room = BackendService.userData.room;
    this.thermostat = 0;
    this.initWorker();
 }
  private initWorker() {
    let room = BackendService.userData.room;
    this.roomService.getRoomData(room).subscribe((data) => {
      console.dir(data);
      if(data.code == 0) {
        this.iotAvailable = false;
      } else {
        this.roomConnected = true;
        this.iotAvailable = true;
        this.lightsState = this.getBoolean(data["data"][0]);
        if(!this.thermostatSet) {
          this.thermostat = data["data"][3];
          this.thermostatSet = true;
        }
        setTimeout(()=>{
          console.log("Inicializando worker");
          this.initWorker();
        }, 15000);
      }
    }, (error) =>{
      this.roomConnected = false;
      this.snackBar.simple("No se pudo conectar a la habitación");
    });
  }
  private getBoolean(data) {
    return data === "1";
  }
  private lights() {
    this.lightsState = !this.lightsState;
  }
}
