import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @Output() enviarResultado = new EventEmitter<number>();

  operandoA!: number;
  operandoB!: number;
  resultado!: number;

  sumar() {
    this.resultado = this.operandoA + this.operandoB;
    this.enviarResultado.emit(this.resultado);
  }

}
