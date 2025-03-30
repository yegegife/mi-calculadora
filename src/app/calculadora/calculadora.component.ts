import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  operandoA: number = 0;
  operandoB: number = 0;
  resultado: number = 0;

  // se captura el valor del operando A a trvés de evento por parametro
  capturaOperandA(event: Event){
    //this.operandoA = Number((<HTMLInputElement>event?.target).value);
    this.operandoA =  Number((event.target as HTMLInputElement).value);
  }
  
  // se realiza la suma de los componentes A y B
  sumar(){
    this.resultado = this.operandoA + this.operandoB;
  }
}
