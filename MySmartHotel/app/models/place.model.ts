export class Place {
  constructor (public place_id: string, public name: string,
    public location : string, public placeType : PlaceType, public photoReference : string) {}
}
export enum PlaceType {
  PARK = "park",
  RESTAURANT = "restaurant",
  MUSEUM = "museum",
  ART_GALLERY = "art_gallery",
  CAFE = "cafe",
  CASINO = "casino",
  ZOO = "zoo",
  SHOPPING_MALL = "shopping_mall",
  BAR = "bar",
  NIGHT_CLUB = "night_club",
  POINT_OF_INTEREST = "point_of_interest"
}
