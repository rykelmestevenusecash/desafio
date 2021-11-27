import { ProdutosService } from './../../../services/produtos.service';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos-campanha',
  templateUrl: './produtos-campanha.component.html',
  styleUrls: ['./produtos-campanha.component.css']
})
export class ProdutosCampanhaComponent implements OnInit {
  listProdutos: any[] = [];
  formulario: any;

  constructor(private fb: FormBuilder,
    private ProdutosService: ProdutosService,
    public route: ActivatedRoute,
  public router: Router) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nome: [null, Validators.required],
      idCampanha: [null],
      quantidadeProdutos: [0],
      produtos: [null],
      meta: [500]
    })
    this.listLoad()
  }

  async listLoad() {

    this.ProdutosService.GET('listaProdutos').subscribe(success => {
      if (success.status == 200) {
        this.listProdutos = success.json();
      }
    })

  }

  async salvar() {
    this.set()
    this.ProdutosService.POST(this.formulario.value).subscribe(element => {
      if (element.status == 201) {

        this.listLoad()
      }
    })
  }


  conditions(value: any) {
    return parseInt(value.idCampanha) == parseInt(this.route.snapshot.params['id']);
  }

  set() {
    this.formulario.value.idCampanha = this.route.snapshot.params['id']
    this.formulario.value.produtos = []
  }

  validate(): boolean {
    let value = false
    this.listProdutos.forEach(element => {
      if (element.produtos.length <= 0) {
        value = true
      }
    });
    return value
  }

}
