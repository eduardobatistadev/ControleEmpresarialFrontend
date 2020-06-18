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

  projeto: Projeto[]

  constructor(private router: Router, private projetoService: ProjetoService) { }

  ngOnInit(): void {
    this.projetoService.findAll().subscribe(projeto =>{
      this.projeto = projeto
    });
  }

  doSearch(value: string){
    console.log(`value=${value}`);
    this.router.navigateByUrl(`/galeria/${value}`);
  }

}
