import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  ProdutoFormComponent,
  Produto,
  Fabricante,
  PrincipioAtivo
} from '../../components/produto-form/produto-form';

@Component({
  selector: 'app-produto-create',
  standalone: true,
  imports: [CommonModule, ProdutoFormComponent],
  templateUrl: './produto-create.html',
  styleUrls: ['./produto-create.scss']
})
export class ProdutoCreate {
  fabricantes: Fabricante[] = [
    { id: 1, nome: 'Farmacêutica A' },
    { id: 2, nome: 'Farmacêutica B' }
  ];

  principiosAtivos: PrincipioAtivo[] = [
    { id: 1, nome: 'Dipirona Monoidratada' },
    { id: 2, nome: 'Paracetamol' }
  ];

  constructor(private router: Router) {}

  onSubmit(produto: Produto) {
    console.log('Produto criado:', produto);
    // Aqui você chamaria o service no futuro
    this.router.navigate(['/produtos']);
  }

  onCancel() {
    this.router.navigate(['/produtos']);
  }
}
