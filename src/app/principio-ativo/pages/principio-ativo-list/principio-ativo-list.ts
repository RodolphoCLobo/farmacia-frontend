import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface PrincipioAtivo {
  id: number;
  nome: string;
}

@Component({
  selector: 'app-principio-ativo-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './principio-ativo-list.html',
  styleUrls: ['./principio-ativo-list.scss'],
})
export class PrincipioAtivoList {
  principio_ativos: PrincipioAtivo[] = [
    { id: 1, nome: 'Principio Ativo A' },
    { id: 2, nome: 'Principio Ativo B' },
    { id: 3, nome: 'Principio Ativo C' },
  ];

  displayedColumns: string[] = ['nome', 'acoes'];

  constructor(private router: Router) {}

  novoPrincipioAtivo() {
    this.router.navigate(['/principio_ativos/novo']);
  }

  editarPrincipioAtivo(id: number) {
    this.router.navigate([`/principio_ativos/${id}/editar`]);
  }

  excluirPrincipioAtivo(id: number) {
    this.principio_ativos = this.principio_ativos.filter(pa => pa.id !== id);
  }
}
