import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/models/user.model';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  @Input()
  users: User | null = null

  @Input()
  title: string = ''

  @Input()
  link: string = ''

  constructor(private userService: UserService) {

  }

  toggleActivation = this.userService.toggleActivation
}
