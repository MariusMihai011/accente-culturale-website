import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acasa } from './acasa';

describe('Acasa', () => {
  let component: Acasa;
  let fixture: ComponentFixture<Acasa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Acasa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Acasa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
