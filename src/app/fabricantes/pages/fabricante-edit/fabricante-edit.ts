import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FabricanteFormComponent, Fabricante } from '../../components/fabricante-form/fabricante-form';

@Component({
  selector: 'app-fabricante-edit',
  standalone: true,
  imports: [CommonModule, FabricanteFormComponent],
  templateUrl: './fabricante-edit.html',
  styleUrls: ['./fabricante-edit.scss']
})
export class FabricanteEdit {
  fabricante: Fabricante | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {
    const id = this.route.snapshot.paramMap.get('id');

    // Mock: buscar fabricante pelo id
    this.fabricante = {
      id: Number(id),
      nome: 'Fabricante Exemplo',
      cnpj: '00.000.000/0001-00'
    };
  }

  onSubmit(fabricante: Fabricante) {
    console.log('Fabricante editado:', fabricante);
    // Aqui você chamaria o service no futuro
    this.router.navigate(['/fabricantes']);
  }

  onCancel() {
    this.router.navigate(['/fabricantes']);
  }
}
