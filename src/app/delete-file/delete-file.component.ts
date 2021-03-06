import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { HttpReqService } from '../http-req.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogAcceptComponent } from '../dialog-accept/dialog-accept.component';
import { Router, ActivatedRoute } from '@angular/router';
import { map, switchMap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-delete-file',
  templateUrl: './delete-file.component.html',
  styleUrls: ['./delete-file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteFileComponent implements OnInit, OnDestroy {
  name: string;
  destroy$: Subject<void> = new Subject<void>();

  constructor(private httpreq: HttpReqService, private dialog: MatDialog, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const dialogRef = this.dialog.open(DialogAcceptComponent, {
      width: '300px',
    });
    this.route.params.pipe(switchMap(({ id }) => dialogRef.afterClosed().pipe(map(res => ({ res, id })))))
      .pipe(takeUntil(this.destroy$))
      .subscribe(({ res, id }) => {
        if (res) {
          this.deleteFile(id);
        } else {
          this.router.navigate(['all']);
        }
      });
  }

  deleteFile(name: string) {
    this.httpreq.requestPost('fileDelete', name, '')
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.router.navigate(['all']);
      });
  }

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}



