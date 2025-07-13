import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FabricanteFormComponent, Fabricante } from '../../components/fabricante-form/fabricante-form';

@Component({
  selector: 'app-fabricante-create',
  standalone: true,
  imports: [CommonModule, FabricanteFormComponent],
  templateUrl: './fabricante-create.html',
  styleUrls: ['./fabricante-create.scss']
})
export class FabricanteCreate {
  constructor(private router: Router) {}

  onSubmit(fabricante: Fabricante) {
    console.log('Fabricante criado:', fabricante);
    // Aqui você chamaria o service no futuro
    this.router.navigate(['/fabricantes']);
  }

  onCancel() {
    this.router.navigate(['/fabricantes']);
  }
}
