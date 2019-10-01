import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ShareDataService } from '../share-data.service';

@Component({
  selector: 'app-upgrade-file',
  templateUrl: './upgrade-file.component.html',
  styleUrls: ['./upgrade-file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpgradeFileComponent implements OnInit {

  constructor(private http: HttpClient, private share: ShareDataService) { }

  readUpgradeForm(textAdd, fileNameField) {
    let header = new HttpHeaders();
    header = header.append('content-type', 'application/json');
    const json = JSON.stringify({
      fileName: fileNameField,
      textField: textAdd
    });
    this.http.post('http://localhost:3000/upgradeFile', json, { headers: header })
      .subscribe((response: string) => {
        this.share.data$.next('File upgrated: ' + response);
      });
  }

  ngOnInit() {
  }

}
