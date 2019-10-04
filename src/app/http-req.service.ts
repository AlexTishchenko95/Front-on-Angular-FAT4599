import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpReqService {
  constructor(private http: HttpClient) { }

  requestGet(adress) {
    return this.http.get(adress);
  }

  requestPost(adress, inputField, textName) {
    let header = new HttpHeaders();
    header = header.append('content-type', 'application/json');
    const json = JSON.stringify({ fileName: inputField, textField: textName });
    return this.http.post(adress, json, { headers: header });
  }
}
