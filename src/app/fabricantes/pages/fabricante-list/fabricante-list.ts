import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface Fabricante {
  id: number;
  nome: string;
  cnpj: string;
}

@Component({
  selector: 'app-fabricante-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './fabricante-list.html',
  styleUrls: ['./fabricante-list.scss'],
})
export class FabricanteList {
  fabricantes: Fabricante[] = [
    { id: 1, nome: 'Fabricante A', cnpj: '00.000.000/0001-00' },
    { id: 2, nome: 'Fabricante B', cnpj: '11.111.111/0001-11' },
    { id: 3, nome: 'Fabricante C', cnpj: '22.222.222/0001-22' },
  ];

  displayedColumns: string[] = ['nome', 'cnpj', 'acoes'];

  constructor(private router: Router) {}

  novoFabricante() {
    this.router.navigate(['/fabricantes/novo']);
  }

  editarFabricante(id: number) {
    this.router.navigate([`/fabricantes/${id}/editar`]);
  }

  excluirFabricante(id: number) {
    this.fabricantes = this.fabricantes.filter(f => f.id !== id);
  }
}
