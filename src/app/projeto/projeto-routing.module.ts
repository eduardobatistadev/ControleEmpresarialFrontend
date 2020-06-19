import { DetalhesComponent } from './detalhes/detalhes.component';
import {HomeComponent} from './home/home.component';

export const ProjetoRouting = [{
    path: 'projeto', component: HomeComponent
}, {
  path: 'projeto/:id', component: DetalhesComponent
}
];
