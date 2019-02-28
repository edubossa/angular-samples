import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunosListComponent } from './alunos-list/alunos-list.component';

const routes: Routes = [
  { path: '', component: AlunosListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
