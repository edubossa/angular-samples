import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'cursos',
    loadChildren: './cursos/cursos.module#CursosModule'
  },
  { path: 'alunos',
    loadChildren: './alunos/alunos.module#AlunosModule'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'cursos'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
