import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage implements OnInit{

  signinForm : FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(){
    this.signinForm = new FormGroup({
      'email' : new FormControl(null, [Validators.email,Validators.required ]),
      'password' : new FormControl(null, Validators.required)
    });

  }
  onSubmit(){
    console.log(this.signinForm.value);
  }

}
