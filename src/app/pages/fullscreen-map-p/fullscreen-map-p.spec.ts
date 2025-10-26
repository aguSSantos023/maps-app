import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullscreenMapP } from './fullscreen-map-p';

describe('FullscreenMapP', () => {
  let component: FullscreenMapP;
  let fixture: ComponentFixture<FullscreenMapP>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullscreenMapP]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullscreenMapP);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
