import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoteEdit } from './lote-edit';

describe('LoteEdit', () => {
  let component: LoteEdit;
  let fixture: ComponentFixture<LoteEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoteEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoteEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
