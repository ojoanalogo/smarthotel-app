import { Component } from '@angular/core';
import { TNSFontIconService } from 'nativescript-ngx-fonticon';
import { Color } from "color";
import { Router } from "@angular/router";
import { TnsSideDrawer } from 'nativescript-sidedrawer'
import { MenuComponent } from "../../pages/menu/menu.component";

@Component({
  selector: 'TopBar',
  template: `<ActionBar title="MySmartHotel">
    <NavigationButton (tap)="toggleSidedrawer()" icon="res://ic_menu_white_24dp"></NavigationButton>
  </ActionBar>`,
  styles: [`.fa {
    font-family: FontAwesome, fontawesome-webfont;
  }`]
})

export class TopbarComponent {
  constructor(private router : Router, private fonticon: TNSFontIconService, private menuComponent : MenuComponent) {
    TnsSideDrawer.build({
      headerBackgroundColor:  new Color("#00796B"),
      backgroundColor: new Color("#FFFFFF"),
      textColor: new Color("#000000"),
	templates: [{
		title: 'Inicio'
	}, {
		title: 'Mapa'
	},
  {
   title: 'Habitación'
 }],
	title: 'MySmartHotel',
	subtitle: 'DEV TEST',
	listener: (index) => {
    menuComponent.changeTab(index)
	},
	context: this,
})
  }
  toggleSidedrawer() : void {
    TnsSideDrawer.toggle()
  }
}
