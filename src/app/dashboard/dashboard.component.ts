import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  widgets = [
    {
      title: 'Produtos em Falta',
      value: 8,
      description: 'Estoque abaixo do mínimo',
    },
    {
      title: 'Vencimento Próximo',
      value: 5,
      description: 'Produtos vencendo em até 2 meses',
    },
    {
      title: 'Faturamento Mensal',
      value: 'R$ 12.430,00',
      description: 'Vendas realizadas este mês',
    },
    {
      title: 'Lucro Mensal',
      value: 'R$ 4.800,00',
      description: 'Faturamento - custo de aquisição',
    },
  ];
}
