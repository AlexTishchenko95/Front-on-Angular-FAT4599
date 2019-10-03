import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HttpReqService } from '../http-req.service';
import { ShareDataService } from '../share-data.service';

@Component({
  selector: 'app-upgrade-file',
  templateUrl: './upgrade-file.component.html',
  styleUrls: ['./upgrade-file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpgradeFileComponent {

  constructor(private httpreq: HttpReqService, private share: ShareDataService) { }

  readUpgradeForm(textAdd, fileNameField) {
    this.httpreq.getPost('http://localhost:3000/upgradeFile', fileNameField, textAdd)
      .subscribe((response: string) => {
        this.share.data$.next('File upgrated: ' + response);
      });
  }
}
