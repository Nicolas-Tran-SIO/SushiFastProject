import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'; 
@Injectable({
providedIn: 'root'
})
export class SushiBoxService {
constructor(private http:HttpClient) { }

public Box(): Observable<any> {
   let resultat =this.http.get(environment.apiBaseUrl);
   console.log(resultat)
   return resultat;
  }
}