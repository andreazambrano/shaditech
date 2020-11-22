import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadidiscountsComponent } from './shadidiscounts.component';

describe('ShadidiscountsComponent', () => {
  let component: ShadidiscountsComponent;
  let fixture: ComponentFixture<ShadidiscountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShadidiscountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadidiscountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
