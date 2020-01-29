import { EditarComponent } from './editar/editar.component';
import { ListagemComponent } from './listagem/listagem.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarteiraPageRoutingModule } from './carteira-routing.module';

import { CarteiraPage } from './carteira.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarteiraPageRoutingModule
  ],
  declarations: [CarteiraPage,
    ListagemComponent,
    EditarComponent]
})
export class CarteiraPageModule {}
