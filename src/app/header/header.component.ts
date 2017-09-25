
import { MovieDetailsComponent } from '../movie-details.component';
import { element } from 'protractor';
import { SearchService } from '../search.service';
import { Component } from '@angular/core'; 
import { Moviedata } from '../moviedata';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Location } from '@angular/common';





@Component({
  selector : 'app-header',
  templateUrl : './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent { 
 

  constructor(private router:Router){
    
       }
    
       go(value:string):void{
           let link=['/moviedetails',value];
           this.router.navigate(link);
           
       }
}
