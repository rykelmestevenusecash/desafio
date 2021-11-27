import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-revisao',
  templateUrl: './revisao.component.html',
  styleUrls: ['./revisao.component.css']
})
export class RevisaoComponent implements OnInit {
  active = 'top';
  constructor(public route: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
  }

}
