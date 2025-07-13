import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

export interface Lote {
  id?: number;
  numero_lote: string;
  data_fabricacao: Date;
  data_validade: Date;
  produto_id: number;
  quantidade: number;
}

export interface Produto {
  id: number;
  nome: string;
}

@Component({
  selector: 'app-lote-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
  ],
  templateUrl: './lote-form.html',
  styleUrls: ['./lote-form.scss']
})
export class LoteFormComponent implements OnInit {
  @Input() initialData: Lote | null = null;
  @Input() produtos: Produto[] = [];
  @Output() formSubmit = new EventEmitter<Lote>();
  @Output() cancel = new EventEmitter<void>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      numero_lote: ['', Validators.required],
      data_fabricacao: [null, Validators.required],
      data_validade: [null, Validators.required],
      produto_id: [null, Validators.required],
      quantidade: [1, [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit() {
    if (this.initialData) {
      this.form.patchValue(this.initialData);
    }
  }

  submit() {
    if (this.form.valid) {
      this.formSubmit.emit(this.form.value);
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
