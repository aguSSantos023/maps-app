import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkersP } from './markers-p';

describe('MarkersP', () => {
  let component: MarkersP;
  let fixture: ComponentFixture<MarkersP>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarkersP]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkersP);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
