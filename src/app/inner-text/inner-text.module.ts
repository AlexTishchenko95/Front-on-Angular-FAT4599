import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InnerTextComponent } from './inner-text.component';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [InnerTextComponent],
  imports: [
    CommonModule,
    MatListModule
  ],
  exports: [InnerTextComponent]
})
export class InnerTextModule { }
