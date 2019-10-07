import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogAcceptComponent } from './dialog-accept.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [DialogAcceptComponent],
  entryComponents: [
    DialogAcceptComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  exports: [DialogAcceptComponent]
})
export class DialogAcceptModule { }
