import { Injectable } from '@angular/core';
import { Friend } from './Friend';

@Injectable({
  providedIn: 'root'
})
export class FriendServiceService {
  friendList:Friend[] = [
    new Friend("Sumit",26,"mysite@ourearth.com",false),
    new Friend("Tom",22,"mysite@ourearth.com",false),
    new Friend("Ron",23,"mysite@you.me.net",false),
    new Friend("Bob",24,"btre@outlook.com",false),
    new Friend("Max",25,"tretw",false)
  ];

  getFriends():Friend[] {
    return this.friendList;
  }
  constructor() { }
}
