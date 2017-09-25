
import { element } from 'protractor';
import { SearchService } from './search.service';
import { Component, OnInit, Input } from '@angular/core'; 
import { Moviedata } from './moviedata';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

@Component({
    selector:'movie-details',
    templateUrl:'./movie-detail.component.html',
    styleUrls:['./movie-detail.component.css']
})

export class MovieDetailsComponent implements OnInit{

    

    constructor(
        private searchService: SearchService,
        private route: ActivatedRoute,
        private location: Location){
      
    }
    private moviedatas : any;

    ngOnInit() {
        this.route.paramMap
        .switchMap((param: ParamMap) => this.searchService.search(param.get('value')))
        .subscribe( moviedatas => this.moviedatas = moviedatas);
      }
    

   
/*  search(term:string){
        return this.searchService.search(term)
        .subscribe(moviedatas => {
            this.moviedatas = moviedatas;
            console.log(moviedatas);
        });
    }*/
}