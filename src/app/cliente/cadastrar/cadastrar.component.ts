import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/shared/service/cliente.service';
import { Cliente } from 'src/app/shared/model/cliente';

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  cliente = new Cliente();

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
  }

}
