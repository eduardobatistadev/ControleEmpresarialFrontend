import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../shared/service/cliente.service';

@NgModule({
  declarations: [HomeComponent, CadastrarComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [ ClienteService ]
})
export class ClienteModule { }
