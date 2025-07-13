import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoteCreate } from './lote-create';

describe('LoteCreate', () => {
  let component: LoteCreate;
  let fixture: ComponentFixture<LoteCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoteCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoteCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
