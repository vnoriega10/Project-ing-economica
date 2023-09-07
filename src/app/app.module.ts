import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { MainComponent } from './views/main/main.component';
import { FormsModule } from '@angular/forms';
import { CisComponent } from './views/cis/cis.component';
import { CicComponent } from './views/cic/cic.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    CisComponent,
    CicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
