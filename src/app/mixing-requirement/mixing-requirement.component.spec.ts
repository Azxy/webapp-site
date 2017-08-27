import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MixingRequirementComponent } from './mixing-requirement.component';

describe('MixingRequirementComponent', () => {
  let component: MixingRequirementComponent;
  let fixture: ComponentFixture<MixingRequirementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixingRequirementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixingRequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
