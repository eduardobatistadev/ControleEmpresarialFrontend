import { Component, OnInit } from '@angular/core';
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

  cliente: Cliente;
  sortedByName: boolean;


  constructor(private clienteService: ClienteService, route: Router, private common: CommonService) { }

  ngOnInit(): void {
    this.common.demoSubject.subscribe(res =>{
      this.buscarTodos();
    });
    this.buscarTodos();
  }

  buscarTodos(): void{
    this.clienteService.findAll().subscribe(cliente => {
      this.cliente = cliente
    });
  }

  reload() {
    location.reload();
  }

}
