import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ShareDataService } from '../share-data.service';
import { HttpReqService } from '../http-req.service';

@Component({
  selector: 'app-show-file-list',
  templateUrl: './show-file-list.component.html',
  styleUrls: ['./show-file-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ShowFileListComponent {
  isPush: boolean;

  constructor(private share: ShareDataService, private httpreq: HttpReqService) {
  }

  showFileList() {
    this.isPush = !this.isPush;
    this.httpreq.requestGet('showFileList')
      .subscribe((response: string[]) => {
        this.share.dataList$.next(response);
      });
  }

  closeFileList() {
    this.isPush = !this.isPush;
    this.httpreq.requestGet('showFileList')
      .subscribe(() => {
        this.share.dataList$.next([]);
      });
  }
}


