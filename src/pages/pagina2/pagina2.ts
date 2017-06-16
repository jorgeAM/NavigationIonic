import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pagina3Page } from '../../pages/pagina3/pagina3';

/**
 * Generated class for the Pagina2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {
  pagina3:any = Pagina3Page;

  mutantes:any[] = [
    {
      nombre: "Magneto",
      poder: "Controlar mentales"
    },
    {
      nombre: "Wolverine",
      poder: "Esa pregunta es muy personal"
    },
    {
      nombre: "Profesor X",
      poder: "Poderes psíquicos"
    },
    {
      nombre: "Gambito",
      poder: "who?"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  irPagina3(mutante:any){
    this.navCtrl.push(Pagina3Page,{'mutante': mutante});
  }

}
