import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowFileListComponent } from './show-file-list/show-file-list.component';

const routes: Routes = [
  { path: 'all', component: ShowFileListComponent },
  { path: 'create', loadChildren: () => import('./create-file/create-file.module').then(m => m.CreateFileModule) },
  { path: 'remove/:id', loadChildren: () => import('./delete-file/delete-file.module').then(m => m.DeleteFileModule) },
  { path: 'update/:id', loadChildren: () => import('./upgrade-file/upgrade-file.module').then(m => m.UpgradeFileModule) },
  { path: '**', redirectTo: 'all' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
