import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniMapC } from './mini-map-c';

describe('MiniMapC', () => {
  let component: MiniMapC;
  let fixture: ComponentFixture<MiniMapC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniMapC]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniMapC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
