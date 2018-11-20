import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacto',
  templateUrl: 'contacto.html',
})
export class ContactoPage {
  image = '';
  nombre = '';
  num = '';
  face = '';
  instag = '';
  twit = '';
  mail = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.image = this.navParams.get ('imagen');
  this.nombre = this.navParams.get ('nombre');
  this.num = this.navParams.get ('numero');
  this.face = this.navParams.get('face');
  this.instag = this.navParams.get('instag');
  this.twit =this.navParams.get('twit');
  this.mail = this.navParams.get('mail');
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactoPage');
  }

}
