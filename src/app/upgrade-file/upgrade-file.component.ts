import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { HttpReqService } from '../http-req.service';
import { ShareDataService } from '../share-data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { extentionValidator } from '../extention-validator';

@Component({
  selector: 'app-upgrade-file',
  templateUrl: './upgrade-file.component.html',
  styleUrls: ['./upgrade-file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpgradeFileComponent implements OnInit {
  formUpgrade: FormGroup;

  constructor(private httpreq: HttpReqService, private share: ShareDataService) {
  }

  ngOnInit() {
    this.formUpgrade = new FormGroup({
      name: new FormControl('', [Validators.required, extentionValidator]),
      text: new FormControl('', Validators.required)
    });
  }

  onUpdateFile() {
    const { name, text } = this.formUpgrade.value;
    this.httpreq.requestPost('upgradeFile', name, text)
      .subscribe((response: string) => {
        this.share.data$.next('File upgrated: ' + response);
      });
  }
}
