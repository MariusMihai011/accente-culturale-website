import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Evenimente } from './evenimente';

describe('Evenimente', () => {
  let component: Evenimente;
  let fixture: ComponentFixture<Evenimente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Evenimente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Evenimente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
