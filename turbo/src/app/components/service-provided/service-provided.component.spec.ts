import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProvidedComponent } from './service-provided.component';

describe('ServiceProvidedComponent', () => {
  let component: ServiceProvidedComponent;
  let fixture: ComponentFixture<ServiceProvidedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceProvidedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceProvidedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
