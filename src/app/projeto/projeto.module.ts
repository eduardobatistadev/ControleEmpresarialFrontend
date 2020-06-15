import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [CadastrarComponent, HomeComponent],
  imports: [
    CommonModule
  ]
})
export class ProjetoModule { }
