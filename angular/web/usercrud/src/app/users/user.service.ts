import { Injectable } from '@angular/core';
import { User } from './user.class';
import { JsonResponse } from '../json-responce.class';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

const url = 'http://localhost:5000/users/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  list():Observable<JsonResponse>{
    return this.http.get(url+'list') as Observable<JsonResponse>;
  }
  get(id: string): Observable<JsonResponse>{
    return this.http.get(url+"detail/"+id) as  Observable<JsonResponse>;
  }
  create(user: User) : Observable<JsonResponse> {
    return this.http.post(url+"create", user) as Observable<JsonResponse>;
  }
  change(user: User) : Observable<JsonResponse> {
    return this.http.post(url+"change", user) as Observable<JsonResponse>;
  }
  remove(user: User) : Observable<JsonResponse> {
    return this.http.post(url+"remove", user) as Observable<JsonResponse>;
  }

  constructor(private http: HttpClient) { }

}