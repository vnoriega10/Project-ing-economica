import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CisComponent } from './views/cis/cis.component';
import { CicComponent } from './views/cic/cic.component';
import { AmortizacionComponent } from './views/Amortizacion/amortizacion.component';
import { AAlemanComponent } from './views/Amortizacion/Alemana/AAleman.component';
import { AAmericanaComponent } from './views/Amortizacion/Americana/AAmericana.component';
import { AFrancesaComponent } from './views/Amortizacion/Francesa/AFrancesa.component';
import { TirComponent } from './views/tir/tir.component';

const routes: Routes = [
  { path:'' , redirectTo:'home' , pathMatch:'full'},
  { path: 'calculadora-interes-simple', component: CisComponent},
  { path: 'calculadora-interes-compuesto', component:  CicComponent},
  { path: 'calculadora-amortizacion', component: AmortizacionComponent},	
  { path: 'calculadora-Alemana', component: AAlemanComponent},
  { path: 'calculadora-Americana', component: AAmericanaComponent},
  { path: 'calculadora-Francesa', component: AFrancesaComponent},
  { path: 'calculadora-tir', component: TirComponent},
  { path: 'home', component : HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
