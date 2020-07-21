import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Users } from '../userDataset';
import { Router } from '@angular/router';

@Component({
  selector: 'my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent implements OnInit {

  userList : Users[];

  constructor(private usersService : UsersService,private router:Router) { }

  ngOnInit(): void {
    this.fillList();
  }

  fillList() : void {
    this.usersService.getAll().subscribe((res:Users[]) => {
      this.userList = res;
    });
  }

  remove(id:number,user:Users):void {
      this.usersService.delete(id).subscribe();
      const obj = this.userList.indexOf(user);
      this.userList.splice(obj,1);
  }

  route(id:number){
      this.router.navigate(['edit/'+id]);
  }


}
