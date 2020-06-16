import { CommonService } from 'src/app/shared/service/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private common: CommonService) { }

  ngOnInit(): void {
    this.common.idSubject.subscribe(res => {
      if (res !== null) {
        this.abreForm();
      } else {
        this.fechaForm();
      }
    });
  }

  abreForm() {
    const div = document.getElementById('formFornecedor');
    div.className = 'collapse show';
  }

  fechaForm() {
    const div = document.getElementById('formFornecedor');
    div.className = 'collapse';
  }
}
