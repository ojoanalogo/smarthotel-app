import { Component, OnInit, ViewChild, ElementRef, ViewContainerRef } from '@angular/core';
import { Page } from "ui/page";
import { View } from 'tns-core-modules/ui/core/view';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { TNSFontIconService } from 'nativescript-ngx-fonticon';
import { ScrollView, ScrollEventData } from 'tns-core-modules/ui/scroll-view';
import { Color } from "color";
import { Place } from "../../models/place.model";
import { PlacesService } from "../../services/places.service";
import { LoadingIndicator } from "nativescript-loading-indicator";
import { Image } from "ui/image";
import { ModalDialogOptions, ModalDialogService } from "nativescript-angular";
import { InfoModalComponent } from "../../info-modal/info-modal";

@Component({
  selector: 'places',
  templateUrl: 'pages/places/places.html',
  styleUrls: ["pages/places/places-global.css", "pages/places/places.css"]
})

export class PlacesComponent implements OnInit {
  public newImage: Image;

  private places : Array<Place> = [];
  private place_type : PlaceType;
  private places_list = new Array<PlaceType>(
      { id: "park", type: "Parques", icon:"~/assets/park.png", desc: "Para disfrutar el aire libre", img: "~/assets/park.jpg", color: "#80388E3C" },
      { id: "restaurant", type: "Restaurantes", icon:"~/assets/restaurant.png", desc: "Tienes hambre? mira los restaurantes cercanos", img: "~/assets/restaurant.jpg", color: "#805D4037" },
      { id: "museum", type: "Museos", icon:"~/assets/museum.png", desc: "Visita museos cercanos", img: "~/assets/museum.jpg", color: "#80F57C00" },
      { id: "bar", type: "Bares", icon:"~/assets/bar.png", desc: "Bares cercanos", img: "~/assets/bar.jpg", color: "#80512DA8" },
      { id: "shopping_mall", type: "Compras", icon:"~/assets/shopping.png", desc: "Compra cosas chilas", img: "~/assets/shopping.jpg", color: "#8000796B" }
  );
  private loader: LoadingIndicator;
  @ViewChild("header") header: ElementRef;
  constructor(private route : ActivatedRoute, private page : Page, private placesService : PlacesService, private vcRef: ViewContainerRef,
    private modalService: ModalDialogService) { }
   ngOnInit() : void {
     this.loader = new LoadingIndicator();
     this.page.actionBarHidden = true;
     const id = this.route.snapshot.params["id"];
     this.place_type = this.getPlaceType(id);
     this.header.nativeElement.backgroundImage = this.place_type.img;
     this.getPlacesByID(id);
  }

private showModal(place : Place) {
  const info = place;
  const options: ModalDialogOptions = {
    viewContainerRef: this.vcRef,
    context: info,
    fullscreen: false,
  };
  this.modalService.showModal(InfoModalComponent, options).then(() => {});
}

  private getPlacesByID(id) {
    this.loader.show({ message: "Cargando..." });
    let storedPlaces : Array<Place>;
    if(this.placesService.placesExist()) {
      this.placesService.getSavedPlaces().then((places) => {
        storedPlaces = JSON.parse(places);
        this.places = storedPlaces.filter(item=> item.placeType === id);
      this.loader.hide();
  });
}
}
  private getPlaceType(id) : PlaceType {
    return this.places_list.filter(item => item.id === id)[0];
  }

  private onScroll(event: ScrollEventData, scrollView: ScrollView, topView: View) {
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


 class PlaceType {
  id: string;
  type: string;
  icon: string;
  desc: string;
  img: string;
  color: string;
}
