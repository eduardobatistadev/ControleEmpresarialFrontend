import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ListarComponent } from './listar/listar.component';



@NgModule({
  declarations: [CadastrarComponent, HomeComponent, ListarComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ProjetoModule { }
