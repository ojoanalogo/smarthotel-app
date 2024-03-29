import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { PlacesService } from "../../services/places.service";
import { LocationService } from "../../services/location.service";
import { LoginService } from "../../services/login.service";
import { TNSFancyAlert } from 'nativescript-fancyalert';
import { SnackBar } from "nativescript-snackbar";
import { Place } from "../../models/place.model";
import { BackendService } from "../../services/backend.service";
import * as dialogs from "ui/dialogs";

@Component({
  selector: 'MenuComponent',
  templateUrl: 'pages/menu/menu.html'
})

export class MenuComponent implements OnInit {
  @ViewChild("tab") tab: ElementRef;
  private snackBar: SnackBar;
  constructor(private locationService: LocationService, private placesService: PlacesService, private loginService: LoginService) { }
  ngOnInit(): void {
    this.snackBar = new SnackBar();
    this.locationService.setupLocation().subscribe((location) => {
      this.snackBar.simple('Ubicación obtenida');
    }, (error) => {
      TNSFancyAlert.showError("Error al activar ubicación", "Es necesario que actives el GPS de tu dispositivo para poder usar la app correctamente", "Entendido");
    });
    this.loginService.checkReservation(BackendService.userData).subscribe((data) => {
      if(data.code == 0) {
        TNSFancyAlert.showError("Error", "Parece que ya no estás hospedado en el hotel, no puedes usar la aplicación si no estás hospedado", "Entendido");
        this.loginService.logout();
      } else {
        this.snackBar.simple("Bienvenido " + BackendService.userData.name, "#AED581");
      }
    });
  }
  public changeTab(i): void {
    if (i == 3) {
      this.handleLogout();
      return;
    }
    this.tab.nativeElement.selectedIndex = i;
  }
  handleLogout(): void {
    dialogs.confirm({
      title: "¿Estás seguro que quieres cerrar sesión?",
      message: "Tendrás que iniciar sesión de nuevo",
      okButtonText: "Cerrar sesión",
      cancelButtonText: "Cancelar",
      neutralButtonText: null,
    }).then(r => {
      if(r) {
        this.loginService.logout();
      }
    });
  }
}
