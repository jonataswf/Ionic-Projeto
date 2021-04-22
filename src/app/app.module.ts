import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BebidasPage } from '../pages/bebidas/bebidas';
import { EntradasPage } from '../pages/entradas/entradas';
import { LanchesPage } from '../pages/lanches/lanches';
import { RefeicoesPage } from '../pages/refeicoes/refeicoes';
import { SobremesasPage } from '../pages/sobremesas/sobremesas';
import { DetalhesPage } from '../pages/detalhes/detalhes';
import { SlidedetalhesPage } from '../pages/slidedetalhes/slidedetalhes';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BebidasPage,
    EntradasPage,
    LanchesPage,
    RefeicoesPage,
    SobremesasPage,
    DetalhesPage,
    SlidedetalhesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BebidasPage,
    EntradasPage,
    LanchesPage,
    RefeicoesPage,
    SobremesasPage,
    DetalhesPage,
    SlidedetalhesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
