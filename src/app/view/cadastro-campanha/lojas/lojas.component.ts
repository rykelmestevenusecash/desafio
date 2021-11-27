import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/services/produtos.service';
import { CampanhaService } from 'src/app/services/campanha.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Campanha } from 'src/app/domain/campanha.model';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lojas',
  templateUrl: './lojas.component.html',
  styleUrls: ['./lojas.component.css']
})

export class LojasComponent implements OnInit {

  filter: any;
  listaProdutosCampanha: any[] = []
  id: string = this.route.snapshot.params['id']
  searchControl: any;
  radioControl: any;
  listLojas: any[] = []
  campanha: any;
  lojas: any[] = []
  radioConteudo: any[] = [
    { nome: "Todas as lojas", value: 0 },
    { nome: "Quero selecionar as lojas", value: 1 }
  ]

  constructor(private ProdutosService: ProdutosService, private CampanhaService: CampanhaService, private route: ActivatedRoute, private fb: FormBuilder, public router: Router) { }

  ngOnInit(): void {
    this.campanha = []
    this.listLoad()


    this.searchControl = this.fb.control('')
    this.radioControl = this.fb.control(0)

    this.filter = this.fb.group({
      searchControl: this.searchControl,
      radio: this.radioControl
    })

    this.searchControl.valueChanges.subscribe((searchTerm: string) => this.ProdutosService.GET('lojas', searchTerm).subscribe(success => {
      this.listLojas = success.json()
    }))
    this.radioControl.valueChanges.subscribe((radio: number) => {
      this.searchControl.value = ''
      if (radio == 0) {
        this.ProdutosService.GET('lojas').subscribe(success => {
          this.listLojas = success.json()
        })
      }
    })
  }



  async listLoad() {
    this.ProdutosService.GET('lojas').subscribe(success => {
      if (success.status == 200) {
        this.listLojas = success.json();
      }
    })
    this.ProdutosService.GET('listaProdutos').subscribe(success => {
      if (success.status == 200) {
        this.listaProdutosCampanha = success.json();
      }
    })
    this.CampanhaService.GETByID(this.id).subscribe(success => {
      if (success.status == 200) {
        this.campanha = success.json()
        console.log(this.campanha)
        if(this.campanha.lojas != undefined){ this.lojas = this.campanha.lojas}
      }
    })
  }

  adicionar(event: any) {
    let SingProd = event
    let exist = undefined
    if (this.lojas) {
      exist = this.lojas.find((value) => value.codigo === SingProd.codigo)
    }
    if (exist == undefined) {
      SingProd['listaProdutos'] = this.listaProdutosCampanha
      console.log(this.lojas)
      this.lojas.push(SingProd)
      this.campanha.lojas = this.lojas
      this.enviar()
    }
  }

  enviar() {
    this.CampanhaService.PUT(this.campanha.id, this.campanha).subscribe(success => {
      if (success.status == 200) {
        this.campanha = success.json()
      }
    })
  }

  remover(event: any) {
    this.lojas.splice(this.lojas.indexOf(event), 1)
    this.campanha.lojas = this.lojas
    this.enviar()
  }

  exist(event: any) {

    if (this.lojas) {
      return this.lojas.find((value) => value.codigo === event.codigo)
    }
    return undefined
  }
  back() {
    this.router.navigate([`cadastro-campanha/parte-2/${this.id}`])
  }

}
