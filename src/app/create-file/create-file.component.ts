import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ShareDataService } from '../share-data.service';

@Component({
  selector: 'app-create-file',
  templateUrl: './create-file.component.html',
  styleUrls: ['./create-file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateFileComponent implements OnInit {

  constructor(private http: HttpClient, private share: ShareDataService) { }

  readCreateForm(inputCreate) {
    let header = new HttpHeaders();
    header = header.append('content-type', 'application/json');
    const json = JSON.stringify({ fileName: inputCreate });
    this.http.post('http://localhost:3000/fileCreate', json, { headers: header })
      .subscribe((response: string) => {
        this.share.data$.next('File created: ' + response);
      });
  }

  ngOnInit() {
  }

}
