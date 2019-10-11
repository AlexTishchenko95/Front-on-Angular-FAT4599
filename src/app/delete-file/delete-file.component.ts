import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { HttpReqService } from '../http-req.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogAcceptComponent } from '../dialog-accept/dialog-accept.component';
import { Router, ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-delete-file',
  templateUrl: './delete-file.component.html',
  styleUrls: ['./delete-file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteFileComponent implements OnInit, OnDestroy {
  name: string;
  subscriptions: Subscription = new Subscription();

  constructor(private httpreq: HttpReqService, private dialog: MatDialog, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const dialogRef = this.dialog.open(DialogAcceptComponent, {
      width: '300px',
    });
    this.subscriptions.add(this.route.params.pipe(switchMap(({ id }) => dialogRef.afterClosed().pipe(map(res => ({ res, id })))))
      .subscribe(({ res, id }) => {
        if (res) {
          this.deleteFile(id);
        } else {
          this.router.navigate(['all']);
        }
      }));
  }

  deleteFile(name: string) {
    this.subscriptions.add(this.httpreq.requestPost('fileDelete', name, '')
      .subscribe(() => {
        this.router.navigate(['all']);
      }));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}



