import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ShareDataService } from '../share-data.service';
import { HttpReqService } from '../http-req.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-delete-file',
  templateUrl: './delete-file.component.html',
  styleUrls: ['./delete-file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DeleteFileComponent {
  formDelete: FormGroup;
  inputDelete: string;


  constructor(private httpreq: HttpReqService, private share: ShareDataService) {
    this.httpreq = httpreq;
    this.share = share;
    this.formDelete = new FormGroup({
      inputForm: new FormControl('', Validators.required)
    });
  }

  readDeleteForm() {
    this.inputDelete = this.formDelete.controls.inputForm.value;
    if (this.inputDelete.endsWith('.txt') && this.formDelete.controls.inputForm.status === 'VALID') {
      this.httpreq.requestPost('http://localhost:3000/fileDelete', this.inputDelete, '')
        .subscribe((response: string) => {
          if (response !== this.inputDelete) {
            this.share.data$.next('File not exist!');
          } else {
            this.share.data$.next('File deleted: ' + response);
          }
        });
    } else {
      this.share.data$.next('Invalid file name! File must be .txt, or you have invalid status in console');
      console.log(this.formDelete.controls.inputForm.status);
    }
  }
}

