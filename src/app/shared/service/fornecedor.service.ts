import { Fornecedor } from './../model/fornecedor';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/fornecedor';
  }

  public save(fornecedor: Fornecedor): Observable<Fornecedor>{
    return this.http.post<Fornecedor>(this.url, fornecedor);
  }

  public findAll(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(this.url);
  }

  public findById(id: number): Observable<Fornecedor> {
    return this.http.get<Fornecedor>(`${this.url}/${id}`);
  }

  public deleteById(id: number): void {
    this.http.delete(`${this.url}/${id}`).subscribe();
  }

  public update(fornecedor: Fornecedor): Observable<Fornecedor> {
    return this.http.put<Fornecedor>(this.url, fornecedor);
  }
}
