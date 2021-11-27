import { Http } from "@angular/http";
import { api } from "src/app.api";
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Campanha } from "../domain/campanha.model";
import { take } from 'rxjs/operators'

@Injectable()
export class CampanhaService {

  constructor(private http: Http) { }

  POST(item:any): Observable<any>{
    return this.http.post(`${api}/campanha`, item).pipe(take(1))
    console.log('itme',`${api}/campanha`)
  }

  GETByID(id:any): Observable<any>{
    return this.http.get(`${api}/campanha/${id}`).pipe(take(1))
    console.log('itme',`${api}/campanha`)
  }

  PUT(id: any,item: any) {
    return this.http.put(`${api}/campanha/${id}`, item).pipe(take(1))
  }
}
