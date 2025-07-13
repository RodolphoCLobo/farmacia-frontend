import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface Lote {
  id: number;
  numero_lote: string;
  data_fabricacao: Date;
  data_validade: Date;
  produto_nome: string; // Nome do produto associado (já resolvido)
  quantidade: number;
}

@Component({
  selector: 'app-lote-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './lote-list.html',
  styleUrls: ['./lote-list.scss'],
})
export class LoteList {
  lotes: Lote[] = [
    {
      id: 1,
      numero_lote: 'L001',
      data_fabricacao: new Date('2024-01-01'),
      data_validade: new Date('2025-01-01'),
      produto_nome: 'Paracetamol',
      quantidade: 100,
    },
    {
      id: 2,
      numero_lote: 'L002',
      data_fabricacao: new Date('2024-02-15'),
      data_validade: new Date('2025-02-15'),
      produto_nome: 'Dipirona',
      quantidade: 200,
    },
  ];

  displayedColumns: string[] = ['numero_lote', 'produto', 'quantidade', 'fabricacao', 'validade', 'acoes'];

  constructor(private router: Router) {}

  novoLote() {
    this.router.navigate(['/lotes/novo']);
  }

  editarLote(id: number) {
    this.router.navigate([`/lotes/${id}/editar`]);
  }

  excluirLote(id: number) {
    this.lotes = this.lotes.filter(l => l.id !== id);
  }
}
