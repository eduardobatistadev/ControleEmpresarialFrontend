import { Component, OnInit } from '@angular/core';
import { Projeto } from 'src/app/shared/model/projeto';
import { Cliente } from 'src/app/shared/model/cliente';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjetoService } from 'src/app/shared/service/projeto.service';
import { Fornecedor } from 'src/app/shared/model/fornecedor';
import { FornecedorService } from 'src/app/shared/service/fornecedor.service';
import { observable, Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  projetos: Projeto[];
  projeto: Projeto;
  fornecedores: Fornecedor[];
  fornecedor: Fornecedor;

  
  constructor(private service: ProjetoService, private serviceFornecedor: FornecedorService, private route: ActivatedRoute) {
   
   }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.readById(id).subscribe(project => {
      this.projeto = project
    });

    this.serviceFornecedor.findAll().subscribe(fornecedores =>{
      this.fornecedores = fornecedores
    });
  }
  

}



