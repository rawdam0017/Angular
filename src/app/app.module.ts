import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { NavdarTask2Component } from './navdar-task2/navdar-task2.component';
import { CarouselTask2Component } from './carousel-task2/carousel-task2.component';
import { HeaderTask2Component } from './header-task2/header-task2.component';
import { MainTask2Component } from './main-task2/main-task2.component';
import { FooterTask2Component } from './footer-task2/footer-task2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    NavdarTask2Component,
    CarouselTask2Component,
    HeaderTask2Component,
    MainTask2Component,
    FooterTask2Component
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
