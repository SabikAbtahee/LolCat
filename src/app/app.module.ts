import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainCatComponent } from './main-cat/main-cat.component';
import { ClockService } from './clock.service';

@NgModule({
  declarations: [
    AppComponent,
    MainCatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ClockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
