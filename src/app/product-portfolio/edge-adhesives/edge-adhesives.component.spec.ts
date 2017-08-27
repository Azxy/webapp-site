import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdgeAdhesivesComponent } from './edge-adhesives.component';

describe('EdgeAdhesivesComponent', () => {
  let component: EdgeAdhesivesComponent;
  let fixture: ComponentFixture<EdgeAdhesivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdgeAdhesivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdgeAdhesivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
