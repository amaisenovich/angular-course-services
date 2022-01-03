import { Injectable, EventEmitter } from '@angular/core';
import { User } from 'src/models/user.model';
import { ProvidedIn } from 'src/enums/providedIn.enum';
import { ChangesService } from 'src/services/changes.service';

@Injectable({
  providedIn: ProvidedIn.ROOT
})
export class UserService {
  users: User[] = [
    new User('Max'),
    new User('Anna'),
    new User('Chris', false),
    new User('Chris', false)
  ]

  onUsersUpdate = new EventEmitter<User[]>()

  constructor(private changesService: ChangesService) {

  }

  get = (predicate: (u: User) => boolean = () => true) => {
    return this.users.filter(predicate);
  }

  update = (user: User) => {
    this.users = this.users.map(u => u === user ? user : u)
    this.onUsersUpdate.emit(this.users)
    this.changesService.log(user)
  }

  actiate = (user: User) => {
    user.isActive = true
    this.update(user)
  }

  deactivate = (user: User) => {
    user.isActive = false
    this.update(user)
  }

  toggleActivation = (user: User) => {
    user.isActive = !user.isActive
    this.update(user)
  }
}
