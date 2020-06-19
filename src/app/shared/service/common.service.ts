import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  public demoSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  public idSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  public idProjeto: BehaviorSubject<any> = new BehaviorSubject(null);
  public idCliente: BehaviorSubject<any> = new BehaviorSubject(null);



  setSubject(value: boolean) {
    if (value) {
      this.demoSubject.next(value);
    } else {
      this.demoSubject.next(null);
    }
  }

  setEditId(value: number) {
    if (value) {
      this.idSubject.next(value);
    } else {
      this.idSubject.next(null);
    }
  }

  setEditClienteId(value: number) {
    if (value) {
      this.idCliente.next(value);
    } else {
      this.idCliente.next(null);
    }
  }

  setEditProjetoId(value: number) {
    if (value) {
      this.idProjeto.next(value);
    } else {
      this.idProjeto.next(null);
    }
  }
}
