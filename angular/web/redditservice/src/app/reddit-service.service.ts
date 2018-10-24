import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RedditServiceService {

  getWeather(query) {
    const endpoint = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=44db6a862fba0b067b1930da0d769e98';
    return this.http
      .get(endpoint)//, {search: searchParams})
      .map(res => res.json().main)
      .subscribe(res => {
        this.weather = data;
      });
  }

  constructor() { }
}
