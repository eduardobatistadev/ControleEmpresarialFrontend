import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/shared/service/cliente.service';
import { Cliente } from 'src/app/shared/model/cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  cliente: Cliente;
  

  constructor(private clienteService: ClienteService, route: Router) { }

  ngOnInit(): void {
    this.clienteService.findAll().subscribe(cliente => {
      this.cliente = cliente
    })
  }

}
