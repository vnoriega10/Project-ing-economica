import { Component } from '@angular/core';

@Component({
  selector: 'app-cis',
  templateUrl: './cis.component.html',
  styleUrls: ['./cis.component.css']
})
export class CisComponent {

  capitalSim: string = '';
  interestSim: string = '';
  yearsSim: string = '';
  monthsSim: string  = '';
  daysSim: string = '';
  totalInterestSim: number= 0;
  totalVSim: number = 0;
  mostrarInputsDate: boolean = false;

  toggleInputs() {
    this.mostrarInputsDate = !this.mostrarInputsDate;
  }

  calculateInterestSim(): void {
     // Approximate days to months
    const totaldiassim = (parseInt(this.yearsSim) * 365) + (parseInt(this.monthsSim) * 30) + this.daysSim;
    const interestsim = ((parseInt(this.capitalSim)) * (1 + ((parseInt(this.interestSim)/100) * (parseInt(totaldiassim)/365))));
    this.totalInterestSim = interestsim - parseInt(this.capitalSim);
    this.totalVSim = this.totalInterestSim + parseInt(this.capitalSim);
  }

  get formattedTotalInterestSim(): string {
    const formattedValue = this.totalInterestSim.toFixed(2); // Formato con dos decimales
    return `$${formattedValue}`; // Concatenar símbolo "$" con el valor
  }

  get formattedTotalSim(): string {
    const formattedValue = this.totalVSim.toFixed(3); // Formato con dos decimales
    return `$${formattedValue}`; // Concatenar símbolo "$" con el valor
  }

}
