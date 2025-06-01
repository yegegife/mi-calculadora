import { Component} from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  resultado: number = 0;
  titulo: string = "Aplicación de Calculadora";

  mostrarResultado(evento: number) {
    this.resultado = evento;
    console.log('Resultado recibido:', this.resultado);
  }  

}
