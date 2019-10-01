import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ShareDataService } from '../share-data.service';

@Component({
  selector: 'app-delete-file',
  templateUrl: './delete-file.component.html',
  styleUrls: ['./delete-file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteFileComponent implements OnInit {


  constructor(private http: HttpClient, private share: ShareDataService) { }

  readDeleteForm(inputDelete) {
    let header = new HttpHeaders();
    header = header.append('content-type', 'application/json');
    const json = JSON.stringify({ fileName: inputDelete });
    this.http.post('http://localhost:3000/fileDelete', json, { headers: header })
      .subscribe((response: string) => {
        this.share.data$.next('File deleted: ' + response);
      });
  }


  ngOnInit() {
  }

}
