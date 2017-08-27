import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxAddictivesComponent } from './box-addictives.component';

describe('BoxAddictivesComponent', () => {
  let component: BoxAddictivesComponent;
  let fixture: ComponentFixture<BoxAddictivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxAddictivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxAddictivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
