import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  //mock-heroes database
  heroes: Hero[] = [];

  // selectedHero?: Hero;

  ngOnInit(): void {
    this.getHeroes();
  }

  constructor(private heroService: HeroService) {}

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }

  // when you are using observable, you have to use subscribe because Angular is waiting for the input from the backend
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }


  //It calls HttpClient.post() instead of put()
  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe((hero) => {
      this.heroes.push(hero);
    });
  }

  delete(hero:Hero):void{
    this.heroes=this.heroes.filter(h=>h !==hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
