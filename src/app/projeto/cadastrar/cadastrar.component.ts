import { Component, OnInit } from '@angular/core';
import { ProjetoService } from 'src/app/shared/service/projeto.service';
import { Projeto } from 'src/app/shared/model/projeto';

@Component({
  selector: 'app-cadastrar-projeto',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  projeto = new Projeto();

  constructor(projetoService: ProjetoService) { }

  ngOnInit(): void {
  }

}
