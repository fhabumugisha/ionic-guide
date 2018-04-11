import { File, FileError } from "@ionic-native/file";
import { Location } from "./../models/location";
import { Place } from "./../models/place";
import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
declare var cordova: any;
@Injectable()
export class PlacesService {
  places: Place[] = [];

  constructor(public storage: Storage, private file: File) {}

  addPlace(
    title: string,
    description: string,
    location: Location,
    imageUrl: string
  ) {
    let place = new Place(title, description, location, imageUrl);
    this.places.push(place);
    this.storage
      .set("places", this.places)
      .then()
      .catch(error => {
        this.places.splice(this.places.indexOf(place), 1);
      });
  }
  /**
   *
   */
  loadPlaces() {
    return this.places.slice();
  }
  /**
   * Fecth places from DB
   */
  fecthPlaces() {
    console.log("Fecthing places ...");
    return this.storage
      .get("places")
      .then((places: Place[]) => {
        this.places = places != null ? places : [];
        return this.places;
      })
      .catch(error => {
        console.log(error);
      });
  }
  /**
   * Delete a place
   */
  deletePlace(index: number) {
    let place = this.places[index];
    this.places.splice(index, 1);
    this.storage
      .set("places", this.places)
      .then(() => {
        this.removeFile(place);
      })
      .catch(error => console.log(error));
  }

  /**
   * Removes a file from local directory
   */
  private removeFile(place: Place) {
    let imageName = place.imageUrl.replace(/^.*[\\\/]/, "");
    this.file
      .removeFile(cordova.file.dataDirectory, imageName)
      .then(() => {
        console.log("File removed");
      })
      .catch((error: FileError) => {
        console.log("Error while removing file ", error.message);
        this.addPlace(
          place.title,
          place.description,
          place.location,
          place.imageUrl
        );
      });
  }
}
