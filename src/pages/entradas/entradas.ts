import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalhesPage } from '../detalhes/detalhes';

@IonicPage()
@Component({
  selector: 'page-entradas',
  templateUrl: 'entradas.html',
})
export class EntradasPage {

  items: Array<{
    src: String,
    alt: string,
    titulo: string,
    descricao: String,
    preco: number
  }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.items = [
      {
        src: 'https://s1.1zoom.me/big0/523/Butterbrot_Fish_Food_Bread_White_background_Three_525380_1362x1024.jpg',
        alt: 'Canapés Salmão',
        titulo: 'Canapé Salmão',
        descricao: 'Torrada, Salmão, Cream Cheese, Salsa e Cebola',
        preco: 34.35
      },
      {
        src: 'https://s1.1zoom.me/big0/143/Cheese_Grapes_Nuts_White_background_Cutting_board_546935_1280x896.jpg',
        alt: 'Tábua Queijos',
        titulo: 'Tábua Queijos',
        descricao: 'Tábua Queijos diversos: Mussarela, Minas, Ricota, Cream Cheese, Parmeão e Gorgonzola',
        preco: 25.55
      },
      {
        src: 'https://www.alegrafoods.com.br/wp-content/uploads/2017/10/fatiados-alegra-1.png',
        alt: 'Tábua Carnes',
        titulo: 'Tábua Carnes',
        descricao: 'Tábua Carnes Frias diversas: Mortadela, Presunto, Peito de Peru, Salame e ChouriçO',
        preco: 15.99
      },
      {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQJURxQ7X1Zgjp_MzgECDm2FRIP3xPiRXtmg&usqp=CAU',
        alt: 'Azeitonas',
        titulo: 'Azeitonas',
        descricao: 'Porção de Azeitonas',
        preco: 8.99
      },
      {
        src: 'https://s1.1zoom.me/b5050/660/Salads_Vegetables_Pepper_Lemons_White_background_543226_1600x1200.jpg',
        alt: 'Saladas',
        titulo: 'Saladas',
        descricao: 'Entrada de Saladas Diversas: Alface, Tomate Cereja, Cebola, Pepino e Rucula',
        preco: 4.99
      }
    ];
  }

  abrirDetalhes(item) {
    this.navCtrl.push(DetalhesPage, { item: item });
  }
}
