import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ShareDataService } from '../share-data.service';
import { HttpReqService } from '../http-req.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-show-file-list',
  templateUrl: './show-file-list.component.html',
  styleUrls: ['./show-file-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ShowFileListComponent {
  formList: FormGroup;
  isPush: boolean;

  constructor(private share: ShareDataService, private httpreq: HttpReqService) {
    this.httpreq = httpreq;
    this.share = share;
    this.formList = new FormGroup({
    });
  }

  showFileList() {
    this.isPush = !this.isPush;
    this.httpreq.requestGet('http://localhost:3000/showFileList')
      .subscribe((response: string[]) => {
        this.share.dataList$.next(response);
      });
  }

  closeFileList() {
    this.isPush = !this.isPush;
    this.httpreq.requestGet('http://localhost:3000/showFileList')
      .subscribe(() => {
        this.share.dataList$.next([]);
      });
  }
}


