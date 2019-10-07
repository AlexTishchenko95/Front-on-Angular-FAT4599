import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ShareDataService } from '../share-data.service';
import { HttpReqService } from '../http-req.service';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';

function extentionValidator(control: FormControl): ValidationErrors {
  if (!control.value || control.value.endsWith('.txt')) {
    return null;
  }
  return { extention: 'Invalid file name! File must be .txt' };
}

@Component({
  selector: 'app-create-file',
  templateUrl: './create-file.component.html',
  styleUrls: ['./create-file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CreateFileComponent implements OnInit {
  formCreate: FormGroup;

  constructor(private httpreq: HttpReqService, private share: ShareDataService) {
  }

  ngOnInit() {
    this.formCreate = new FormGroup({
      name: new FormControl('', [Validators.required, extentionValidator])
    });
  }

  onCreateFile() {
    const { name } = this.formCreate.value;
    this.httpreq.requestPost('fileCreate', name, '')
      .subscribe((response: string) => {
        this.share.data$.next('File created: ' + response);
      });
  }
}
