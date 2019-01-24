import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCatComponent } from './main-cat.component';

describe('MainCatComponent', () => {
  let component: MainCatComponent;
  let fixture: ComponentFixture<MainCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
