import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipioAtivoList } from './principio-ativo-list';

describe('PrincipioAtivoList', () => {
  let component: PrincipioAtivoList;
  let fixture: ComponentFixture<PrincipioAtivoList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipioAtivoList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipioAtivoList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
