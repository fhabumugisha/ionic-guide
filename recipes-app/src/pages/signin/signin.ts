import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from "ionic-angular";
import { AuthService } from "../../services/auth";

@IonicPage()
@Component({
  selector: "page-signin",
  templateUrl: "signin.html"
})
export class SigninPage implements OnInit {
  signinForm: FormGroup;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad SigninPage");
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm() {
    this.signinForm = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, Validators.required)
    });
  }
  onSubmit() {
    console.log(this.signinForm);
    const loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: "Signing you in..."
    });
    loading.present();
    this.authService
      .signin(this.signinForm.value.email, this.signinForm.value.password)
      .then(data => {
        loading.dismiss();
      })
      .catch(error => {
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: "Signup failed",
          message: error.message,
          buttons: ["Ok"]
        });
        alert.present();
      });
  }
}
