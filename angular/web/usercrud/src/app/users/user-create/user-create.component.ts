import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { User } from '../user.class';
import { UserService } from '../user.service';
import { JsonResponse } from 'src/app/json-responce.class';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: User = new User();

  save(): void{
    this.usersvc.create(this.user).subscribe(jsonresp => {
      console.log(jsonresp);
      this.router.navigateByUrl('/user/list');
    });
  }

  constructor(private usersvc: UserService, private router: Router) { }

  ngOnInit() {
  }

}
