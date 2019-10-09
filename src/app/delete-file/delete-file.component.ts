import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { HttpReqService } from '../http-req.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogAcceptComponent } from '../dialog-accept/dialog-accept.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-file',
  templateUrl: './delete-file.component.html',
  styleUrls: ['./delete-file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteFileComponent implements OnInit {
  name: string;

  constructor(private httpreq: HttpReqService, private dialog: MatDialog, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.name = params.id);
  }

  ngOnInit() {
    const dialogRef = this.dialog.open(DialogAcceptComponent, {
      width: '300px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteFile(this.name);
      } else {
        this.router.navigate(['all']);
      }
    });
  }

  deleteFile(name) {
    this.httpreq.requestPost('fileDelete', name, '')
      .subscribe(() => {
        setTimeout(() => this.router.navigate(['all']), 100);
      });
  }
}



