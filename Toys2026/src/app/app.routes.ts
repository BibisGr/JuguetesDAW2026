import { Routes } from '@angular/router';
import {JuguetesListComponent} from './componentes/juguetes-list/juguetes-list.component';
import {JuguetesEditComponent} from './componentes/juguetes-edit/juguetes-edit.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'juguete/list',
    pathMatch: 'full'
  },
  {
    path: 'juguete/list',
    component: JuguetesListComponent
  },
  {
    path: 'juguete/add',
    component: JuguetesEditComponent
  },
  {
    path: 'juguete/edit/:id',
    component: JuguetesEditComponent
  }
];
