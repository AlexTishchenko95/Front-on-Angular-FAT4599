import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { ShareDataService } from '../share-data.service';
import { HttpReqService } from '../http-req.service';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-show-file-list',
  templateUrl: './show-file-list.component.html',
  styleUrls: ['./show-file-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ShowFileListComponent implements OnInit, OnDestroy {
  list$: Observable<string[]> = this.share.dataList$;
  destroy$: Subject<void> = new Subject<void>();

  constructor(private share: ShareDataService, private httpreq: HttpReqService, private router: Router) {
  }

  ngOnInit() {
    (this.httpreq.requestGet('showFileList')
      .pipe(takeUntil(this.destroy$))
      .subscribe((response: string[]) => {
        this.share.dataList$.next(response);
      }));
  }

  onUpdateFile(name) {
    this.router.navigate(['update', name]);
  }

  onDeleteFile(name) {
    this.router.navigate(['remove', name]);
  }

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}

