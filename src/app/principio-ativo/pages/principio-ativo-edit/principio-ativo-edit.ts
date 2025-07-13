import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { PrincipioAtivoFormComponent, PrincipioAtivo } from '../../components/principio-ativo-form/principio-ativo-form';

@Component({
  selector: 'app-principio-ativo-edit',
  standalone: true,
  imports: [CommonModule, PrincipioAtivoFormComponent],
  templateUrl: './principio-ativo-edit.html',
  styleUrls: ['./principio-ativo-edit.scss']
})
export class PrincipioAtivoEdit {
  principio_ativo: PrincipioAtivo | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {
    const id = this.route.snapshot.paramMap.get('id');

    // Mock: buscar principio ativo pelo id
    this.principio_ativo = {
      id: Number(id),
      nome: 'Principio Ativo Exemplo',
    };
  }

  onSubmit(principio_ativo: PrincipioAtivo) {
    console.log('Principio Ativo editado:', principio_ativo);
    // Aqui você chamaria o service no futuro
    this.router.navigate(['/principio_ativos']);
  }

  onCancel() {
    this.router.navigate(['/principio_ativos']);
  }
}
