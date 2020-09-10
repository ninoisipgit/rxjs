import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartSevenComponent } from './part-seven.component';

describe('PartSevenComponent', () => {
  let component: PartSevenComponent;
  let fixture: ComponentFixture<PartSevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartSevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
