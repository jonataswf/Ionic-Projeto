import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalhesPage } from '../detalhes/detalhes';

@IonicPage()
@Component({
  selector: 'page-lanches',
  templateUrl: 'lanches.html',
})
export class LanchesPage {

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
        src: 'https://www.cardapiofox.com.br/wp-content/uploads/2020/03/xsalada2.png',
        alt: 'X Salada',
        titulo: 'X Salada',
        descricao: '1 Hamburguer, Alface, Queijo, Salada e Tomate',
        preco: 13.99
      },
      {
        src: 'https://cdn.awsli.com.br/1000x1000/1236/1236041/produto/47096785/71b870e9d9.jpg',
        alt: 'X Bacon',
        titulo: 'X Bacon',
        descricao: '1 Hamburguer, Bacon, Maionese Especial, Alface, Queijo, Salada e Tomate',
        preco: 16.99
      },
      {
        src: 'https://zullalanches.com.br/wp-content/uploads/2020/08/61264-king-sandwich-hamburger-food-cheeseburger-veggie-fast.png',
        alt: 'Triplo Burguer',
        titulo: 'Triplo Burguer',
        descricao: '3 Hamburguer, Alface, Queijo, Salada e Tomate',
        preco: 18.99
      },
      {
        src: 'https://d25dk4h1q4vl9b.cloudfront.net/media/images/menu-content/BR/sanduiches-de-frango/supreme-grill_new2.png',
        alt: 'X Chicken',
        titulo: 'X Chicken',
        descricao: '1 Hamburguer de frango empanado, Alface, Maionese, Queijo, Salada e Tomate',
        preco: 17.99
      },
      {
        src: 'https://d25dk4h1q4vl9b.cloudfront.net/media/images/menu-content/BR/sanduiches-de-carne/xburguer_new.png',
        alt: 'Cheeseburger',
        titulo: 'Cheeseburger',
        descricao: '1 Hamburguer e Queijo',
        preco: 11.99
      }
    ];
  }

  abrirDetalhes(item) {
    this.navCtrl.push(DetalhesPage, { item: item });
  }
}
