import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ShareDataService } from '../share-data.service';
import { HttpReqService } from '../http-req.service';

@Component({
  selector: 'app-create-file',
  templateUrl: './create-file.component.html',
  styleUrls: ['./create-file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateFileComponent {

  constructor(private httpreq: HttpReqService, private share: ShareDataService) { }

  readCreateForm(inputCreate) {
    this.httpreq.getPost('http://localhost:3000/fileCreate', inputCreate, '')
      .subscribe((response: string) => {
        this.share.data$.next('File created: ' + response);
      });
  }
}
