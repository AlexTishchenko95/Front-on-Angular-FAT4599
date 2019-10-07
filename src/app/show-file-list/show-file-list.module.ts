import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ShowFileListComponent } from './show-file-list.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ShowFileListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ShowFileListComponent]
})

export class ShowFileListModule { }
