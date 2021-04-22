import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SlidedetalhesPage } from '../slidedetalhes/slidedetalhes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: {
    titulo: string;
    descSlide: string;
    descricao: string;
    src1: string;
    alt1: string;
    src2: string;
    alt2: string;
    src3: string;
    alt3: string;
    preco: number;
  }[];

  constructor(public navCtrl: NavController) {

    this.items = [
      {
        titulo: "Prato do Dia!",
        descSlide: "<b>Promoção imperdivel!<br> Prato do dia + Entrada + Sobremesa<br> 10% de desconto</b><br> Clique no botão abaixo para maiores detalhes",
        descricao: "<b>Prato Principal:</b> Parmegiana<br><b>Entrada:</b> Salada<br><b>Sobremesa:</b> Pudim",
        src1: "https://st2.depositphotos.com/4366637/10793/i/600/depositphotos_107938278-stock-photo-parmigiana-meal-white-background.jpg",
        alt1: "Prato Principal",
        src2: "https://s1.1zoom.me/b5050/660/Salads_Vegetables_Pepper_Lemons_White_background_543226_1600x1200.jpg",
        alt2: "Entrada",
        src3: "https://cdn-0.imagensemoldes.com.br/wp-content/uploads/2020/05/Pudim-com-Chantily-Doces-PNG.png",
        alt3: "Sobremesa",
        preco: 26.97
      }
    ];
  }

  abrirPromo(item: any) {
    this.navCtrl.push(SlidedetalhesPage, { item: item });
  }
}

