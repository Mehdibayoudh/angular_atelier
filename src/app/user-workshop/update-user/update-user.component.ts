import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {ActivatedRoute} from "@angular/router";
import {NgForm} from "@angular/forms";
import {User} from "../../models/user";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  id!: number;
  user!:User;

  constructor(private ac: ActivatedRoute, private ps: UserService, private ActR:ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.ActR.snapshot.params['id'];
    this.ps.getUserById(this.id).subscribe(data => {
     this.user = data;
        console.log(this.user);
      }
    );

  }
  update(f: NgForm) {
    const myUser:User={
      "id": this.user.id,
      "firstName": f.value.fn,
      "lastName": f.value.ln,
      "birthDate": f.value.bd,
      "accountCategory": f.value.accountCategory,
      "email": f.value.email,
      "password": f.value.password,
      "picture": "https://bootdey.com/img/Content/avatar/avatar3.png",
      "profession":f.value.profession
    }
    this.ps.updateUser(this.user.id,myUser).subscribe();

  }
}
