import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartSixComponent } from './part-six.component';

describe('PartSixComponent', () => {
  let component: PartSixComponent;
  let fixture: ComponentFixture<PartSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
