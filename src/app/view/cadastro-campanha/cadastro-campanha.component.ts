import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CampanhaService } from 'src/app/services/campanha.service';
@Component({
  selector: 'app-cadastro-campanha',
  templateUrl: './cadastro-campanha.component.html',
  styleUrls: ['./cadastro-campanha.component.css'],

})
export class CadastroCampanhaComponent implements OnInit {


  semana: any[] = [
    { nome: "Segunda" },
    { nome: "Terça" },
    { nome: "Quarta" },
    { nome: "Quinta" },
    { nome: "Sexta" },
    { nome: "Sábado" },
    { nome: "Domingo" }
  ]
  ciclos: any[] = [
    { nome: "Semanal" },
    { nome: "Mensal" },
    { nome: "Bimestral" },
    { nome: "Trimestral" },
    { nome: "Semestral" },
  ]
  response: any[] = [
    { nome: "Sim", value: true },
    { nome: "Não", value: false }
  ]

  tipoMeta: any[] = [
    { nome: "Por unidade vendido" },
    { nome: "Por valor de venda" }
  ]

  pagamentos: any[] = [
    { nome: "Em dinheiro da conta UseCash" },
    { nome: "Prêmio em produto" }
  ]



  formulario: any;

  constructor(private fb: FormBuilder,
    private CampanhaService: CampanhaService,
    private router: Router) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nome: [null, [Validators.required]],
      objetivo: [null, [Validators.required]],
      dataInicio: [null, [Validators.required]],
      dataFinal: [null, [Validators.required]],
      cicloPagamento: [null, [Validators.required]],
      diaSemana: [null, [Validators.required]],
      primeiroPagamento: [null, [Validators.required]],
      meta: [true, [Validators.required]],
      tipoMeta: [null],
      formaPagamento: [null, [Validators.required]],
      aceiteApp: [true, [Validators.required]],
      tipoMecanica: [null],
      formaApuracao: [null],
      lojasDaCampanha: [[]]
    })
  }

  receberDados(mecanica: any) {
    if (mecanica.tipoMecanica && mecanica.formaApuracao) {
      this.formulario.value.tipoMecanica = mecanica.tipoMecanica
      this.formulario.value.formaApuracao = mecanica.formaApuracao
    }
  }

  salvar() {
    this.CampanhaService.POST(this.formulario.value).subscribe(
      success => {
        console.log(success.json())
        this.router.navigate([`/cadastro-campanha/parte-2/${success.json().id}`])
      },
      error => console.log('Erro')
    )
  }

  getValid() {
    return this.formulario.value.nome
      && this.formulario.value.objetivo
      && this.formulario.value.dataInicio
      && this.formulario.value.dataFinal
      && this.formulario.value.cicloPagamento
      && this.formulario.value.diaSemana
      && this.formulario.value.primeiroPagamento
      && this.formulario.value.meta
      && this.formulario.value.tipoMeta
      && this.formulario.value.formaPagamento
      && this.formulario.value.aceiteApp
      && this.formulario.value.tipoMecanica
      && this.formulario.value.formaApuracao
  }
}
