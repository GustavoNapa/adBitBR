import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
  {
    path: 'inicio',
    loadChildren: () => import('../inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'ads',
    loadChildren: () => import('../ads/ads.module').then( m => m.AdsPageModule)
  },
  {
    path: 'carteira',
    loadChildren: () => import('../carteira/carteira.module').then( m => m.CarteiraPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('../perfil/perfil.module').then( m => m.PerfilPageModule)
  }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
