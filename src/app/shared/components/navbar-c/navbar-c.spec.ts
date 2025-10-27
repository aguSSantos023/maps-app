import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarC } from './navbar-c';

describe('NavbarC', () => {
  let component: NavbarC;
  let fixture: ComponentFixture<NavbarC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
