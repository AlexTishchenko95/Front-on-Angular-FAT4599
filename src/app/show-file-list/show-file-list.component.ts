import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { ShareDataService } from '../share-data.service';
import { HttpReqService } from '../http-req.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-file-list',
  templateUrl: './show-file-list.component.html',
  styleUrls: ['./show-file-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ShowFileListComponent implements OnInit, OnDestroy {
  list$: Observable<string[]> = this.share.dataList$;
  subscriptions: Subscription = new Subscription();

  constructor(private share: ShareDataService, private httpreq: HttpReqService, private router: Router) {
  }

  ngOnInit() {
    this.subscriptions.add(this.httpreq.requestGet('showFileList')
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
    this.subscriptions.unsubscribe();
  }
}



