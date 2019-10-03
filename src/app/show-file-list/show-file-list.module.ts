import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ShowFileListComponent } from './show-file-list.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ShowFileListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule
  ],
  exports: [ShowFileListComponent]
})

export class ShowFileListModule { }
