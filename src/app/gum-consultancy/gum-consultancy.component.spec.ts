import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GumConsultancyComponent } from './gum-consultancy.component';

describe('GumConsultancyComponent', () => {
  let component: GumConsultancyComponent;
  let fixture: ComponentFixture<GumConsultancyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GumConsultancyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GumConsultancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
