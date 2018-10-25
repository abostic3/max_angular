import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { JsonResponse } from '../../json-responce.class';

import { User } from '../user.class';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User;

  save(): void{
   this.usersvc.change(this.user).subscribe(jsonres => {
    console.log(jsonres);
    if(jsonres.rc === 200){
      this.router.navigateByUrl('/user/list')
    }
   });
  }

  delete(): void{
    this.usersvc.remove(this.user).subscribe(jsonres => {
      if(jsonres.rc === 200){
        this.router.navigateByUrl('/user/list')
      }
    })
  }

  constructor(private usersvc: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.usersvc.get(id).subscribe(jsonres => {
      console.log(jsonres);
      this.user=jsonres.data;
    });
  }

}
