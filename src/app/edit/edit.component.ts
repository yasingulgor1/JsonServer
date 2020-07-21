import { Component, OnInit } from '@angular/core';
import { Users } from '../userDataset';
import { UsersService } from '../users.service';
import { ActivatedRoute,Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  user : Users;
  id : any;
  constructor(private userService: UsersService,private route : ActivatedRoute,private router : Router) { }

  ngOnInit(): void {
    this.fillUser();
  }

  fillUser(){
    this.route.params.subscribe(par => this.id = par.id);
    this.userService.getById(this.id).subscribe((user:Users) => this.user = user);
  }

  cancel(){
    this.router.navigate(['']);
  }

  save(id,name,surname,email : HTMLInputElement){
    const obj : Users = {
     first_name : name.value,
     last_name : surname.value,
     email : email.value
    }
    this.userService.update(id.value,obj).subscribe();
    this.router.navigate(['']);
  }



}
