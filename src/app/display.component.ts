import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-display',
    templateUrl: './display.component.html',
    styleUrls: ['./display.component.css']
  })

  export class DisplayComponent implements OnInit {
      private movie: any;

      constructor(
          private searchserv:SearchService,
          private route: ActivatedRoute,
          private location: Location
      ){};

      ngOnInit() {
        this.route.paramMap
        .switchMap((param: ParamMap) => this.searchserv.get_movie(+param.get('id')))
        .subscribe( movie => this.movie = movie ) ;
        
      }
  }

