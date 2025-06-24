import { Component } from '@angular/core';

@Component({
  selector: 'app-number-picker',
  templateUrl: './number-picker.component.html',
  styleUrls: ['./number-picker.component.css']
})
export class NumberPickerComponent {
  // A beírt szám
  inputNumber: number | null = null;

  // A számokat tartalmazó tömb
  numbers: number[] = [];

  // Szám hozzáadása a listához, ha érvényes
  addNumber(): void {
    if (this.inputNumber !== null) {
      this.numbers.push(this.inputNumber);
      this.inputNumber = null; // input törlése
    }
  }

  // Az összeg kiszámolása
  getSum(): number {
    return this.numbers.reduce((acc, val) => acc + val, 0);
  }
}
