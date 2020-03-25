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
import { CurrentConditionsComponent } from './current-conditions/current-conditions.component';
import { CityPageComponent } from './city-page/city-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card'; 
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button'; 

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UpperBarComponent,
    WarningBarComponent,
    ListCitiesComponent,
    ListCitiesElemComponent,
    SearchBarComponent,
    CurrentConditionsComponent,
    CityPageComponent,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
