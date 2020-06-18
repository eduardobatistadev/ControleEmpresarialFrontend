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
    }
  });
  }

  abreForm() {
    const button = document.getElementById('formButton');
    const div = document.getElementById('formCliente');
    if (!div.classList.contains('show')) {
      button.click();
    } else {
    }
  }

}
