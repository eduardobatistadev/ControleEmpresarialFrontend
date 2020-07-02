import { Component, OnInit } from '@angular/core';
import { Projeto } from 'src/app/shared/model/projeto';
import { Cliente } from 'src/app/shared/model/cliente';
import { Router } from '@angular/router';
import { ProjetoService } from 'src/app/shared/service/projeto.service';
import { Fornecedor } from 'src/app/shared/model/fornecedor';
import { FornecedorService } from 'src/app/shared/service/fornecedor.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  projetos: Projeto[];
  fornecedores: Fornecedor[];

  
  
  constructor(private service: ProjetoService, private serviceFornecedor: FornecedorService) { }

  ngOnInit(): void {
    this.service.findAll().subscribe(projetos => {
      this.projetos = projetos
    });

    this.serviceFornecedor.findAll().subscribe(fornecedores =>{
      this.fornecedores = fornecedores
    });
  }
  

}



