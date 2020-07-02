import { Component, OnInit } from '@angular/core';
import { Projeto } from 'src/app/shared/model/projeto';
import { Cliente } from 'src/app/shared/model/cliente';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  projetos: Projeto[];
  
  
  constructor() { }

  ngOnInit(): void {
  }

}


