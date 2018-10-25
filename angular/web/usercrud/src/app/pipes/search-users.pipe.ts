import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../users/user.class';


@Pipe({
  name: 'searchUsers'
})
export class SearchUsersPipe implements PipeTransform {

  transform(users: User[], searchCriteria: string): User[] {
    if(searchCriteria===''){
      return users;
    }
    let selectedUsers: User[] = [];

    for(let user of users){
      if(  typeof(user.UserName) === 'string' && user.UserName.includes(searchCriteria)     || 
           typeof(user.UserName) === 'string' &&   user.FirstName.includes(searchCriteria)  || 
           typeof(user.UserName) === 'string' && user.LastName.includes(searchCriteria)     ||
           typeof(user.UserName) === 'string' && user.Phone.includes(searchCriteria)        || 
           typeof(user.UserName) === 'string' && user.Email.includes(searchCriteria)
        ) {
          selectedUsers.push(user);
       }
    }
    return selectedUsers;
  }

}
