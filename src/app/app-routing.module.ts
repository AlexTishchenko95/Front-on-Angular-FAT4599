import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowFileListComponent } from './show-file-list/show-file-list.component';

const routes: Routes = [
  { path: 'all', component: ShowFileListComponent },
  { path: 'create', loadChildren: './create-file/create-file.module#CreateFileModule' },
  { path: 'remove/:id', loadChildren: './delete-file/delete-file.module#DeleteFileModule' },
  { path: 'update/:id', loadChildren: './upgrade-file/upgrade-file.module#UpgradeFileModule' },
  { path: '**', redirectTo: 'all' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
