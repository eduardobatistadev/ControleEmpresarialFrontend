import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { ClienteService } from 'src/app/shared/service/cliente.service';
import { Cliente } from 'src/app/shared/model/cliente';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  clientes: Cliente[];
  sortedByName: boolean;

  constructor(private clienteService: ClienteService, route: Router, private common: CommonService) { }

  ngOnInit(): void {
    this.common.demoSubject.subscribe(res => {
      this.buscarTodos();
    });
    this.buscarTodos();
  }

  buscarDados() {
    this.clienteService.findAll().subscribe(data => {
      this.clientes = data.reverse();
    });
  }

  dados() {
    this.clientes.sort((a, b) => {
      if (a.nome.toLocaleUpperCase() < b.nome.toLocaleUpperCase()) { return -1; }
      if (a.nome.toLocaleUpperCase() > b.nome.toLocaleUpperCase()) { return 1; }
      return 0;
    });
    this.sortedByName = true;
  }

  reverse() {
    this.clientes.reverse();
    this.sortedByName = false;
  }

  buscarTodos(): void{
    this.clienteService.findAll().subscribe(data => {
        this.clientes = data;
    });
  }

  reload() {
    location.reload();
  }

  edit(id: number) {
    this.common.setEditId(id);
  }

  delete(id: number, nome: string) {
    if (confirm('Certeza que deseja excluir o cliente ' + nome)) {
      this.clienteService.deleteById(id).subscribe(data => {
        this.buscarDados();
      }, error => {
        console.log(error);
      });
    } else {

    }
  }
}
