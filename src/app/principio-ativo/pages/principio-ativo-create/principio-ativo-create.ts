import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PrincipioAtivoFormComponent, PrincipioAtivo } from '../../components/principio-ativo-form/principio-ativo-form';

@Component({
  selector: 'app-principio-ativo-create',
  standalone: true,
  imports: [CommonModule, PrincipioAtivoFormComponent],
  templateUrl: './principio-ativo-create.html',
  styleUrls: ['./principio-ativo-create.scss']
})
export class PrincipioAtivoCreate {
  constructor(private router: Router) {}

  onSubmit(principio_ativo: PrincipioAtivo) {
    console.log('Principio Ativo criado:', principio_ativo);
    // Aqui você chamaria o service no futuro
    this.router.navigate(['/principio_ativos']);
  }

  onCancel() {
    this.router.navigate(['/principio_ativos']);
  }
}
