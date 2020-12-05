import { Component, OnInit } from '@angular/core';
import { userSrevice } from './user.service';
import { IUser } from './IUser';
import { Observable,  } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  protected title = 'app';
  protected users$: Observable<IUser[]>;
  
  constructor (public userservice: userSrevice) { }
  
  ngOnInit() {
    this.userservice.getUsers().subscribe(res => {
      this.users$ = res;
    })
  }
 
  }



  
  
    

    
  


