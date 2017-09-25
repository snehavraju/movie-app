
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
  private apikey = '?api_key=a9ec67c956e4c0e3a3cf2976e543272d'

  private headers = new Headers({'Content-Type': 'application/json'});

  search(term:string): Observable<any> {
      const url = `${this.searchUrl}${term}`;
      console.log(url);
      return this.http.get(url).map((res:Response)=> res.json() );
  } 

  get_movie(id: number) {
    const url = this.movieUrl + id + this.apikey;
    console.log(url);
    return this.http.get(url).map((res:Response)=> res.json());
  }  

  
}