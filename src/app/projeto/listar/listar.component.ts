import { Component, OnInit } from '@angular/core';
import { Projeto } from 'src/app/shared/model/projeto';
import { CommonService } from 'src/app/shared/service/common.service';
import { Router } from '@angular/router';
import { ProjetoService } from 'src/app/shared/service/projeto.service';

@Component({
  selector: 'app-listar-projeto',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  projeto: Projeto;

  constructor(private projetoService:ProjetoService,route: Router,private common: CommonService) { }

  
  ngOnInit(): void {
    this.common.demoSubject.subscribe(res =>{
      this.buscarTodos();
    });
    this.buscarTodos();
  }

  buscarTodos(): void{
    this.projetoService.findAll().subscribe(projeto => {
      this.projeto = projeto
    });
  }

  reload() {
    location.reload();
  }

}
