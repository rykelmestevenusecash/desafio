import { Component, OnInit, Input } from '@angular/core';
import { CampanhaService } from 'src/app/services/campanha.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProdutosService } from 'src/app/services/produtos.service';


@Component({
  selector: 'app-metas',
  templateUrl: './metas.component.html',
  styleUrls: ['./metas.component.css']
})
export class MetasComponent implements OnInit {

  campanha: any;
  listProdutos: any[] = [];
  @Input() label: string = 'Definir Metas'
  constructor(private CampanhaService: CampanhaService, public ProdutosService: ProdutosService, public route: ActivatedRoute, public Router: Router) { }

  ngOnInit(): void {
    this.listLoad()
  }

  listLoad() {
    this.CampanhaService.GETByID(this.route.snapshot.params['id']).subscribe(success => {
      if (success.status == 200) {
        this.campanha = success.json()
        console.log(this.campanha)
        this.listProdutos = this.campanha.lojas[0].listaProdutos
        console.log(this.listProdutos)
      }
    })
  }

  setLojas(event: any) {
    this.campanha.lojas = event
    this.CampanhaService.PUT(this.route.snapshot.params['id'], this.campanha).subscribe(success => {
      if (success.status == 200) { 
        this.campanha = success.json()
      }
    })
  }

}
