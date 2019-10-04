import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HttpReqService } from '../http-req.service';
import { ShareDataService } from '../share-data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-upgrade-file',
  templateUrl: './upgrade-file.component.html',
  styleUrls: ['./upgrade-file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpgradeFileComponent {
  formUpgrade: FormGroup;
  inputNameUpgrade: string;
  inputTextUpgrade: string;

  constructor(private httpreq: HttpReqService, private share: ShareDataService) {
    this.httpreq = httpreq;
    this.share = share;
    this.formUpgrade = new FormGroup({
      inputNameForm: new FormControl('', Validators.required),
      inputTextForm: new FormControl('', Validators.required)
    });
  }

  readUpgradeForm() {
    this.inputNameUpgrade = this.formUpgrade.controls.inputNameForm.value;
    this.inputTextUpgrade = this.formUpgrade.controls.inputTextForm.value;
    if (this.inputNameUpgrade.endsWith('.txt') &&
      this.formUpgrade.controls.inputNameForm.status === 'VALID') {
      this.httpreq.requestPost('http://localhost:3000/upgradeFile', this.inputNameUpgrade, this.inputTextUpgrade)
        .subscribe((response: string) => {
          this.share.data$.next('File upgrated: ' + response);
        });
    } else {
      this.share.data$.next('Invalid file name! File must be .txt, or you have invalid status in console');
      console.log(this.formUpgrade.controls.inputNameForm.status);
    }

  }
}
