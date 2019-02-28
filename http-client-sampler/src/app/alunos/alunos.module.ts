import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunosRoutingModule } from './alunos-routing.module';
import { AlunosListComponent } from './alunos-list/alunos-list.component';

@NgModule({
  imports: [
    CommonModule,
    AlunosRoutingModule
  ],
  declarations: [AlunosListComponent]
})
export class AlunosModule { }
