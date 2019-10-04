import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ShareDataService } from '../share-data.service';
import { HttpReqService } from '../http-req.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-file',
  templateUrl: './create-file.component.html',
  styleUrls: ['./create-file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CreateFileComponent {
  formCreate: FormGroup;
  inputCreate: string;

  constructor(private httpreq: HttpReqService, private share: ShareDataService) {
    this.httpreq = httpreq;
    this.share = share;
    this.formCreate = new FormGroup({
      inputForm: new FormControl('', Validators.required)
    });
  }


  readCreateForm() {
    this.inputCreate = this.formCreate.controls.inputForm.value;
    if (this.inputCreate.endsWith('.txt') && this.formCreate.controls.inputForm.status === 'VALID') {
      this.httpreq.requestPost('http://localhost:3000/fileCreate', this.inputCreate, '')
        .subscribe((response: string) => {
          this.share.data$.next('File created: ' + response);
        });
    } else {
      this.share.data$.next('Invalid file name! File must be .txt, or you have invalid status in console');
      console.log(this.formCreate.controls.inputForm.status);
    }
  }
}
