import { Component, OnInit } from '@angular/core';
import { CampanhaService } from 'src/app/services/campanha.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent implements OnInit {
  data: any = [];
  constructor(public CampanhaService: CampanhaService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dataLoad()
  }

  dataLoad() {
    this.CampanhaService.GETByID(this.route.snapshot.params['id']).subscribe(success => {
      this.data = success.json()
      console.log(this.data.nome)
    })
  }

}
