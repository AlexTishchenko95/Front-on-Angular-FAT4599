import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InnerTextComponent } from './inner-text.component';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [InnerTextComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatDividerModule
  ],
  exports: [InnerTextComponent]
})
export class InnerTextModule { }
