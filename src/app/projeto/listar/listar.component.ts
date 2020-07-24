import { Component, OnInit } from '@angular/core';
import { Projeto } from 'src/app/shared/model/projeto';
import { CommonService } from 'src/app/shared/service/common.service';
import { Router} from '@angular/router';
import { ProjetoService } from 'src/app/shared/service/projeto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar-projeto',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  projetos: Projeto[];
  sortedByName: boolean;


  constructor(private projetoService: ProjetoService, router: Router, private common: CommonService, private route: ActivatedRoute) { }


  ngOnInit(): void {

    this.common.demoSubject.subscribe(res => {
      this.buscarTodos();
    }, error => console.log(error.error.text));
    this.buscarTodos();

    
  }

  edit(id: number){
    this.common.setEditProjetoId(id);
  }

  buscarTodos(): void{
    this.projetoService.findAll().subscribe(projeto => {
      this.projetos = projeto;
      console.log(this.projetos);
    });
  }

  buscarDados() {
    this.projetoService.findAll().subscribe(data => {
      this.projetos = data.reverse();
    });
  }

  dados() {
    this.projetos.sort((a, b) => {
      if (a.nomeProjeto.toLocaleUpperCase() < b.nomeProjeto.toLocaleUpperCase()) { return -1; }
      if (a.nomeProjeto.toLocaleUpperCase() > b.nomeProjeto.toLocaleUpperCase()) { return 1; }
      return 0;
    });
    this.sortedByName = true;
  }

  reverse() {
    this.projetos.reverse();
    this.sortedByName = false;
  }

  reload() {
    location.reload();
  }

  getFirstImg(projeto: Projeto): string {
    return projeto.img.find( element => element !== null);
  }

  delete (id: number, nome: string) {
    if (confirm('Certeza que deseja excluir o projeto ' + nome)) {
      this.projetoService.deleteById(id).subscribe(data => {
        this.buscarDados();
      }, error => {
        console.log(error);
      });
    } else {

    }
  }


}
