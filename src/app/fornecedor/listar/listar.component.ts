import { CommonService } from './../../shared/service/common.service';
import { Fornecedor } from './../../shared/model/fornecedor';
import { FornecedorService } from './../../shared/service/fornecedor.service';
import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {


  constructor(private service: FornecedorService
            , private common: CommonService) { }

  fornecedores: Fornecedor[];

  ngOnInit(): void {
    this.common.demoSubject.subscribe(res => {
      this.buscarDados();
      });
    this.buscarDados();
  }


  buscarDados() {
    this.service.findAll().subscribe(data => {
      this.fornecedores = data.reverse();
    });
  }

  reload() {
    location.reload();
  }

}
