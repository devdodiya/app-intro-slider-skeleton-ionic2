import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";
import { Storage } from "@ionic/storage";
import { HomePage } from '../home/home';
/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  public options;
  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage ) {
    this.options = {
      show:false
    };
    // this.storage.get('showIntroSlider').then((v) => {
    //   if (v == 0) {
    //     this.navCtrl.setRoot(TabsPage);
    //   }
    // });
  }

  ionViewDidEnter() {
    
  }
  navHome() {
    //Save flag if don't need to show intro slider on next app startup
    this.storage.set('showIntroSlider', 0).then(() => {
        // we don't actually need this callbacks in such simple example,
        // but in real apps it will be useful
    });
    this.navCtrl.setRoot(TabsPage);
  }
}
