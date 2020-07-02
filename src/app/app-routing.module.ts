import { GaleriaComponent } from './projeto/listar/galeria/galeria.component';
import { FornecedorRouting } from './fornecedor/fornecedor-routing.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteRouting } from './cliente/cliente-routing.module';
import { AppComponent } from './app.component';
import { ProjetoRouting} from './projeto/projeto-routing.module';
import { GaleriaRouting } from './projeto/galeria-routing.module copy';



const routes: Routes = [
  { path: '', component: GaleriaComponent },
  ...FornecedorRouting,
  ...ClienteRouting,
  ...ProjetoRouting,
  ...GaleriaRouting,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
