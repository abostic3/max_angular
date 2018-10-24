import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCvEnducationComponent } from './my-cv-enducation/my-cv-enducation.component';
import { MyCvWorkComponent } from './my-cv-work/my-cv-work.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCvEnducationComponent,
    MyCvWorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
