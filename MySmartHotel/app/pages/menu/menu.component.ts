import { Component, OnInit } from '@angular/core';
import { Page } from "ui/page";
import { TNSFontIconService } from 'nativescript-ngx-fonticon';
import { Router } from "@angular/router";
import { Place } from "../../models/place.model";
import * as Facebook from "nativescript-facebook";
import * as http from "tns-core-modules/http";

@Component({
  selector: 'menu',
  templateUrl: 'pages/menu/menu.html',
  styleUrls: ["pages/menu/menu-global.css", "pages/menu/menu.css"]
})

export class MenuComponent implements OnInit {
  accessToken: string = "1981880128746622|oEaM5iMIKzbe6640AfT9ABjlmkU";
  public places : Array<Place> = [];
  constructor(private page: Page, private router : Router, private fonticon: TNSFontIconService) {
/*http.getJSON("https://graph.facebook.com/oauth/access_token?client_id=1981880128746622&client_secret=11ad5035db1a7eb87b50efa6aba30d90&grant_type=client_credentials").then((res)=>{
  console.dir(res);
})*/
  }
  ngOnInit() : void {
    http.getJSON("https://graph.facebook.com/v2.9" +
    "/search?type=place&fields=name,location,about&center=24.7880443,-107.3983973" +
     "&distance=1000&access_token=" + this.accessToken).then((res) => {
       res["data"].forEach(place => {
           this.places.push(new Place(place["id"], place["name"], place["location"], place["about"]));
       });
       //console.dir(this.places);
    }, function(error) {
      console.log("error");
    });
  }
}
