import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ContactoPage } from '../contacto/contacto';
import { AddPage } from '../add/add';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //notas = ['Primer nota', 'Otra nota'];
  //nota = '';


  constructor(public navCtrl: NavController,
             public alertCtrl: AlertController){

  }
  contacto = ContactoPage;
  add = AddPage;
  contactos =
  [
    {
      id: 0,
      nombre: "Obi Juan",
      numero:"3325666469",
      imagen: "../assets/i1.png",
      face: "Obi Juan",
      instag: "Obi.J",
      twit: "Obi.Juan.K",
      mail: "obJuan@outlook.com"
    },

    {
      id: 1,
      nombre: "El CDMX",
      numero: "5558449512",
      imagen: "../assets/i2.png",
      face: "Ernesto Palacios",
      instag: "Ern.Pal",
      twit: "Ernesto.PC",
      mail: "filero@hotmail.com",

    },

    {
      id: 2,
      nombre: "Batman",
      numero: "6625486523",
      imagen: "../assets/i4.png",
      face: "Bruce Wayne",
      instag: "bat.w",
      twit: "Batman.BW",
      mail: "batman@wayneindustries.com"

    },


  ]

  clickcontacto(c)
  {
    this.navCtrl.push (this.contacto, c);
  }

  clickadd()
  {
    this.navCtrl.push (this.add, {contactos: this.contactos});
  }



}