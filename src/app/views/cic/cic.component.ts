import { Component } from '@angular/core';

@Component({
  selector: 'app-cic',
  templateUrl: './cic.component.html',
  styleUrls: ['./cic.component.css']
})
export class CicComponent {
  capitalInicial: number = 0;
  tasaInteres: number = 0;
  montoFinal: number = 0;
  periodo: string = 'diario'; // Valor por defecto
  tiempo: number = 1; // Valor por defecto
  interesesCom :number = 0;

  interesCompuestoCalculado: number | undefined;

  calcularInteresCompuesto(){
    //calcular montofinal
    const tasaDecimal = this.tasaInteres/100;
    if(this.capitalInicial && this.tiempo && this.tasaInteres && this.periodo ){
      if(this.periodo == "diario"){
        this.montoFinal = this.capitalInicial * Math.pow(1 + tasaDecimal, (this.tiempo/30));
        this.interesesCom = this.montoFinal - this.capitalInicial;
      }else if(this.periodo =="meses"){
        this.montoFinal = this.capitalInicial * Math.pow(1 + tasaDecimal, (this.tiempo));
        this.interesesCom = this.montoFinal - this.capitalInicial;
      }else if(this.periodo =="trimestral"){
        this.montoFinal = this.capitalInicial * Math.pow(1 + tasaDecimal, (this.tiempo/3));
        this.interesesCom = this.montoFinal - this.capitalInicial;
      }else if(this.periodo =="cuatrimestral"){
        this.montoFinal = this.capitalInicial * Math.pow(1 + tasaDecimal, (this.tiempo/4));
        this.interesesCom = this.montoFinal - this.capitalInicial;
      }else if(this.periodo =="semestral"){
        this.montoFinal = this.capitalInicial * Math.pow(1 + tasaDecimal, (this.tiempo/6));
        this.interesesCom = this.montoFinal - this.capitalInicial;
      }else if(this.periodo =="anual"){
        this.montoFinal = this.capitalInicial * Math.pow(1 + tasaDecimal, (this.tiempo));
        this.interesesCom = this.montoFinal - this.capitalInicial;
      }
    }else if(this.tasaInteres && this.tiempo && this.montoFinal && this.periodo){
      //calcular el capital inicial
      if(this.periodo == "Diario"){
        this.capitalInicial = this.montoFinal / Math.pow(1 + tasaDecimal, (this.tiempo/365));
        this.interesesCom = this.montoFinal - this.capitalInicial;
      }else if(this.periodo =="meses"){
        this.capitalInicial = this.montoFinal / Math.pow(1 + tasaDecimal, this.tiempo);
        this.interesesCom = this.montoFinal - this.capitalInicial;
      }else if(this.periodo =="trimestral"){
        this.capitalInicial = this.montoFinal / Math.pow(1 + tasaDecimal, (this.tiempo/3));
        this.interesesCom = this.montoFinal - this.capitalInicial;
      }else if(this.periodo =="cuatrimestral"){
        this.capitalInicial = this.montoFinal / Math.pow(1 + tasaDecimal, (this.tiempo/4));
        this.interesesCom = this.montoFinal - this.capitalInicial;
      }else if(this.periodo =="semestral"){
        this.capitalInicial = this.montoFinal / Math.pow(1 + tasaDecimal, (this.tiempo/6));
        this.interesesCom = this.montoFinal - this.capitalInicial;
      }else if(this.periodo =="anual"){
        this.capitalInicial = this.montoFinal / Math.pow(1 + tasaDecimal, (this.tiempo/1));
        this.interesesCom = this.montoFinal - this.capitalInicial;
      }
    }else if(this.tasaInteres && this.capitalInicial && this.montoFinal){
      //calcular el tiempo
      this.tiempo = (Math.log(this.montoFinal) - Math.log(this.capitalInicial)) / Math.log(1 + tasaDecimal);
      this.periodo = "meses";
      this.interesesCom = this.montoFinal - this.capitalInicial;
    }else if (this.capitalInicial && this.montoFinal && this.periodo) {
      //Calcular la tasaInteres
      if(this.periodo == "diario"){
        this.tasaInteres = ((this.montoFinal / this.capitalInicial) ** (1 / (this.tiempo/365)) - 1) * 100;
        this.interesesCom = this.montoFinal - this.capitalInicial;
      }else if(this.periodo =="meses"){
        this.tasaInteres = ((this.montoFinal / this.capitalInicial) ** (1 / this.tiempo) - 1) * 100;
        this.interesesCom = this.montoFinal - this.capitalInicial;
      }else if(this.periodo =="trimestral"){
        this.tasaInteres = ((this.montoFinal / this.capitalInicial) ** (1 / (this.tiempo/3)) - 1) * 100;
        this.interesesCom = this.montoFinal - this.capitalInicial;
      }else if(this.periodo =="cuatrimestral"){
        this.tasaInteres = ((this.montoFinal / this.capitalInicial) ** (1 / (this.tiempo/4)) - 1) * 100;
        this.interesesCom = this.montoFinal - this.capitalInicial;
      }else if(this.periodo =="semestral"){
        this.tasaInteres = ((this.montoFinal / this.capitalInicial) ** (1 / (this.tiempo/6)) - 1) * 100;
        this.interesesCom = this.montoFinal - this.capitalInicial;
      }else if(this.periodo =="anual"){
        this.tasaInteres = ((this.montoFinal / this.capitalInicial) ** (1 / this.tiempo) - 1) * 100;
        this.interesesCom = this.montoFinal - this.capitalInicial;
      }
    }
  }



  get formattedTotalCom(): string {
    const formattedValue = this.interesesCom.toFixed(3); // Formato con dos decimales
    return `$${formattedValue}`; // Concatenar símbolo "$" con el valor
  }

}
