import { HomepageComponent } from './homepage.component';
import { FooterComponent } from './footer/footer.component';
import { DisplayComponent } from './display.component';
import { MovieDetailsComponent } from './movie-details.component';

import { HttpModule } from '@angular/http';
import { SearchService } from './search.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieDetailsComponent,
    DisplayComponent ,
    FooterComponent,
    HomepageComponent
  
      ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
     
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
