import { Component } from '@angular/core';
import { Friend } from './friend';
import {AddFriendService} from './add-friend.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'form';
  list: Friend[];
  codingList = ['Javascript', 'PHP', 'Java', 'Python', 'C++'];
  friendModel = new Friend();

  addFriend(): void {
    this.addFriendService.addFriend(Friend).subscribe( data => 'it worked', error => 'it didnt work');

    if (this.friendModel !== ''){
      const newFriend: Friend = {
        firstName: '',

      };
      this.list.push(newFriend);
    }
    //Friend = '';
  }

  constructor(
    private addFriendService: AddFriendService,
  ) {}

  deleteFriend(): void{

  }

}
