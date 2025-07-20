import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespreNoi } from './despre-noi';

describe('DespreNoi', () => {
  let component: DespreNoi;
  let fixture: ComponentFixture<DespreNoi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DespreNoi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DespreNoi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
