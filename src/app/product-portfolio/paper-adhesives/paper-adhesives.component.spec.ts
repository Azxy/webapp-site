import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperAdhesivesComponent } from './paper-adhesives.component';

describe('PaperAdhesivesComponent', () => {
  let component: PaperAdhesivesComponent;
  let fixture: ComponentFixture<PaperAdhesivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaperAdhesivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperAdhesivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
