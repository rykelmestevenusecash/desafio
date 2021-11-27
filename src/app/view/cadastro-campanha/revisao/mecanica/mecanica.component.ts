import { Component, OnInit } from '@angular/core';
import { CampanhaService } from 'src/app/services/campanha.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-mecanica',
  templateUrl: './mecanica.component.html',
  styleUrls: ['./mecanica.component.css']
})
export class MecanicaComponent implements OnInit {

  dataMecaninca: any = [];

  constructor(public CampanhaService: CampanhaService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dataLoad()
  }

  dataLoad() {
    this.CampanhaService.GETByID(this.route.snapshot.params['id']).subscribe(success => {
      this.dataMecaninca = success.json()
    })
  }

}
