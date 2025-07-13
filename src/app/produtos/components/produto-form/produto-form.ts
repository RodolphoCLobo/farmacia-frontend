import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

export interface Produto {
  id?: number;
  nome: string;
  valor_compra: number;
  valor_venda: number;
  codigo_de_barras: string;
  estoque_minimo: number;
  fabricante_id: number;
  principio_ativo_id: number;
}

export interface Fabricante {
  id: number;
  nome: string;
}

export interface PrincipioAtivo {
  id: number;
  nome: string;
}

@Component({
  selector: 'app-produto-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  templateUrl: './produto-form.html',
  styleUrls: ['./produto-form.scss']
})
export class ProdutoFormComponent implements OnInit {
  @Input() initialData: Produto | null = null;
  @Input() fabricantes: Fabricante[] = [];
  @Input() principiosAtivos: PrincipioAtivo[] = [];

  @Output() formSubmit = new EventEmitter<Produto>();
  @Output() cancel = new EventEmitter<void>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      valor_compra: [null, [Validators.required, Validators.min(0)]],
      valor_venda: [null, [Validators.required, Validators.min(0)]],
      codigo_de_barras: ['', Validators.required],
      estoque_minimo: [0, [Validators.required, Validators.min(0)]],
      fabricante_id: [null, Validators.required],
      principio_ativo_id: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    if (this.initialData) {
      this.form.patchValue(this.initialData);
    }
  }

  submit(): void {
    if (this.form.valid) {
      this.formSubmit.emit(this.form.value);
    }
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
