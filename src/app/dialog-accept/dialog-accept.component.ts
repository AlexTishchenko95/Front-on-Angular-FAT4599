import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-accept',
  templateUrl: './dialog-accept.component.html',
  styleUrls: ['./dialog-accept.component.scss']
})
export class DialogAcceptComponent {

  constructor(public dialogRef: MatDialogRef<DialogAcceptComponent>) { }

  onNoClick() {
    this.dialogRef.close();
  }
}
