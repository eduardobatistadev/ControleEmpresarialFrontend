import { FornecedorRouting } from './fornecedor/fornecedor-routing.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteRouting } from './cliente/cliente-routing.module';


const routes: Routes = [
  ...FornecedorRouting,
  ...ClienteRouting
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
