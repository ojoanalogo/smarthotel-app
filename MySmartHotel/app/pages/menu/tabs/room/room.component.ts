import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from "@angular/router";
import { SnackBar, SnackBarOptions } from "nativescript-snackbar";
import { LoadingIndicator } from "nativescript-loading-indicator";
import { BackendService } from "../../../../services/backend.service";
import { RoomService } from "../../../../services/room.service";
import { TNSFancyAlert } from 'nativescript-fancyalert';
import * as dialogs from "ui/dialogs";

@Component({
  selector: 'Room',
  templateUrl: 'pages/menu/tabs/room/room.html',
  styleUrls: ['pages/menu/tabs/room/room.css']
})

export class RoomComponent implements OnInit {
  private room : number;
  private roomConnected : boolean = true;
  private iotAvailable : boolean = true;
  private thermostat : number;
  private thermostatSet : boolean = false;
  private roomTemp : number;
  private lightsState : boolean = false;
  private tvState : boolean = false;
  private miniSplitState : boolean = false;
  private snackBar: SnackBar;
  constructor(private router: Router, private roomService : RoomService) {}
  ngOnInit(): void {
    this.room = BackendService.userData.room;
    this.thermostat = 0;
    this.snackBar = new SnackBar();
    this.initWorker();
 }
  private initWorker() {
    let room = BackendService.userData.room;
    this.roomService.getRoomData(room).subscribe((data) => {
    if(data.code == 0) {
        this.iotAvailable = false;
      } else {
        this.roomConnected = true;
        this.iotAvailable = true;
        this.lightsState = this.getBoolean(data["data"][0]);
        this.miniSplitState = this.getBoolean(data["data"][1]);
        this.tvState = this.getBoolean(data["data"][4]);
        if(!this.thermostatSet) {
          this.thermostat = data["data"][3];
          this.thermostatSet = true;
        }
        this.roomTemp = data["data"][5];
        setTimeout(()=>{
          this.initWorker();
        }, 20000 );
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
    this.roomService.setRoomData(this.room, "foco-1", this.lightsState ? 1 : 0).subscribe((data)=>{
      if(data.code == 1) {
        TNSFancyAlert.showSuccess("Info", this.lightsState ? 'Luces encendidas' : 'Luces apagadas', "Ok");
      } else {
        this.snackBar.simple("IoT no disponible");
      }
    }, (error) =>{
      this.snackBar.simple("No se pudo apagar la iluminación");
    });
  }

  private tv() {
    this.tvState = !this.tvState;
    this.roomService.setRoomData(this.room, "tv", this.tvState ? 1 : 0).subscribe((data)=>{
      if(data.code == 1) {
        TNSFancyAlert.showSuccess("Info", this.tvState ? 'TV encendida' : 'TV apagada', "Ok");
      } else {
        this.snackBar.simple("IoT no disponible");
      }
    }, (error) =>{
      this.snackBar.simple("No se pudo apagar la TV");
    });
  }

  private miniSplit() {
    this.miniSplitState = !this.miniSplitState;
    this.roomService.setRoomData(this.room, "minisplit", this.miniSplitState ? 1 : 0).subscribe((data)=>{
      if(data.code == 1) {
        TNSFancyAlert.showSuccess("Info", this.miniSplitState ? 'Clima encendido' : 'Clima apagado', "Ok");
      } else {
        this.snackBar.simple("IoT no disponible");
      }
    }, (error) =>{
      this.snackBar.simple("No se pudo apagar el clima");
    });
  }

  private updateThermostat() {
    this.roomService.setRoomData(this.room, "termostato", this.thermostat).subscribe((data)=>{
      if(data.code == 1) {
        TNSFancyAlert.showSuccess("Info", "Termostato modificado", "Ok");
      } else {
        this.snackBar.simple("IoT no disponible");
      }
    }, (error) =>{
      this.snackBar.simple("No se pudo mover el termostato");
    });
  }
}
