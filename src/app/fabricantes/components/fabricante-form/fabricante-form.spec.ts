import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricanteFormComponent } from './fabricante-form';

describe('FabricanteFormComponent', () => {
  let component: FabricanteFormComponent;
  let fixture: ComponentFixture<FabricanteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FabricanteFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FabricanteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
