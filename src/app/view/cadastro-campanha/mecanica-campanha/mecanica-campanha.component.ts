import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-mecanica-campanha',
  templateUrl: './mecanica-campanha.component.html',
  styleUrls: ['./mecanica-campanha.component.css']
})
export class MecanicaCampanhaComponent implements OnInit {

  @Output() mecanica = new EventEmitter()


  listProduto: any[] = [
    { nome: "Grupo de fornecedor" },
    { nome: "Um fornecedor" },
  ]
  formaApuracao: any[] = [
    { nome: "por valor de venda campanha" },
    { nome: "por unidade na campanha toda" },
    { nome: "grupo de meta" },
    { nome: "por unidade do produto" },
    { nome: "por valor de venda do produto" },
    { nome: "por meta de lista de produto alcançada" }
  ]
   
  mecanicaObj = {
    tipoMecanica: null,
    formaApuracao: null
  }
  constructor(private modalService: NgbModal) { }
  ngOnInit(): void {
  }
  // Abrir modal
  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result
  }

  emitAddEvent() {
    if (this.mecanicaObj.formaApuracao && this.mecanicaObj.tipoMecanica) {
      this.mecanica.emit(this.mecanicaObj)
      this.modalService.dismissAll() 
    }
  }
}
