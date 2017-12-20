import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlpFooterComponent } from './slp-footer.component';

describe('SlpFooterComponent', () => {
  let component: SlpFooterComponent;
  let fixture: ComponentFixture<SlpFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlpFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlpFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
