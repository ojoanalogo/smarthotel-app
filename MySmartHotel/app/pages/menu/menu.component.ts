import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { PlacesService } from "../../services/places.service";
import { LocationService } from "../../services/location.service";
import { TNSFancyAlert } from 'nativescript-fancyalert';
import { SnackBar } from "nativescript-snackbar";
import { Place } from "../../models/place.model";

@Component({
  selector: 'MenuComponent',
  templateUrl: 'pages/menu/menu.html'
})

export class MenuComponent implements OnInit {
  @ViewChild("tab") tab: ElementRef;
  private snackBar: SnackBar;
  constructor(private locationService: LocationService, private placesService: PlacesService) {  }
  ngOnInit(): void {
    this.snackBar = new SnackBar();
    this.locationService.setupLocation().subscribe((location) => {
      this.snackBar.simple('Ubicación obtenida');
    }, (error) => {
      TNSFancyAlert.showError("Error al activar ubicación", "Es necesario que actives el GPS de tu dispositivo para poder usar la app correctamente", "Entendido");
    });
  }
  public changeTab(i): void {
    this.tab.nativeElement.selectedIndex = i;
  }

}
