import { Component, OnInit } from '@angular/core';
import { FriendServiceService } from '../friend-service.service';
import { Friend } from '../Friend'; 

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit {
  friendList: Friend[];
  constructor(private friendServiceService: FriendServiceService) {
   }

  ngOnInit() {
    this.friendList = this.friendServiceService.friendList;
  }

}
