import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjetoService } from 'src/app/shared/service/projeto.service';
import { Projeto } from 'src/app/shared/model/projeto';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  projeto: Projeto[];
  projetoInicial: Projeto[];

  constructor(private router: Router, private projetoService: ProjetoService) { }

  ngOnInit(): void {
    this.buscaTodos();
  }

  buscaTodos() {
    this.projetoService.findAll().subscribe(projeto => {
      this.projeto = projeto;
      this.projetoInicial = this.projeto;
    });
  }

  doSearch(value: string) {
    this.projeto = this.projetoInicial;
    console.log(`value=${value}`);
    this.projeto = this.projeto.filter(f => {
      console.log(f.nomeProjeto.toLowerCase().indexOf(value.toLowerCase()) >= 0);
      return f.nomeProjeto.toLowerCase().indexOf(value.toLowerCase()) >= 0;
    });
  }

}
