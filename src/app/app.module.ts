import { ProdutosService } from './services/produtos.service';


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './view/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CadastroCampanhaComponent } from './view/cadastro-campanha/cadastro-campanha.component';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app-routing.module';
import { MatListModule } from '@angular/material/list'

import {ButtonModule} from 'primeng/button';
import { MecanicaCampanhaComponent } from './view/cadastro-campanha/mecanica-campanha/mecanica-campanha.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpModule } from '@angular/http';
import { CampanhaService } from './services/campanha.service';
import { ProdutosCampanhaComponent } from './view/cadastro-campanha/produtos-campanha/produtos-campanha.component';
import { ProdutosComponent } from './view/cadastro-campanha/produtos-campanha/produtos/produtos.component';
import { switchMap } from 'rxjs/operators';
import { MatIconModule } from '@angular/material/icon';
import { LojasComponent } from './view/cadastro-campanha/lojas/lojas.component';
import { MetasComponent } from './view/cadastro-campanha/metas/metas.component';
import { MetasModalComponent } from './view/cadastro-campanha/metas/metas-modal/metas-modal.component';
import { RevisaoComponent } from './view/cadastro-campanha/revisao/revisao.component';
import { DadosComponent } from './view/cadastro-campanha/revisao/dados/dados.component';
import { MecanicaComponent } from './view/cadastro-campanha/revisao/mecanica/mecanica.component';
import { FinalizacaoComponent } from './view/cadastro-campanha/revisao/finalizacao/finalizacao.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CadastroCampanhaComponent,
    MecanicaCampanhaComponent,
    ProdutosCampanhaComponent,
    ProdutosComponent,
    LojasComponent,
    MetasComponent,
    MetasModalComponent,
    RevisaoComponent,
    DadosComponent,
    MecanicaComponent,
    FinalizacaoComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    RouterModule.forRoot(routes),
    ButtonModule,
    ModalModule,
    HttpModule,
    MatIconModule
    
  ],
  providers: [CampanhaService, ProdutosService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
