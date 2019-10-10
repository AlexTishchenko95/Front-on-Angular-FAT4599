import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ShareDataService } from '../share-data.service';
import { HttpReqService } from '../http-req.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-file-list',
  templateUrl: './show-file-list.component.html',
  styleUrls: ['./show-file-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ShowFileListComponent implements OnInit {
  list$: Observable<string[]> = this.share.dataList$;

  constructor(private share: ShareDataService, private httpreq: HttpReqService, private router: Router) {
  }

  ngOnInit() {
    this.httpreq.requestGet('showFileList')
      .subscribe((response: string[]) => {
        this.share.dataList$.next(response);
      });
  }

  onUpdateFile(name) {
    this.router.navigate(['update', name]);
  }

  onDeleteFile(name) {
    this.router.navigate(['remove', name]);
  }
}



