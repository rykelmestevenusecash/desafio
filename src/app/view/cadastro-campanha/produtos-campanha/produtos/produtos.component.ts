import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProdutosService } from 'src/app/services/produtos.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})

export class ProdutosComponent implements OnInit {

  @Input() categoriaProdutos: any;

  listaDeProdutos: any;
  produtos: any[] = []
  searchForm: any;
  searchControl: any;
  constructor(private modalService: NgbModal,
    private ProdutosService: ProdutosService,
    private route: ActivatedRoute,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.listLoad()

    this.searchControl = this.fb.control('')
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    })

    this.searchControl.valueChanges.subscribe((searchTerm: string) => this.ProdutosService.GET('produtos', searchTerm).subscribe(success => {
      this.listaDeProdutos = success.json()
    }))
  }

  listLoad() {
    this.ProdutosService.GET('produtos').subscribe(success => {
      if (success) {
        this.listaDeProdutos = success.json()
        this.produtos = this.categoriaProdutos.produtos
      }
    })
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result
  }

  adicionar(event: any) {
    let SingProd = event
    let exist = this.produtos.find((value) => value.codigo === SingProd.codigo)
    if (exist == undefined) {
      this.produtos.push(SingProd)
      this.categoriaProdutos.produtos = this.produtos
      this.enviar()
      this.listLoad()
    }
  }

  remover(event: any) {

    this.produtos.splice(this.produtos.indexOf(event), 1)
    this.categoriaProdutos.produtos = this.produtos
    this.enviar()

  }

  enviar() {
    this.ProdutosService.PUT(this.categoriaProdutos.id, this.categoriaProdutos, 'listaProdutos').subscribe(success => {
      if (success.status == 200) {
        this.categoriaProdutos = success.json()
      }
    })
  }

  exist(event: any) {
    return this.produtos.find((value) => value.codigo === event.codigo)
  }

  
}
