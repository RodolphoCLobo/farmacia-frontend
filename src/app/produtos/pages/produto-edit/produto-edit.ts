import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ProdutoFormComponent,
  Produto,
  Fabricante,
  PrincipioAtivo
} from '../../components/produto-form/produto-form';

@Component({
  selector: 'app-produto-edit',
  standalone: true,
  imports: [CommonModule, ProdutoFormComponent],
  templateUrl: './produto-edit.html',
  styleUrls: ['./produto-edit.scss']
})
export class ProdutoEdit {
  produto: Produto | null = null;

  fabricantes: Fabricante[] = [
    { id: 1, nome: 'Farmacêutica A' },
    { id: 2, nome: 'Farmacêutica B' }
  ];

  principiosAtivos: PrincipioAtivo[] = [
    { id: 1, nome: 'Dipirona Monoidratada' },
    { id: 2, nome: 'Paracetamol' }
  ];

  constructor(private route: ActivatedRoute, private router: Router) {
    const id = this.route.snapshot.paramMap.get('id');

    // Mock: buscar produto pelo id
    this.produto = {
      id: Number(id),
      nome: 'Dipirona',
      valor_compra: 2.0,
      valor_venda: 5.99,
      codigo_de_barras: '7891234567890',
      estoque_minimo: 10,
      fabricante_id: 1,
      principio_ativo_id: 1
    };
  }

  onSubmit(produto: Produto) {
    console.log('Produto editado:', produto);
    // Aqui você chamaria o service no futuro
    this.router.navigate(['/produtos']);
  }

  onCancel() {
    this.router.navigate(['/produtos']);
  }
}
