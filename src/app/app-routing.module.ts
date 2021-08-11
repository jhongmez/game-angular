import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'add', loadChildren: () => import('./characters/add/add.module').then(m => m.AddModule) }, { path: 'list', loadChildren: () => import('./characters/list/list.module').then(m => m.ListModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
