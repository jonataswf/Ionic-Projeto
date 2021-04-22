import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-slidedetalhes',
  templateUrl: 'slidedetalhes.html',
})
export class SlidedetalhesPage {

  item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.data.item;
  }

}
