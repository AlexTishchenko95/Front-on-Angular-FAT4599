import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowFileListComponent } from './show-file-list/show-file-list.component';
import { CreateFileComponent } from './create-file/create-file.component';
import { DeleteFileComponent } from './delete-file/delete-file.component';
import { UpgradeFileComponent } from './upgrade-file/upgrade-file.component';

const routes: Routes = [
  { path: 'all', component: ShowFileListComponent },
  { path: 'create', component: CreateFileComponent },
  { path: 'remove/:id', component: DeleteFileComponent },
  { path: 'update/:id', component: UpgradeFileComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
