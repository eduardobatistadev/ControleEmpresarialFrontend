import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../shared/service/cliente.service';
import { ListarComponent } from './listar/listar.component';

@NgModule({
  declarations: [HomeComponent, CadastrarComponent, ListarComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  providers: [ ClienteService ]
})
export class ClienteModule { }
