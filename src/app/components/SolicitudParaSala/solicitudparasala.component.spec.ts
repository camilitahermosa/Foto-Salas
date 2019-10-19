import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolitudParaSalaComponent } from './solicitudparasala.component';

describe('SolitudsalaComponent', () => {
  let component: SolicitudParaSalaComponent;
  let fixture: ComponentFixture<SolicitudParaSalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolitudsalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudParaSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
