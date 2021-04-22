import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalhesPage } from '../detalhes/detalhes';

@IonicPage()
@Component({
  selector: 'page-refeicoes',
  templateUrl: 'refeicoes.html',
})
export class RefeicoesPage {

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
        src: 'https://image.freepik.com/fotos-gratis/paella-de-massa-de-frutos-do-mar-culinaria-espanhola-isolada-em-fundo-branco-vista-de-cima_75891-813.jpg',
        alt: 'Paella',
        titulo: 'Paella',
        descricao: 'Paella de Camarão, Lula e Mexilhões',
        preco: 34.96
      },
      {
        src: 'https://i.pinimg.com/originals/24/bf/24/24bf246724c44ebf08e6eacf863c3591.jpg',
        alt: 'Bife Batata',
        titulo: 'Bife Batata',
        descricao: 'Arroz, Feijão, Bife, Batata Frita e Salada',
        preco: 16.55
      },
      {
        src: 'https://larseguros.files.wordpress.com/2011/01/strogonoff.jpg',
        alt: 'strogonoff ',
        titulo: 'strogonoff ',
        descricao: 'Arroz, Strogonoff  de Frango e Batata Palha',
        preco: 21.75
      },
      {
        src: 'https://st2.depositphotos.com/4366637/10793/i/600/depositphotos_107938278-stock-photo-parmigiana-meal-white-background.jpg',
        alt: 'Parmegiana',
        titulo: 'Parmegiana',
        descricao: 'Arroz, Parmegiana de Carne, Mussarela e Batata',
        preco: 17.99
      },
      {
        src: 'https://img.freepik.com/fotos-gratis/porcao-de-lasanha-saborosa-isolada-no-branco_220507-7804.jpg?size=626&ext=jpg',
        alt: 'Lazanha',
        titulo: 'Lazanha',
        descricao: 'Lazanha de Carne',
        preco: 22.95
      }
    ];
  }

  abrirDetalhes(item) {
    this.navCtrl.push(DetalhesPage, { item: item });
  }

}
