import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormsModule, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-metas-modal',
  templateUrl: './metas-modal.component.html',
  styleUrls: ['./metas-modal.component.css']
})
export class MetasModalComponent implements OnInit {

  @Input() lojas: any;
  @Input() idListaProdutos: number = 0;
  @Output() lojasMeta = new EventEmitter()
  @Input() label = ''


  formulario: any;
  formControl: any;

  constructor(public modalService: NgbModal, public fb: FormBuilder, public FormsModule: FormsModule) { }

  ngOnInit(): void {

    this.formControl = this.fb.control('')
    this.formulario = this.fb.group({
      meta: this.formControl
    })
    
  }
  open(content: any) {
    console.log(this.lojas)
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result
  }

  enviar() {
    this.lojasMeta.emit(this.lojas)
    this.formulario.controls['meta'].value = '';
      this.modalService.dismissAll() 
  }

  setMeta(event: any, item: any) {
    let lista: any[] = item.listaProdutos
    lista.forEach(element => {
      if (element.id == this.idListaProdutos) {
        element.meta = event
      }
    });
    this.lojas.forEach((element: { id: any; }) => {
      if (element.id == item.id) {
        element = item
      }
    });
  }

  metaAtual(item: any) {
    let meta
    item.listaProdutos.forEach((element: { id: any; meta: any }) => {
      if (element.id == this.idListaProdutos) {
        console.log(element.meta)
       meta = `${element.meta}`
      }
    });
    return meta
  }

}
