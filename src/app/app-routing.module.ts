import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CisComponent } from './views/cis/cis.component';
import { CicComponent } from './views/cic/cic.component';

const routes: Routes = [
  { path:'' , redirectTo:'home' , pathMatch:'full'},
  { path: 'calculadora-interes-simple', component: CisComponent},
  { path: 'calculadora-interes-compuesto', component:  CicComponent},
  { path: 'home', component : HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
