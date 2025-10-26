import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousesP } from './houses-p';

describe('HousesP', () => {
  let component: HousesP;
  let fixture: ComponentFixture<HousesP>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HousesP]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HousesP);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
