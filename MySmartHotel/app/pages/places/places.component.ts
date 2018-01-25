import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Page } from "ui/page";
import { View } from 'tns-core-modules/ui/core/view';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { TNSFontIconService } from 'nativescript-ngx-fonticon';
import { ScrollView, ScrollEventData } from 'tns-core-modules/ui/scroll-view';
import { Color } from "color";

@Component({
  selector: 'places',
  templateUrl: 'pages/places/places.html',
  styleUrls: ["pages/places/places-global.css", "pages/places/places.css"]
})

export class PlacesComponent implements OnInit {
  private place : PlaceType;
  private places = new Array<PlaceType>(
      { id: "parks", type: "Parques", icon:"~/assets/park.png", desc: "Para disfrutar el aire libre", img: "~/assets/park.jpg", color: "#80388E3C" },
      { id: "restaurants", type: "Restaurantes", icon:"~/assets/restaurant.png", desc: "Tienes hambre? mira los restaurantes cercanos", img: "~/assets/restaurant.jpg", color: "#805D4037" },
      { id: "museums", type: "Museos", icon:"~/assets/museum.png", desc: "Visita museos cercanos", img: "~/assets/museum.jpg", color: "#80F57C00" },
      { id: "bars", type: "Bares", icon:"~/assets/bar.png", desc: "Bares cercanos", img: "~/assets/bar.jpg", color: "#80512DA8" },
      { id: "shopping", type: "Compras", icon:"~/assets/shopping.png", desc: "Compra cosas chilas", img: "~/assets/shopping.jpg", color: "#8000796B" }

  );
  @ViewChild("header") header: ElementRef;
  constructor(private route : ActivatedRoute, private page : Page) {

   }
  ngOnInit() : void {
    const id = this.route.snapshot.params["id"];
    this.place = this.getPlaceType(id);
    this.page.actionBarHidden = true;
    this.header.nativeElement.backgroundImage = this.place.img;
  }

  getPlaceType(id) : PlaceType {
    return this.places.filter(item => item.id === id)[0];
  }

  onScroll(event: ScrollEventData, scrollView: ScrollView, topView: View) {
    if (scrollView.verticalOffset < 250) {
        const offset = scrollView.verticalOffset / 2;
        if (scrollView.ios) {
            // iOS adjust the position with an animation to create a smother scrolling effect.
            topView.animate({ translate: { x: 0, y: offset } }).then(() => { }, () => { });
        } else {
            // Android, animations are jerky so instead just adjust the position without animation.
            topView.translateY = Math.floor(offset);
        }
    }
  }
}

export class PlaceType {
  id: string;
  type: string;
  icon: string;
  desc: string;
  img: string;
  color: string;
}
