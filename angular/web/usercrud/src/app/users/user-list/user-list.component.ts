import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { UserService } from '../user.service';
import { User } from '../user.class';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  user: User;

  searchCriteria='';

  delete(user: User): void{
    this.userSvc.remove(user).subscribe(jsonres => {
      if(jsonres.rc === 200){
        this.userSvc.list().subscribe(jsonresp => {
          console.log(jsonresp);
          this.users = jsonresp.data;
        });
      }
    })
  }

  constructor(private userSvc: UserService, private router: Router) {
   }

  ngOnInit() {
    this.userSvc.list().subscribe(jsonresp => {
      console.log(jsonresp);
      this.users = jsonresp.data;
    });
  }

}
