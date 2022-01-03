import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activeUsers: User[] = []

  inactiveUsers: User[] = []


  constructor(private userSerivce: UserService) {
  }

  fetch = () => {
    this.activeUsers = this.userSerivce.get(u => u.isActive)
    this.inactiveUsers = this.userSerivce.get(u => !u.isActive)
  }

  ngOnInit() {
    this.userSerivce.onUsersUpdate.subscribe(this.fetch)
    this.fetch()
  }
}
