import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { UpperBarComponent } from './upper-bar/upper-bar.component';
import { WarningBarComponent } from './warning-bar/warning-bar.component';
import { ListCitiesComponent } from './list-cities/list-cities.component';
import { ListCitiesElemComponent } from './list-cities-elem/list-cities-elem.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UpperBarComponent,
    WarningBarComponent,
    ListCitiesComponent,
    ListCitiesElemComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
