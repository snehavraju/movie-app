
import { Injectable } from "@angular/core";
import { Http,Response } from '@angular/http'
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Moviedata } from './moviedata';

@Injectable()
export class SearchService{
  constructor(private http:Http){

      console.log('Search Service Constructor');
  }
  private searchUrl = "https://api.themoviedb.org/3/search/movie?api_key=a9ec67c956e4c0e3a3cf2976e543272d&query=";
  private movieUrl = "https://api.themoviedb.org/3/movie/";
  private apiKey = "?api_key=cf8441d05e8376c04c2feb36bd5b492f&language=en-US";

  private headers = new Headers({'Content-Type': 'application/json'});

  search(term:string): Observable<any> {
      const url = `${this.searchUrl}${term}`;
      console.log(url);
      return this.http.get(url).map((res:Response)=> res.json() );
  } 

  
}