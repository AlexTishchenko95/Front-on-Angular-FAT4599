import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { HttpReqService } from '../http-req.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { extentionValidator } from '../extention-validator';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-file',
  templateUrl: './create-file.component.html',
  styleUrls: ['./create-file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CreateFileComponent implements OnInit, OnDestroy {
  formCreate: FormGroup;
  subscriptions: Subscription = new Subscription();

  constructor(private httpreq: HttpReqService, private router: Router) {
  }

  ngOnInit() {
    this.formCreate = new FormGroup({
      name: new FormControl('', [Validators.required, extentionValidator])
    });
  }

  onCreateFile() {
    const { name } = this.formCreate.value;
    this.subscriptions.add(this.httpreq.requestPost('fileCreate', name, '')
      .subscribe(() => {
        this.router.navigate(['all']);
      }));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
