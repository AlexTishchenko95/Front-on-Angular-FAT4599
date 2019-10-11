import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { HttpReqService } from '../http-req.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogAcceptComponent } from '../dialog-accept/dialog-accept.component';
import { Router, ActivatedRoute } from '@angular/router';
import { map, switchMap, takeUntil } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-upgrade-file',
  templateUrl: './upgrade-file.component.html',
  styleUrls: ['./upgrade-file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpgradeFileComponent implements OnInit, OnDestroy {
  name: string;
  formUpgrade: FormGroup;
  subscriptions: ReplaySubject<any> = new ReplaySubject<any>();

  constructor(private httpreq: HttpReqService, private dialog: MatDialog, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.formUpgrade = new FormGroup({
      text: new FormControl('', Validators.required)
    });
  }

  onUpgradeFile() {
    const dialogRef = this.dialog.open(DialogAcceptComponent, {
      width: '300px',
    });
    this.route.params.pipe(switchMap(({ id }) => dialogRef.afterClosed().pipe(map(res => ({ res, id })))))
      .pipe(takeUntil(this.subscriptions))
      .subscribe(({ res, id }) => {
        if (res) {
          this.upgradeFile(id);
        } else {
          this.router.navigate(['all']);
        }
      });
  }

  upgradeFile(name: string) {
    const { text } = this.formUpgrade.value;
    this.httpreq.requestPost('upgradeFile', name, text)
      .pipe(takeUntil(this.subscriptions))
      .subscribe(() => {
        this.router.navigate(['all']);
      });
  }

  ngOnDestroy() {
    this.subscriptions.next(null);
    this.subscriptions.complete();
  }
}
