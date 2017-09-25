import { HomepageComponent } from './homepage.component';
import { DisplayComponent } from './display.component';
import { MovieDetailsComponent } from './movie-details.component';

import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes =[
    {path: '', redirectTo: '/homepage', pathMatch:'full'},
    {path: 'homepage' , component:HomepageComponent},
    {path: 'movie/:id', component:DisplayComponent},
    {path: 'moviedetails/:value' , component:MovieDetailsComponent}

];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}