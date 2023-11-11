import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {User} from "../../models/user";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit{


  constructor(private userService :UserService) {}
  usersList:User[]=[];
  usersListDbJson: User[] =[];
  nb : number | undefined;

  ngOnInit(): void {
    this.usersList = this.userService.getAllUsers();
    this.userService.getAllUsersDbJson().subscribe(data => this.usersListDbJson=data)
  }

  fetchNbInListHtml():number{
   return  this.nb=this.userService.fetchNbInList(this.usersList,"email","Ryan@nicholson.com")
  }

  deleteUser(u:User){
    console.log(u);

    this.userService.deleteUser(u).subscribe();
  }
}
