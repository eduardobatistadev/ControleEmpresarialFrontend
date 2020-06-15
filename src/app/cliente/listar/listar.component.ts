import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/shared/service/cliente.service';
import { Cliente } from 'src/app/shared/model/cliente';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  cliente: Cliente[] = [];
  data: Cliente;

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {

  }

}
