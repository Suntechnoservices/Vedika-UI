import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerhelpComponent } from './ownerhelp.component';

describe('OwnerhelpComponent', () => {
  let component: OwnerhelpComponent;
  let fixture: ComponentFixture<OwnerhelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerhelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerhelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
