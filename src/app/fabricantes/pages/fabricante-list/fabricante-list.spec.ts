import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricanteList } from './fabricante-list';

describe('FabricanteList', () => {
  let component: FabricanteList;
  let fixture: ComponentFixture<FabricanteList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FabricanteList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FabricanteList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
