import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';



@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  //styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit{

		 heroes: Hero[] = [];

	constructor(private heroService: HeroService) { }

	ngOnInit(): void {
	/* "heroes => this.heroes = heroes" is a function that accepts one parameter 
			heroes which is going to be the exact same array as the service */

    this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
  	}

}