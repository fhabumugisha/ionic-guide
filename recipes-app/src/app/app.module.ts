import { AuthService } from './../services/auth';
import { SignupPage } from './../pages/signup/signup';
import { SigninPage } from './../pages/signin/signin';
import { RecipesService } from './../services/recipes';
import { ShoppingListPage } from './../pages/shopping-list/shopping-list';
import { RecipesPage } from './../pages/recipes/recipes';
import {SLOptionsPage } from './../pages/shopping-list/sl-options/sl-options';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HttpClientModule } from '@angular/common/http'
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EditRecipePage } from '../pages/edit-recipe/edit-recipe';
import { DetailRecipePage } from '../pages/detail-recipe/detail-recipe';
import { ShoppingListService } from '../services/shopping-list.service';

@NgModule({
  declarations: [
    MyApp,
    ShoppingListPage,
    RecipesPage,
    EditRecipePage,
    DetailRecipePage,
    SigninPage,
    SignupPage,
    SLOptionsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ShoppingListPage,
    RecipesPage,
    EditRecipePage,
    DetailRecipePage,
    SigninPage,
    SignupPage,
    SLOptionsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ShoppingListService,
    RecipesService,
    AuthService
  ]
})
export class AppModule {}
