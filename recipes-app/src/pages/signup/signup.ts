import { AuthService } from './../../services/auth';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage implements OnInit {
  signupForm : FormGroup;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private authService: AuthService,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
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
