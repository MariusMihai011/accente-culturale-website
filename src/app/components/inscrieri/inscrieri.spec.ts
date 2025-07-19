import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inscrieri } from './inscrieri';

describe('Inscrieri', () => {
  let component: Inscrieri;
  let fixture: ComponentFixture<Inscrieri>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inscrieri]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inscrieri);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
