import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricanteEdit } from './fabricante-edit';

describe('FabricanteEdit', () => {
  let component: FabricanteEdit;
  let fixture: ComponentFixture<FabricanteEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FabricanteEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FabricanteEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
