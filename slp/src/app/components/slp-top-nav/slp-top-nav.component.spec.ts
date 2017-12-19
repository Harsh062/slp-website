import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlpTopNavComponent } from './slp-top-nav.component';

describe('SlpTopNavComponent', () => {
  let component: SlpTopNavComponent;
  let fixture: ComponentFixture<SlpTopNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlpTopNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlpTopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
