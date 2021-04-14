import { Component } from '@angular/core';
import { Friend } from './friend';



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
    if (this.friendModel !== ''){
      const newFriend: Friend = {
        firstName: '',

      };
      this.list.push(newFriend);
    }
    //Friend = '';
  }

  deleteFriend(): void{

  }

}
