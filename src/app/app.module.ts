import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { UpperBarComponent } from './upper-bar/upper-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UpperBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
