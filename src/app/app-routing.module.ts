import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { ShowFileListComponent } from './show-file-list/show-file-list.component';
import { CreateFileComponent } from './create-file/create-file.component';
import { DeleteFileComponent } from './delete-file/delete-file.component';
import { UpgradeFileComponent } from './upgrade-file/upgrade-file.component';

const routes: Routes = [
  // { path: '', component: HeaderComponent },
  { path: 'all', component: ShowFileListComponent },
  { path: 'create', component: CreateFileComponent },
  { path: 'remove', component: DeleteFileComponent },
  { path: 'update', component: UpgradeFileComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
