import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../services/user.service";
import {User} from "../../models/user";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit{


  constructor(private userService :UserService, private R:Router ) {}
  usersList:User[]=[];
  usersListDbJson: User[] =[];
  nb : number | undefined;
  l !: number  ;


  ngOnInit(): void {
    this.usersList = this.userService.getAllUsers();
    this.userService.getAllUsersDbJson().subscribe(data => {
      this.l = data.length + 1;
      this.usersListDbJson = data;
    });

  }

  fetchNbInListHtml():number{
   return  this.nb=this.userService.fetchNbInList(this.usersList,"email","Ryan@nicholson.com")
  }

  deleteUser(u:User){
    console.log(u);

    this.userService.deleteUser(u).subscribe();
  }
  add(f:NgForm){
    console.log(f);
    const myUser:User={
      "id": this.l,
      "firstName": f.value.fn,
      "lastName": f.value.ln,
      "birthDate": f.value.bd,
      "accountCategory": f.value.accountCategory,
      "email": f.value.email,
      "password": f.value.password,
      "picture": "https://bootdey.com/img/Content/avatar/avatar3.png",
      "profession":f.value.profession
    }

    this.userService.addUser(myUser).subscribe(()=>
    {
      alert('added User!!');

    })
  }
}
