import { Component } from '@angular/core';
import { TNSFontIconService } from 'nativescript-ngx-fonticon';
import { Color } from "color";
import { Router } from "@angular/router";
import { TnsSideDrawer } from 'nativescript-sidedrawer'
import { MenuComponent } from "../../pages/menu/menu.component";
import { BackendService } from "../../services/backend.service";
import { User } from "../../models/user.model";

@Component({
  selector: 'TopBar',
  template: `<ActionBar title="MySmartHotel">
  <ActionItem ios.systemIcon="10" (tap)="toggleSidedrawer()"></ActionItem>
    <NavigationButton (tap)="toggleSidedrawer()" text="Volver" icon="res://ic_menu_white_24dp"></NavigationButton>
  </ActionBar>`,
  styles: [`.fa {
    font-family: FontAwesome, fontawesome-webfont;
  }`]
})

export class TopbarComponent {
  constructor(private router: Router, private fonticon: TNSFontIconService, private menuComponent: MenuComponent) {
    let user = BackendService.userData;
    TnsSideDrawer.build({
      headerBackgroundColor: new Color("#00796B"),
      backgroundColor: new Color("#FFFFFF"),
      textColor: new Color("#000000"),
      templates: [{
        title: 'Inicio'
      }, {
        title: 'Mapa'
      },
      {
        title: 'Habitación'
      },
      {
        title: 'Cerrar sesión'
      }],
      title: 'MySmartHotel',
      subtitle: user.email,
      listener: (index) => {
        menuComponent.changeTab(index)
      },
      context: this,
    })
  }
  toggleSidedrawer(): void {
    TnsSideDrawer.toggle()
  }
}
