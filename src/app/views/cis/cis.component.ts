import { Component } from '@angular/core';

@Component({
  selector: 'app-cis',
  templateUrl: './cis.component.html',
  styleUrls: ['./cis.component.css']
})
export class CisComponent {
  interesesSim :number = 0;
  capitalSim: number = 0;
  interestSim: number = 0;
  yearsSim: number = 0;
  monthsSim: number = 0;
  daysSim:number = 0;
  totalInterestSim: number = 0;
  totalVSim: number = 0;
  mostrarInputsDate: boolean = false;

  toggleInputs() {
    this.mostrarInputsDate = !this.mostrarInputsDate;
  }

  calculateInterestSim(): void {
    // Verificar si los campos necesarios para el cálculo están llenos
    if (this.interesesSim && this.interestSim && this.monthsSim && this.daysSim && this.yearsSim){
      const totaldias = (this.yearsSim + (this.monthsSim/12) + (this.daysSim/360));
      this.capitalSim =this.interesesSim / ((this.interestSim/100) * totaldias); //i/it
      this.totalVSim = this.capitalSim + this.interesesSim;

    } else {
        // Realiza el cálculo del interés y el capital como lo hacías antes
        const totaldiassim = (this.yearsSim * 365) + (this.monthsSim * 30) + this.daysSim;
        const interestsim = ((this.capitalSim) * (1 + ((this.interestSim / 100) * (totaldiassim / 365))));
        this.totalInterestSim = interestsim - this.capitalSim;
        this.totalVSim = this.totalInterestSim + this.capitalSim;
    }
  }

  get formattedTotalInterestSim(): number {
    const formattedValue = this.totalInterestSim; // Formato con dos decimales // Concatenar símbolo "$" con el valor
    return formattedValue; // Concatenar símbolo "$" con el valor
  }

  get formattedTotalSim(): string {
    const formattedValue = this.totalVSim.toFixed(3); // Formato con dos decimales
    return `$${formattedValue}`; // Concatenar símbolo "$" con el valor
  }

}
