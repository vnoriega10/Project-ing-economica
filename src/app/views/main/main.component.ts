import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  intereses : number = 0;
  capital: number = 0;
  interestRate: number = 0;
  years: number = 0;
  months: number = 0;
  days: number = 0;
  totalInterest: number = 0;
  totalV: number = 0;

  calculateInterest(): void {

    if(this.intereses && this.interestRate && this.months && this.days && this.years){
      const totaldias = (this.years + (this.months/12) + (this.days/360));
      this.capital =this.intereses / ((this.interestRate/100) * totaldias); //i/it
      this.totalV = this.capital + this.intereses;
    }else{
      const totaldias = (this.years * 365) + (this.months * 30) + this.days;
      const interest = ((this.capital) * (1 + ((this.interestRate/100) * (totaldias/365))));
      this.totalInterest = interest - this.capital;
      this.totalV = this.totalInterest + this.capital;
    }   
     // Approximate days to months
    
  }

  get formattedTotalInterest(): number {

    const formattedValue = this.totalInterest; // Formato con dos decimales // Concatenar símbolo "$" con el valor
    return formattedValue;
  }

  get formattedTotal(): string {
    const formattedValue = this.totalV.toFixed(3); // Formato con dos decimales
    return `$${formattedValue}`; // Concatenar símbolo "$" con el valor
  }
}
