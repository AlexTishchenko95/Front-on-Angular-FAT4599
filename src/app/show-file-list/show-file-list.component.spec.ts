import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFileListComponent } from './show-file-list.component';

describe('ShowFileListComponent', () => {
  let component: ShowFileListComponent;
  let fixture: ComponentFixture<ShowFileListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowFileListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
