import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Periodo } from '../interface';

@Component({
  selector: 'AAleman-component',
  templateUrl: './AAleman.component.html',
  styleUrls: ['./AAleman.component.css']
})
export class AAlemanComponent implements OnInit {

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
    this.periodoType = "mensual"
  }
  onDatos(): void {
    const p: number = this.cantidad;
    let n: number = this.periodo;
    let i: number = this.interes / 100;
    if (this.periodoType === 'anual') {
      i /= 12; // Dividir la tasa de interés entre 12
      n *= 12;  // Multiplicar el período por 12
    }
    const Aconstante: number = p / n;
    this.dato = this.datoEmpty();
    this.datos.push(this.dato);
    for (let x = 1; x <= n; x++) {
      var inuevo: number = this.datos[x - 1].saldo * i;
      var saldo: number = Number((this.datos[x - 1].saldo - Aconstante));
      var Mrenta: number = inuevo + Aconstante;
      var datoo: Periodo = {
        periodo: x,
        mensualidad: Number(Mrenta.toFixed(2)), // Redondea a 2 decimales
        interes: Number(inuevo.toFixed(2)), // Redondea a 2 decimales
        amortizacion: Number(Aconstante.toFixed(2)), // Redondea a 2 decimales
        saldo: Number(saldo.toFixed(2)) // Redondea a 2 decimales
      };
      this.datos.push(datoo);
    }
    console.log(this.dato);
  }
}