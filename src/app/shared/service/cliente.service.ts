import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../model/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/cliente';
   }

   public save(cliente: Cliente): Observable<Cliente>{
     return this.http.post<Cliente>(this.url, cliente);
   }

   public findAll(): Observable<Cliente[]>{
     return this.http.get<Cliente[]>(this.url);
   }
   public findById(id: number): Observable<Cliente>{
     return this.http.get<Cliente>(`${this.url}/${id}`);
   }

   public deleteById(id: number): Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
   }

   public update(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(this.url, cliente);
  }

}
