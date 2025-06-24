import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-calculator',
  templateUrl: './simple-calculator.component.html',
  styleUrls: ['./simple-calculator.component.css']
})
export class SimpleCalculatorComponent {
  num1: number | null = null;
  num2: number | null = null;
  operation: string = '+';
  result: number | null = null;

  calculate(): void {
    if (this.num1 === null || this.num2 === null) {
      this.result = null;
      return;
    }

    switch (this.operation) {
      case '+':
        this.result = this.num1 + this.num2;
        break;
      case '-':
        this.result = this.num1 - this.num2;
        break;
      case '*':
        this.result = this.num1 * this.num2;
        break;
      case '/':
        this.result = this.num2 !== 0 ? this.num1 / this.num2 : null;
        break;
    }
  }
}
