import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CadastrarComponent, HomeComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ProjetoModule { }
