import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RefeicoesPage } from './refeicoes';

@NgModule({
  declarations: [
    RefeicoesPage,
  ],
  imports: [
    IonicPageModule.forChild(RefeicoesPage),
  ],
})
export class RefeicoesPageModule {}
