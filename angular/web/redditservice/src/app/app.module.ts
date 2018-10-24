import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RedditViewComponent } from './reddit-view/reddit-view.component';

@NgModule({
  declarations: [
    AppComponent,
    RedditViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
