import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Periodo } from '../interface';

@Component({
  selector: 'AAmericana-component',
  templateUrl: './AAmericana.component.html',
  styleUrls: ['./AAmericana.component.css']
})
export class AAmericanaComponent implements OnInit {

  constructor() { }
  periodoType: string = 'mensual';
  ngOnInit(): void {
  }
  public datos: Periodo[] = [];
  public dato: Periodo = this.datoEmpty();
  cantidad: any;
  interes: any;
  periodo: any;

  datoEmpty(): Periodo {
    return {
      periodo: 0,
      mensualidad: 0,
      interes: 0,
      amortizacion: 0,
      saldo: this.cantidad
    };
  }
  limpiar(): void {
    this.datos.splice(0, this.datos.length);
    this.cantidad = ""
    this.interes = ""
    this.periodo = ""
  }
  onDatos(): void {
    const p: number = this.cantidad
    let n: number = this.periodo
    let i: number = this.interes / 100
    if (this.periodoType === 'anual') {
      i /= 12; // Dividir la tasa de interés entre 12
      n *= 12;  // Multiplicar el período por 12
    }
    var interesConstante: number = p * i
    this.dato = this.datoEmpty()
    this.datos.push(this.dato)
    for (let x = 1; x <= n; x++) {
      if (x != n) {
        var datoo: Periodo = {
          periodo: x,
          mensualidad: interesConstante,
          interes: interesConstante,
          amortizacion: 0,
          saldo: p
        }
      } else {
        var datoo: Periodo = {
          periodo: x,
          mensualidad: interesConstante + p,
          interes: interesConstante,
          amortizacion: p,
          saldo: 0
        }
      }
      this.datos.push(datoo);
    }
    console.log(this.dato)
  }
}