import { FinalizacaoComponent } from './view/cadastro-campanha/revisao/finalizacao/finalizacao.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroCampanhaComponent } from './view/cadastro-campanha/cadastro-campanha.component';
import { AppComponent } from 'src/app/app.component'
import { ProdutosCampanhaComponent } from './view/cadastro-campanha/produtos-campanha/produtos-campanha.component';
import { LojasComponent } from './view/cadastro-campanha/lojas/lojas.component';
import { MetasComponent } from './view/cadastro-campanha/metas/metas.component';
import { RevisaoComponent } from './view/cadastro-campanha/revisao/revisao.component';

export const routes: Routes = [
  { path: " ", component: AppComponent },
  {
    path: 'cadastro-campanha', children: [
      { path: "parte-1", component: CadastroCampanhaComponent },
      { path: 'parte-2/:id', component: ProdutosCampanhaComponent },
      { path: 'parte-3/:id', component: LojasComponent },
      { path: 'metas/:id', component: MetasComponent },
      { path: 'revisao/:id', component: RevisaoComponent },
      { path: 'finalizacao', component: FinalizacaoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
