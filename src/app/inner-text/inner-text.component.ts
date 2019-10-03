import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ShareDataService } from '../share-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inner-text',
  templateUrl: './inner-text.component.html',
  styleUrls: ['./inner-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class InnerTextComponent {
  list$: Observable<string[]> = this.share.dataList$;
  text$: Observable<string> = this.share.data$;

  constructor(private share: ShareDataService) { }
}

