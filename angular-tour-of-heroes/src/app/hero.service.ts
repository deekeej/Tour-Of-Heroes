import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
//for getting data from the server which is asynchronous
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

// This marks the class as one that participates in the dependency injection system.
@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
