import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
// import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { WelcomePage } from "../pages/welcome/welcome";
import { Storage } from "@ionic/storage";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar /*, splashScreen: SplashScreen*/, private storage: Storage ) {
    platform.ready().then(() => {
      this.storage.get('showIntroSlider').then((v) => {
        if (v == 0) {
          // this.rootPage = TabsPage;
          this.rootPage = WelcomePage;
        }else{
          this.rootPage = WelcomePage;
        }
      });
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      //splashScreen.hide();
    });
  }
}
