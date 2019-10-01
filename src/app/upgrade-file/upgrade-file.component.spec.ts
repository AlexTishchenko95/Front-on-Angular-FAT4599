import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeFileComponent } from './upgrade-file.component';

describe('UpgradeFileComponent', () => {
  let component: UpgradeFileComponent;
  let fixture: ComponentFixture<UpgradeFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpgradeFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradeFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
