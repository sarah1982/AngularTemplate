import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabbedcarouselComponent } from './tabbedcarousel.component';

describe('TabbedcarouselComponent', () => {
  let component: TabbedcarouselComponent;
  let fixture: ComponentFixture<TabbedcarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabbedcarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabbedcarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
