import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../userDataset';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


  constructor(private router : Router,private userServise : UsersService) { }

  ngOnInit(): void {
  }

  save(name,lastname,email:HTMLInputElement){
    const obj : Users = {
      first_name : name.value,
      last_name : lastname.value,
      email : email.value
    }
    this.userServise.send(obj)
        .subscribe();
    this.router.navigate(['']);
  }

  cancel(){
    this.router.navigate(['']);
  }

}
