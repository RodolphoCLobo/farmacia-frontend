import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipioAtivoEdit } from './principio-ativo-edit';

describe('PrincipioAtivoEdit', () => {
  let component: PrincipioAtivoEdit;
  let fixture: ComponentFixture<PrincipioAtivoEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipioAtivoEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipioAtivoEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
