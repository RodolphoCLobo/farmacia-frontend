import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipioAtivoCreate } from './principio-ativo-create';

describe('PrincipioAtivoCreate', () => {
  let component: PrincipioAtivoCreate;
  let fixture: ComponentFixture<PrincipioAtivoCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipioAtivoCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipioAtivoCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
