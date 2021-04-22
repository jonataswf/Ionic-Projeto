import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { BebidasPage } from '../pages/bebidas/bebidas';
import { EntradasPage } from '../pages/entradas/entradas';
import { LanchesPage } from '../pages/lanches/lanches';
import { RefeicoesPage } from '../pages/refeicoes/refeicoes';
import { SobremesasPage } from '../pages/sobremesas/sobremesas';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;
  pages: Array<{ title: string, component: any }>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      { title: 'Bebidas', component: BebidasPage },
      { title: 'Entradas', component: EntradasPage },
      { title: 'Lanches', component: LanchesPage },
      { title: 'Refeicoes', component: RefeicoesPage },
      { title: 'Sobremesas', component: SobremesasPage }
    ];
  }
  openPage(page: any): void {
    this.nav.push(page.component);
  }
}

