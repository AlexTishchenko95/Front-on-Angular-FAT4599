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

  constructor(private share: ShareDataService, private httpreq: HttpReqService) { }

  showFileList() {
    this.httpreq.getReq('http://localhost:3000/showFileList')
      .subscribe((response: string[]) => {
        this.share.dataList$.next(response);
      });
  }
}


