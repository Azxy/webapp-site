import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxAdhesivesComponent } from './box-adhesives.component';

describe('BoxAdhesivesComponent', () => {
  let component: BoxAdhesivesComponent;
  let fixture: ComponentFixture<BoxAdhesivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxAdhesivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxAdhesivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
