import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  // import Input class and type @Input before property name to get input from Parent class!
  @Input() hero?: Hero;
  constructor() {}

  ngOnInit(): void {}
}
