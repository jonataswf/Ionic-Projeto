import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalhesPage } from '../detalhes/detalhes';

@IonicPage()
@Component({
  selector: 'page-bebidas',
  templateUrl: 'bebidas.html',
})

export class BebidasPage {

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
        src: 'https://br.toluna.com/dpolls_images/2018/03/04/32938c09-e5f5-4156-a044-0ce299d2b21f_x365.jpg',
        alt: 'Água',
        titulo: 'Água Bonafont',
        descricao: 'Sem Gás 500ml 1 Un',
        preco: 1.38
      },
      {
        src: 'https://br.toluna.com/dpolls_images/2016/04/27/654d5d43-e484-4f4c-b914-5625c2d3ce06_x300.jpg',
        alt: 'Coca lata',
        titulo: 'Coca-Cola Lata',
        descricao: 'Lata 350ml 1 un',
        preco: 3.49
      },
      {
        src: 'https://www.extra-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1463634346',
        alt: 'Coca 2 litros',
        titulo: 'Coca-Cola',
        descricao: '2 Litros 1 un',
        preco: 7.99
      },
      {
        src: 'https://www.extra-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1464202285',
        alt: 'Coca Zero',
        titulo: 'Coca-Cola Zero',
        descricao: '2 Litros 1 un',
        preco: 8.99
      },
      {
        src: 'https://carrefourbr.vtexassets.com/arquivos/ids/190082-800-auto?width=800&height=auto&aspect=true',
        alt: 'Cerveja',
        titulo: 'Brahma',
        descricao: 'Lata 350ml 1 un',
        preco: 2.59
      }
    ];
  }

  abrirDetalhes(item) {
    this.navCtrl.push(DetalhesPage, { item: item });
  }
}
