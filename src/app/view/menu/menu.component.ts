import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-cont',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  panelOpenState = false;
  
  menuList: any[] = [
    { item: "Cadastro", rota: "/cadastro-campanha/parte-1", conteudo:'Cadastrar Campanha' },
    { item: "Pagamentos", rota: "", conteudo: '' },
    { item: "Faturas", rota: "", conteudo: '' },
    {item:"Colaboradores", rota:"", conteudo:''}
  ]

  constructor() { }

  ngOnInit(): void {
  }
}
