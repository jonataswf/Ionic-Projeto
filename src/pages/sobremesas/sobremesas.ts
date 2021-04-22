import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalhesPage } from '../detalhes/detalhes';

@IonicPage()
@Component({
  selector: 'page-sobremesas',
  templateUrl: 'sobremesas.html',
})
export class SobremesasPage {

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
        src: 'https://cdn-0.imagensemoldes.com.br/wp-content/uploads/2020/05/Pudim-com-Chantily-Doces-PNG.png',
        alt: 'Pudim',
        titulo: 'Pudim',
        descricao: 'Pudim de leite condensado',
        preco: 6.99
      },
      {
        src: 'https://www.sweetpoint.com.br/wp-content/uploads/2017/12/mouse-maracuja.png',
        alt: 'Doce Maracuja',
        titulo: 'Doce Maracuja',
        descricao: '1 un Mousse de Maracuja ',
        preco: 5.99
      },
      {
        src: 'https://doceamor.com/wp-content/uploads/2018/07/torta-nata-com-morango-zero_fundo-branco.jpg',
        alt: 'Torta Morango',
        titulo: 'Torta Morango',
        descricao: '1 un Torta Morango',
        preco: 6.49
      },
      {
        src: 'https://doceamor.com/wp-content/uploads/2018/07/torta-limao-zero_fundo-branco.jpg',
        alt: 'Torta Limão',
        titulo: 'Torta Limão',
        descricao: '1 un Torta Limão',
        preco: 4.99
      },
      {
        src: 'https://d3o3bdzeq5san1.cloudfront.net/68/67803.jpg',
        alt: 'Torta Holandesa',
        titulo: 'Torta Holandesa',
        descricao: '1 un Torta Holandesa',
        preco: 9.99
      }
    ];
  }

  abrirDetalhes(item) {
    this.navCtrl.push(DetalhesPage, { item: item });
  }
}
