import { Injectable } from '@angular/core';
import {User} from "../../models/user";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = "/api/users";


  listUsers:User[]=[
    {
      id: 1,
      firstName: "Mila",
      lastName: " Kunis",
      birthDate: "1999-06-30",
      accountCategory: "Admin",
      email: "mila@kunis.com",
      password: "test",
      picture: "https://bootdey.com/img/Content/avatar/avatar3.png",
      profession: "Software Engineer"
    },
    {
      id: 2,
      firstName: "George",
      lastName: "Clooney",
      birthDate: "1999-06-30",
      accountCategory: "Customer",
      email: "marlon@brando.com",
      password: "test",
      picture: "https://bootdey.com/img/Content/avatar/avatar2.png",
      profession: "Software Engineer"
    },
    {
      id: 3,
      firstName: "George",
      lastName: "Clooney",
      birthDate: "1999-06-30",
      accountCategory: "Customer",
      email: "marlon@brando.com",
      password: "test",
      picture: "https://bootdey.com/img/Content/avatar/avatar1.png",
      profession: "Software Engineer"
    },
    {
      id: 4,
      firstName: "Ryan",
      lastName: "Gossling",
      birthDate:"1999-06-30",
      accountCategory: "Golden",
      email: "Ryan@nicholson.com",
      password: "test",
      picture: "https://bootdey.com/img/Content/avatar/avatar4.png",
      profession: "Software Engineer"
    },
    {
      id: 5,
      firstName: "Robert",
      lastName: "Downey",
      birthDate: "1999-06-30",
      accountCategory: "Blocked Account",
      email: "robert@nicholson.com",
      password: "test",
      picture: "https://bootdey.com/img/Content/avatar/avatar5.png",
      profession: "Software Engineer"
    }
  ]

  constructor(private http:HttpClient) { }

  getAllUsers(){
    return this.listUsers;
  }

  getAllUsersDbJson(){

    let url= this.apiUrl ;
    return this.http.get<User[]>(url);
  }

  fetchNbInList(list: User[], attribute:string, attributeVal: string){

    const filtredList = list.filter(user => // @ts-ignore
      user[attribute]===attributeVal);
    return filtredList.length;
  }

  deleteUser (user: User): Observable<User> {
    const url=this.apiUrl+'/'+user.id;
    return this.http.delete<User>(url);
  }

  httpOptions =
    {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  addUser(u:User){

    return this.http.post<User>(this.apiUrl, u, this.httpOptions);
  }
  getUserById(id: number):Observable<User> {
    return this.http.get<any>(this.apiUrl +'/'+ id); }

  updateUser(id: number, user:User): Observable<User> {
    return this.http.put<User>(this.apiUrl+'/'+ id, user,this.httpOptions);
  }






























}
