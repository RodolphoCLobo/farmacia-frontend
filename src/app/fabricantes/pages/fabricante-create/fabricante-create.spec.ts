import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricanteCreate } from './fabricante-create';

describe('FabricanteCreate', () => {
  let component: FabricanteCreate;
  let fixture: ComponentFixture<FabricanteCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FabricanteCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FabricanteCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
