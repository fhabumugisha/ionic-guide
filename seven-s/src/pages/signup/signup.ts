import { Component, OnInit } from '@angular/core';
import { NavController, NavParams ,AlertController,
  LoadingController} from 'ionic-angular';
import { ExplorerPage } from '../explorer/explorer';
import { UserDetailPage } from '../user-detail/user-detail';
import { AuthService } from "../../services/auth";
import { FormGroup, FormControl, Validators } from "@angular/forms";
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage implements OnInit{
signupForm : FormGroup;
  constructor(public navCtrl: NavController,
  public navParams: NavParams,
              private authService: AuthService,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController) {
  }
  goToExplorer(params){
    if (!params) params = {};
    this.navCtrl.push(ExplorerPage);
  }
  goToUserDetail(params){
    if (!params) params = {};
    this.navCtrl.push(UserDetailPage);
  }
   ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(){
    this.signupForm = new FormGroup({
      'email' : new FormControl(null, Validators.email),
      'password' : new FormControl(null, [Validators.required, Validators.minLength(6)])
    });

  }
  onSubmit(){
      console.log(this.signupForm);
      const loading = this.loadingCtrl.create({
        content: "Signing you up..."
      });
      loading.present();
      this.authService.signup(this.signupForm.value.email, this.signupForm.value.password)
      .then(
        data => {
         loading.dismiss();
        }
      )
      .catch(
        error =>  {
          loading.dismiss();
          const alert = this.alertCtrl.create({
            title : 'Signup failed',
            message : error.message,
            buttons : ['Ok']
          });
          alert.present();

        }
      );
  }
}
