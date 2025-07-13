import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { LoteFormComponent, Lote, Produto } from '../../components/fabricante-form/lote-form';

@Component({
  selector: 'app-lote-edit',
  standalone: true,
  imports: [CommonModule, LoteFormComponent],
  templateUrl: './lote-edit.html',
  styleUrls: ['./lote-edit.scss']
})
export class LoteEdit {
  lote: Lote | null = null;
  produtos: Produto[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {
    const id = this.route.snapshot.paramMap.get('id');

    // Mock: buscar lote pelo id
    this.lote = {
      id: Number(id),
      numero_lote: 'L001',
      data_fabricacao: new Date('2024-01-01'),
      data_validade: new Date('2025-01-01'),
      produto_id: 2,
      quantidade: 100
    };

    // Mock: carregar produtos
    this.produtos = [
      { id: 1, nome: 'Dipirona' },
      { id: 2, nome: 'Paracetamol' },
      { id: 3, nome: 'Amoxicilina' }
    ];
  }

  onSubmit(lote: Lote) {
    console.log('Lote editado:', lote);
    // Aqui você chamaria o service no futuro
    this.router.navigate(['/lotes']);
  }

  onCancel() {
    this.router.navigate(['/lotes']);
  }
}
