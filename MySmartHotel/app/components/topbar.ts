import { Component } from '@angular/core';
import { TNSFontIconService } from 'nativescript-ngx-fonticon';
import { Color } from "color";
import { Router } from "@angular/router";

@Component({
  selector: 'topbar',
  template: `<ActionBar title="SmartHotel">
    <NavigationButton icon="res://ic_menu_white_24dp"></NavigationButton>
    <ActionItem>
      <Ripple rippleColor="#c8c8c8">
        <Label class="fa" style="color:#fff; font-size: 24; margin-right:24;" [text]="'fa-sticky-note' | fonticon"></Label>
      </Ripple>
    </ActionItem>
  </ActionBar>`,
  styles: [`.fa {
    font-family: FontAwesome, fontawesome-webfont;
  }`]
})

export class TopbarComponent {
  constructor(private router : Router, private fonticon: TNSFontIconService) {}
}
