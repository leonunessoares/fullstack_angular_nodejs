import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'pessoa', redirectTo: 'pessoa/index', pathMatch: 'full'},
  { path: 'pessoa/index', component: IndexComponent },
  { path: 'pessoa/create', component: CreateComponent },
  { path: 'pessoa/edit/:idPessoa', component: EditComponent } 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }
