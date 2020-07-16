import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Projeto } from '../model/projeto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/projeto';
   }

   public save(projeto: Projeto): Observable<Projeto>{
     return this.http.post<Projeto>(this.url, projeto);
   }

   public findAll(): Observable<Projeto[]>{
     return this.http.get<Projeto[]>(this.url);
   }
   public findById(id: number): Observable<Projeto>{
     return this.http.get<Projeto>(`${this.url}/${id}`);
   }

   readById(id: string): Observable<Projeto> {
     return this.http.get<Projeto>(`${this.url}/${id}`)
   }

   public deleteById(id: number): void{
    this.http.delete(`${this.url}/${id}`).subscribe();
   }

   public update(projeto: Projeto): Observable<Projeto> {
    return this.http.put<Projeto>(this.url, projeto);
  }
}
