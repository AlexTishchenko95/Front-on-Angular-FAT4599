import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { HttpReqService } from '../http-req.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { extentionValidator } from '../extention-validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-file',
  templateUrl: './create-file.component.html',
  styleUrls: ['./create-file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CreateFileComponent implements OnInit {
  formCreate: FormGroup;

  constructor(private httpreq: HttpReqService, private router: Router) {
  }

  ngOnInit() {
    this.formCreate = new FormGroup({
      name: new FormControl('', [Validators.required, extentionValidator])
    });
  }

  onCreateFile() {
    const { name } = this.formCreate.value;
    this.httpreq.requestPost('fileCreate', name, '')
      .subscribe(() => {
        this.router.navigate(['all']);
      });
  }
}
