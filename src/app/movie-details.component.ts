
import { element } from 'protractor';
import { SearchService } from './search.service';
import { Component, OnInit, Input } from '@angular/core'; 
import { Moviedata } from './moviedata';

@Component({
    selector:'movie-details',
    templateUrl:'./movie-detail.component.html',
    styleUrls:['./movie-detail.component.css']
})

export class MovieDetailsComponent{

    constructor(private searchService: SearchService){
        console.log('Search Component Constructor');
    }
    moviedatas : any[];
    @Input() terms:string;
   
    search(term:string){
        return this.searchService.search(term)
        .subscribe(moviedatas => {
            this.moviedatas = moviedatas;
            console.log(moviedatas);
        });
    }
}