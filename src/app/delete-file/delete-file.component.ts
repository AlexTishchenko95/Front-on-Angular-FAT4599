import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HttpReqService } from '../http-req.service';
import { ShareDataService } from '../share-data.service';

@Component({
  selector: 'app-delete-file',
  templateUrl: './delete-file.component.html',
  styleUrls: ['./delete-file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteFileComponent {


  constructor(private httpreq: HttpReqService, private share: ShareDataService) { }

  readDeleteForm(inputDelete) {
    this.httpreq.getPost('http://localhost:3000/fileDelete', inputDelete, '')
      .subscribe((response: string) => {
        this.share.data$.next('File deleted: ' + response);
      });
  }
}

