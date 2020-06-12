import { FornecedorRouting } from './fornecedor/fornecedor-routing.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteRouting } from './cliente/cliente-routing.module';
import { AppComponent } from './app.component';


const routes: Routes = [
  ...FornecedorRouting,
  ...ClienteRouting
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],         
})
export class AppRoutingModule { }
