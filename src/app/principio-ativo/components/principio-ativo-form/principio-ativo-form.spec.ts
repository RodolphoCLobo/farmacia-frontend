import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipioAtivoFormComponent } from './principio-ativo-form';

describe('PrincipioAtivoFormComponent', () => {
  let component: PrincipioAtivoFormComponent;
  let fixture: ComponentFixture<PrincipioAtivoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipioAtivoFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipioAtivoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
