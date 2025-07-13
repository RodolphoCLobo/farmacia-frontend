import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

export interface PrincipioAtivo {
  id?: number;
  nome: string;
}

@Component({
  selector: 'app-principio-ativo-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './principio-ativo-form.html',
  styleUrls: ['./principio-ativo-form.scss']
})
export class PrincipioAtivoFormComponent {
  @Input() initialData: PrincipioAtivo | null = null;
  @Output() formSubmit = new EventEmitter<PrincipioAtivo>();
  @Output() cancel = new EventEmitter<void>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
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
