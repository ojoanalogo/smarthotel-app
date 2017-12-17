import { Component, OnInit } from '@angular/core';
import { Page } from "ui/page";
import { TNSFontIconService } from 'nativescript-ngx-fonticon';
import { Router } from "@angular/router";

@Component({
  selector: 'menu',
  templateUrl: 'pages/menu/menu.html',
  styleUrls: ["pages/menu/menu-global.css", "pages/menu/menu.css"]
})

export class MenuComponent implements OnInit {
  constructor(private page: Page, private router : Router, private fonticon: TNSFontIconService) {
  }
  ngOnInit() : void {
  }
}
