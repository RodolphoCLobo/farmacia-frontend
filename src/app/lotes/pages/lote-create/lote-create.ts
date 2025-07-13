import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoteFormComponent, Lote, Produto } from '../../components/lote-form/lote-form';

@Component({
  selector: 'app-lote-create',
  standalone: true,
  imports: [CommonModule, LoteFormComponent],
  templateUrl: './lote-create.html',
  styleUrls: ['./lote-create.scss']
})
export class LoteCreate {
  produtos: Produto[] = [
    { id: 1, nome: 'Dipirona' },
    { id: 2, nome: 'Paracetamol' },
    { id: 3, nome: 'Amoxicilina' }
  ];

  constructor(private router: Router) {}

  onSubmit(lote: Lote) {
    console.log('Lote criado:', lote);
    // Aqui você chamaria o service no futuro
    this.router.navigate(['/lotes']);
  }

  onCancel() {
    this.router.navigate(['/lotes']);
  }
}
