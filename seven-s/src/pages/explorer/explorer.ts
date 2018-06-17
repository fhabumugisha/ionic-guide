import { Component } from "@angular/core";
import { NavController, AlertController, LoadingController, ModalController } from "ionic-angular";
import { UserDetailPage } from "../user-detail/user-detail";
import { ExplorerOptionsPage} from "../explorer-options/explorer-options";
import { LocationOptionsPage} from "../location-options/location-options";
import { CalendarModal, CalendarComponentOptions, CalendarModalOptions, DayConfig, CalendarResult } from "ion2-calendar";
@Component({
  selector: "page-explorer",
  templateUrl: "explorer.html"
})
export class ExplorerPage {
   dateRange: { from: string; to: string; };
   type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
    optionsRange: CalendarComponentOptions = {
    pickMode: 'range'
  };
  constructor(
    public navCtrl: NavController,
    private loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController
  ) {}
  goToUserDetail(params) {
    if (!params) params = {};
    this.navCtrl.push(UserDetailPage);
  }
  goToExplorer(params) {
    if (!params) params = {};
    this.navCtrl.push(ExplorerPage);
  }

  ionViewDidLoad() {
   // this.showConfirm();
  }
  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: "What do you want to explorer ?",
      buttons: [
        {
          text: "Hosts",
          handler: () => {
            console.log("Disagree clicked");
          }
        },
        {
          text: "Trippers",
          handler: () => {
            console.log("Agree clicked");
          }
        },
        {
          text: "Events",
          handler: () => {
            console.log("Agree clicked");
          }
        }
      ]
    });
    confirm.present();
  }

  onFind(){
     const loading = this.loadingCtrl.create({
      spinner: "crescent",
      content: "Searching..."
    });
    loading.present();

     loading.dismiss();
  }


   onOpenModal() {
    let modal = this.modalCtrl.create(ExplorerOptionsPage);
    modal.present();
}

  onOpenLocationModal() {
    let modal = this.modalCtrl.create(LocationOptionsPage);
    modal.present();
}

openCalendar() {
        const options: CalendarModalOptions = {
          pickMode: 'range',
          title: 'RANGE'
        };
    
        let myCalendar = this.modalCtrl.create(CalendarModal, {
          options: options
        });
    
        myCalendar.present();
    
        myCalendar.onDidDismiss((date: { from: CalendarResult; to: CalendarResult }, type: string) => {
          console.log(date);
        });
  }
}
