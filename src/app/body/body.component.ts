// http://localhost:3000/

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})

export class BodyComponent implements OnInit {
  response: any;
  text: object;

  constructor(private http: HttpClient) { }

  showFileList() {
    this.http.get('http://localhost:3000/showFileList')
      .subscribe((response) => {
        this.response = response;
        this.text = response;
      });
  }

  readCreateForm(inputCreate) {
    let header = new HttpHeaders();
    header = header.append('content-type', 'application/json');
    const json = JSON.stringify({ fileName: inputCreate });
    this.http.post('http://localhost:3000/fileCreate', json, { headers: header })
      .subscribe((response) => {
        this.response = response;
        this.text = response;
        console.log(response);
      });
  }

  readDeleteForm(inputDelete) {
    let header = new HttpHeaders();
    header = header.append('content-type', 'application/json');
    const json = JSON.stringify({ fileName: inputDelete });
    this.http.post('http://localhost:3000/fileDelete', json, { headers: header })
      .subscribe((response) => {
        this.response = response;
        this.text = response;
      });
  }

  readUpgradeForm(textAdd, fileNameField) {
    let header = new HttpHeaders();
    header = header.append('content-type', 'application/json');
    const json = JSON.stringify({
      fileName: fileNameField,
      textField: textAdd
    });
    this.http.post('http://localhost:3000/upgradeFile', json, { headers: header })
      .subscribe((response) => {
        this.response = response;
        this.text = response;
      });
  }


  ngOnInit() {
  }
}
