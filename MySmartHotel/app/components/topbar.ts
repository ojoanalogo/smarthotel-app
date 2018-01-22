import { Component } from '@angular/core';
import { TNSFontIconService } from 'nativescript-ngx-fonticon';
import { Color } from "color";
import { Router } from "@angular/router";
import { TnsSideDrawer } from 'nativescript-sidedrawer'

@Component({
  selector: 'topbar',
  template: `<ActionBar title="MySmartHotel">
    <NavigationButton (tap)="toggleSidedrawer()" icon="res://ic_menu_white_24dp"></NavigationButton>
  </ActionBar>`,
  styles: [`.fa {
    font-family: FontAwesome, fontawesome-webfont;
  }`]
})

export class TopbarComponent {
  constructor(private router : Router, private fonticon: TNSFontIconService) {
    TnsSideDrawer.build({
      headerBackgroundColor:  new Color("#00796B"),
      backgroundColor: new Color("#FFFFFF"),
      textColor: new Color("#000000"),
	templates: [{
		title: 'Inicio'
	}, {
		title: 'Habitación'
	}],
	title: 'MySmartHotel',
	subtitle: 'DEV TEST',
	listener: (index) => {
		//this.i = index
	},
	context: this,
})
  }
  toggleSidedrawer() : void {
    TnsSideDrawer.toggle()
  }
}
