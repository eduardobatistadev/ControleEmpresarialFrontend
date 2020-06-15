import { FornecedorRouting } from './fornecedor/fornecedor-routing.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteRouting } from './cliente/cliente-routing.module';
import { AppComponent } from './app.component';
import { ProjetoRouting} from './projeto/projeto-routing.module';


const routes: Routes = [
  ...FornecedorRouting,
  ...ClienteRouting,
  ...ProjetoRouting
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],         
})
export class AppRoutingModule { }
