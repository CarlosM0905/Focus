import { RouterModule } from '@angular/router';
/*================ IMPORTS ================*/
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
/*================ COMPONENTES ================*/
import { DocentesAdminComponent } from './docentes-admin/docentes-admin.component';
import { CursosAdminComponent } from './cursos-admin/cursos-admin.component';
import { CapacitadoresAdminComponent } from './capacitadores-admin/capacitadores-admin.component';

const ADMIN_CHILD_ROUTES: Routes = [
  {
    path: '',
    component: CursosAdminComponent,
  },
  {
    path: 'cursos',
    component: CursosAdminComponent,
  },
  {
    path: 'docentes',
    component: DocentesAdminComponent,
  },
  {
    path: 'calificaciones',
    component: CapacitadoresAdminComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ADMIN_CHILD_ROUTES)],
  exports: [RouterModule],
})
export class AdminChildRoutesModule {}
