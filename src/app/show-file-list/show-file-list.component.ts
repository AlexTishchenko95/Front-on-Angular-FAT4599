import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShareDataService } from '../share-data.service';

@Component({
  selector: 'app-show-file-list',
  templateUrl: './show-file-list.component.html',
  styleUrls: ['./show-file-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ShowFileListComponent implements OnInit {

  constructor(private http: HttpClient, private share: ShareDataService) { }

  showFileList() {
    this.http.get('http://localhost:3000/showFileList')
      .subscribe((response: string[]) => {
        this.share.data$.next('File list: ' + response.join());
      });
  }

  ngOnInit() {

  }

}
