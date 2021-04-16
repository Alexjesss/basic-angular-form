import { Component, OnInit } from '@angular/core';
import { Friend } from './friend';
import {AddFriendService} from './add-friend.service';
import {HttpHeaders} from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'form';
  friendList: Friend[];
  codingList = ['Javascript', 'PHP', 'Java', 'Python', 'C++'];
  friendModel = new Friend();
  getAllFriends = 'http://localhost:9000/allFriends';

  addFriend(): void {
    this.addFriendService.postRequest(this.friendModel).subscribe(succes => this.getAllFriends,
        error => console.log(error));

  }

  public async fetchFriends(): Promise<any> {
    await fetch(this.getAllFriends, {method: 'get', headers: {'Content-Type': 'application/json'}})
  .then(response => {
      return response.json() as Promise<any>;
    })
  .then(response => {
      return this.friendList = response;
      });
  }

  ngOnInit(): any {
    this.fetchFriends()
    .then(response => console.log(this.friendList));
  }

  constructor(
    private addFriendService: AddFriendService,
  ) {}

  deleteFriend(): void{

  }

}
