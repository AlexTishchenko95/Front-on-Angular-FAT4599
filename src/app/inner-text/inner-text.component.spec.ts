import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerTextComponent } from './inner-text.component';

describe('InnerTextComponent', () => {
  let component: InnerTextComponent;
  let fixture: ComponentFixture<InnerTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
