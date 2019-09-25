import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopcarsComponent } from './shopcars.component';

describe('ShopcarsComponent', () => {
  let component: ShopcarsComponent;
  let fixture: ComponentFixture<ShopcarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopcarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopcarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
