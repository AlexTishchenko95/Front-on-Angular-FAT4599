import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { HttpReqService } from '../http-req.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { extentionValidator } from '../extention-validator';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-create-file',
  templateUrl: './create-file.component.html',
  styleUrls: ['./create-file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CreateFileComponent implements OnInit, OnDestroy {
  formCreate: FormGroup;
  subscription: ReplaySubject<any> = new ReplaySubject<any>();

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
      .pipe(takeUntil(this.subscription))
      .subscribe(() => {
        this.router.navigate(['all']);
      });
  }

  ngOnDestroy() {
    this.subscription.next(null);
    this.subscription.complete();
  }
}
