import { FornecedorService } from './../shared/service/fornecedor.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, CadastrarComponent],
  imports: [
    CommonModule, FormsModule
  ],
  providers: [ FornecedorService ]
})
export class FornecedorModule { }
