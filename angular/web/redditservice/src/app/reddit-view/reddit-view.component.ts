import { Component, OnInit } from '@angular/core';
import { City } from '..//City';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-reddit-view',
  templateUrl: './reddit-view.component.html',
  styleUrls: ['./reddit-view.component.css']
})
export class RedditViewComponent implements OnInit {

  cityList: Observable<City[]>;

  constructor(private httpClientmodule:HttpClient) { }

  ngOnInit() {

      this.cityList = this.httpClientmodule
        .get<City[]>("http://thrivecities.com/api/city/")
        ;//.do(console.log);
    }


}
