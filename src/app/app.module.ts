import { MovieDetailsComponent } from './movie-details.component';

import { HttpModule } from '@angular/http';
import { SearchService } from './search.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieDetailsComponent,
    
  
      ],
  imports: [
    BrowserModule,
    HttpModule,
    
     
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
