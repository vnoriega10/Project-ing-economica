import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  capital: number = 0;
  interestRate: number = 0;
  years: number = 0;
  months: number = 0;
  days: number = 0;
  totalInterest: number = 0;
  totalV: number = 0;

  calculateInterest(): void {
     // Approximate days to months
    const totaldias = (this.years * 365) + (this.months * 30) + this.days;
    const interest = ((this.capital) * (1 + ((this.interestRate/100) * (totaldias/365))));
    this.totalInterest = interest - this.capital;
    this.totalV = this.totalInterest + this.capital;
  }

  get formattedTotalInterest(): string {
    const formattedValue = this.totalInterest.toFixed(1); // Formato con dos decimales
    return `$${formattedValue}`; // Concatenar símbolo "$" con el valor
  }

  get formattedTotal(): string {
    const formattedValue = this.totalV.toFixed(3); // Formato con dos decimales
    return `$${formattedValue}`; // Concatenar símbolo "$" con el valor
  }
}
