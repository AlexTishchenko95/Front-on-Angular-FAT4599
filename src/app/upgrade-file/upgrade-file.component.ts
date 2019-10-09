import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { HttpReqService } from '../http-req.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogAcceptComponent } from '../dialog-accept/dialog-accept.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-upgrade-file',
  templateUrl: './upgrade-file.component.html',
  styleUrls: ['./upgrade-file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpgradeFileComponent implements OnInit {
  name: string;
  formUpgrade: FormGroup;

  constructor(private httpreq: HttpReqService, private dialog: MatDialog, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.name = params.id);
  }

  ngOnInit() {
    this.formUpgrade = new FormGroup({
      text: new FormControl('', Validators.required)
    });
  }

  onUpgradeFile() {
    const dialogRef = this.dialog.open(DialogAcceptComponent, {
      width: '300px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.upgradeFile(this.name);
      } else {
        this.router.navigate(['all']);
      }
    });
  }

  upgradeFile(name) {
    const { text } = this.formUpgrade.value;
    this.httpreq.requestPost('upgradeFile', name, text)
      .subscribe(() => {
        this.router.navigate(['all']);
      });
  }
}
