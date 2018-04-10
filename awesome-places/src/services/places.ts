import { Location } from "./../models/location";
import { Place } from "./../models/place";
export class PlacesService {
  places: Place[] = [];

  addPlace(
    title: string,
    description: string,
    location: Location,
    imageUrl: string
  ) {
    let place = new Place(title, description, location, imageUrl);
    this.places.push(place);
  }

  loadPlaces() {
    return this.places.slice();
  }
}
