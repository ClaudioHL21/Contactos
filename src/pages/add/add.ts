import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

  nombre = '';
  numero = '';
  face = '';
  instag = '';
  twit = '';
  mail = '';
  contactos = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  this.contactos = this.navParams.get("contactos");
}


 clickAgregar()
 {
   if(this.nombre.length> 0)
   {
     this.contactos.push({nombre: this.nombre, numero: this.numero, face: this.face, instag: this.instag, twit: this.twit, mail: this.mail, imagen: "../assets/i3.png" });
     this.navCtrl.pop();
   }
   else
   {
     const alert = this.alertCtrl.create({
       title: 'Oops!',
       subTitle: 'El nombre está vacío',
       buttons:['Ok']
     });
     alert.present();
   }
 }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

}
