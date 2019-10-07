import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ShareDataService } from '../share-data.service';
import { HttpReqService } from '../http-req.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { extentionValidator } from '../extention-validator';
import { MatDialog } from '@angular/material/dialog';
import { DialogAcceptComponent } from '../dialog-accept/dialog-accept.component';

@Component({
  selector: 'app-delete-file',
  templateUrl: './delete-file.component.html',
  styleUrls: ['./delete-file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteFileComponent implements OnInit {
  formDelete: FormGroup;

  constructor(private httpreq: HttpReqService, private share: ShareDataService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.formDelete = new FormGroup({
      name: new FormControl('', [Validators.required, extentionValidator])
    });
  }

  onDeleteFile() {
    const { name } = this.formDelete.value;
    this.httpreq.requestPost('fileDelete', name, '')
      .subscribe((response: string) => {
        if (response !== name) {
          this.share.data$.next('File not exist!');
        } else {
          this.share.data$.next('File deleted: ' + response);
        }
      });
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogAcceptComponent, {
      width: '300px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      result ? this.onDeleteFile() : console.log('Dialog window closed');
    });
  }
}

