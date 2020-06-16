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
  sortedByName: boolean;

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

  dados() {
    this.fornecedores.sort((a, b) => {
      if (a.nomeEmpresa.toLocaleUpperCase() < b.nomeEmpresa.toLocaleUpperCase()) { return -1; }
      if (a.nomeEmpresa.toLocaleUpperCase() > b.nomeEmpresa.toLocaleUpperCase()) { return 1; }
      return 0;
    });
    this.sortedByName = true;
  }

  reverse() {
    this.fornecedores.reverse();
    this.sortedByName = false;
  }

  reload() {
    location.reload();
  }

  edit(id: number) {
    this.common.setEditId(id);
  }

  delete(id: number, nome: string) {
    if (confirm('Certeza que deseja excluir o fornecedor ' + nome)) {
      this.service.deleteById(id).subscribe(data => {
        this.buscarDados();
      }, error => {
        console.log(error);
      });
    } else {

    }
  }
}
