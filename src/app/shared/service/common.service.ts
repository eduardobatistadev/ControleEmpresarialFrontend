import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  public demoSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  public idSubject: BehaviorSubject<any> = new BehaviorSubject(null);

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
}
