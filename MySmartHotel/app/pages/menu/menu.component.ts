import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { PlacesService } from "../../services/places.service";
import { LocationService } from "../../services/location.service";
import { Location } from "../../models/location.model";
import { TNSFancyAlert } from 'nativescript-fancyalert';

@Component({
  selector: 'MenuComponent',
  templateUrl: 'pages/menu/menu.html'
})

export class MenuComponent implements OnInit {
  @ViewChild("tab") tab: ElementRef;
  private location : Location;
  constructor(private locationService : LocationService, private placesService : PlacesService) {
    this.location = new Location();
  }

  ngOnInit() : void {
    this.locationService.isEnabled().then(
      (success)=> {
        this.locationService.getLocation().then((locationObj) => {
          this.location.latitude = locationObj.latitude;
          this.location.longitude = locationObj.longitude;
        }, (error) =>{
          TNSFancyAlert.showError("Error de ubicación", "Es necesario activar los servicios de ubicación", "Entendido");
        });
    }, (notEnabled) => {
      // Solicitar activación...
      this.locationService.requestEnable().catch((error) => {
      TNSFancyAlert.showError("Error de ubicación", "Es necesario activar los servicios de ubicación", "Entendido");
    });
  });
  }

  public changeTab(i) : void {
    this.tab.nativeElement.selectedIndex = i;
  }
}
