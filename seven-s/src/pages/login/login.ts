import { Component, OnInit } from "@angular/core";
import {
  NavController,
  AlertController,
  LoadingController
} from "ionic-angular";
import { SignupPage } from "../signup/signup";
import { ExplorerPage } from "../explorer/explorer";
import { UserDetailPage } from "../user-detail/user-detail";
import firebase from "firebase";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth";
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage implements OnInit {
  signinForm: FormGroup;
  constructor(
    public navCtrl: NavController,
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {}
  goToSignup(params) {
    if (!params) params = {};
    this.navCtrl.push(SignupPage);
  }
  goToExplorer(params) {
    if (!params) params = {};
    this.navCtrl.push(ExplorerPage);
  }
  goToUserDetail(params) {
    if (!params) params = {};
    this.navCtrl.push(UserDetailPage);
  }

  signin(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
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
      spinner: "crescent",
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
