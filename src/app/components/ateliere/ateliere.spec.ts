import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ateliere } from './ateliere';

describe('Ateliere', () => {
  let component: Ateliere;
  let fixture: ComponentFixture<Ateliere>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ateliere]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ateliere);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
