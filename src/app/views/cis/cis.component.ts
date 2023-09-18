import { Component } from '@angular/core';

@Component({
  selector: 'app-cis',
  templateUrl: './cis.component.html',
  styleUrls: ['./cis.component.css']
})
export class CisComponent {
  inicio : string = '';
  final: string = '';
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
    if (this.interesesSim !==0 && this.interestSim !==0){
      if(this.capitalSim===0 && this.yearsSim !==0 || this.monthsSim !==0 || this.daysSim !==0){
        const totaldias = (this.yearsSim + (this.monthsSim/12) + (this.daysSim/360));
        this.capitalSim =parseFloat((this.interesesSim / ((this.interestSim / 100) * totaldias)).toFixed(1)); //i/it
        this.totalVSim = this.capitalSim + this.interesesSim;
        console.log("calculo capital");
      }

    } else if(this.capitalSim !==0 && this.interesesSim !==0)  {
      if(this.interestSim===0 && this.yearsSim !==0 || this.monthsSim !==0 || this.daysSim !==0 ){
        const totaldias = (this.yearsSim + (this.monthsSim/12) + (this.daysSim/360));
        this.interestSim = parseFloat(((this.interesesSim / (this.capitalSim* totaldias))*100).toFixed(1));
        this.totalVSim = this.capitalSim + this.interesesSim;
        console.log("calculo tasa interés");
      }

    } else if(this.capitalSim!==0 && this.interestSim!==0) {
      if(this.interesesSim===0 && this.yearsSim !==0 || this.monthsSim !==0 || this.daysSim !==0){
        const totaldiassim = (this.yearsSim * 365) + (this.monthsSim * 30) + this.daysSim;
        const interestsim = ((this.capitalSim) * (1 + ((this.interestSim / 100) * (totaldiassim / 360))));
        this.totalInterestSim = interestsim - this.capitalSim;
        this.totalVSim = this.totalInterestSim + this.capitalSim;
        console.log("calculo intereses")
      }
        // Realiza el cálculo del interés y el capital como lo hacías antes
        
    } 
    
    if(this.capitalSim && this.interesesSim && this.interestSim){
      if(this.daysSim===0 && this.yearsSim ===0 && this.monthsSim===0){
        this.yearsSim = Math.floor(parseFloat((this.interesesSim/(this.capitalSim * (this.interestSim/100))).toFixed(1)));
        const entero = this.yearsSim;
        const decimales = parseFloat((this.interesesSim/(this.capitalSim * (this.interestSim/100))).toFixed(5)) - entero ;
        const decimalesmes = Math.round(decimales * 360);
        this.monthsSim = Math.floor(decimalesmes/30);
        const valordias =  this.monthsSim * 30
        this.daysSim = decimalesmes - valordias;
        this.totalVSim = this.interesesSim + this.capitalSim;
      }
    }


    if(this.inicio && this.final){
      const fechaInicio = new Date(this.inicio);
      const fechaFinal = new Date(this.final);

      const milisegundos = 24*60*60*1000;
      const diferenciasDias = Math.round((fechaFinal.getTime() - fechaInicio.getTime())/milisegundos)

      const interestsim = ((this.capitalSim) * (1 + ((this.interestSim / 100) * (diferenciasDias/ 360))));
      this.totalInterestSim = interestsim - this.capitalSim;
      this.totalVSim = this.capitalSim + this.totalInterestSim;
      
    }

    
  }

  get formattedTotalInterestSim(): number {
    const formattedValue = parseFloat(this.totalInterestSim.toFixed(1));
    return formattedValue;
  }

  get formattedTotalSim(): string {
    const formattedValue = this.totalVSim.toFixed(1); // Formato con dos decimales
    return `$${formattedValue}`; // Concatenar símbolo "$" con el valor
  }

}
