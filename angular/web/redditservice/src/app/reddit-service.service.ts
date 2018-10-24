import { Injectable } from '@angular/core';
import { City } from './City';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class RedditServiceService {
  constructor(private http: HttpClient) { }
}
