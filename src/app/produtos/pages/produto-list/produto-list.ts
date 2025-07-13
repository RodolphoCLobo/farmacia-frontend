import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface Produto {
  id: number;
  nome: string;
  valor_compra: number;
  valor_venda: number;
  codigo_de_barras: string;
  fabricante_nome: string;
  principio_ativo_nome: string;
}

@Component({
  selector: 'app-produto-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './produto-list.html',
  styleUrls: ['./produto-list.scss'],
})
export class ProdutoList {
  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Dipirona',
      valor_compra: 2.0,
      valor_venda: 5.99,
      codigo_de_barras: '7891234567890',
      fabricante_nome: 'Farmacêutica A',
      principio_ativo_nome: 'Dipirona Monoidratada',
    },
    {
      id: 2,
      nome: 'Paracetamol',
      valor_compra: 3.5,
      valor_venda: 7.5,
      codigo_de_barras: '7890987654321',
      fabricante_nome: 'Farmacêutica B',
      principio_ativo_nome: 'Paracetamol',
    },
  ];

  displayedColumns: string[] = [
    'nome',
    'codigo',
    'valor_compra',
    'valor_venda',
    'fabricante',
    'principio',
    'acoes',
  ];

  constructor(private router: Router) {}

  novoProduto() {
    this.router.navigate(['/produtos/novo']);
  }

  editarProduto(id: number) {
    this.router.navigate([`/produtos/${id}/editar`]);
  }

  excluirProduto(id: number) {
    this.produtos = this.produtos.filter(p => p.id !== id);
  }
}
