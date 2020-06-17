import { SharedModule } from './../shared/shared.module';
import { LoadingComponent } from './../fragments/loading/loading.component';
import { NgxViacepService } from '@brunoc/ngx-viacep';
import { FornecedorService } from './../shared/service/fornecedor.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { FormsModule } from '@angular/forms';
import { ListarComponent } from './listar/listar.component';

@NgModule({
  declarations: [HomeComponent, CadastrarComponent, ListarComponent ],
  imports: [
    CommonModule, FormsModule, SharedModule
  ],
  providers: [ FornecedorService, NgxViacepService ]
})
export class FornecedorModule { }
