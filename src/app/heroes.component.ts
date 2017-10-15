import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  /* Angular vas créer une instance de Service "HeroService" */
  providers: []
})

export class HeroesComponent implements OnInit {


  //title = 'Tour of Heroes';
	
	selectedHero: Hero;

	heroes: Hero[];

	constructor(private heroService: HeroService) 
	{	}

	getHeroes(): void
	{
		/* Promiserésout avec succès, vous aurez des héros à afficher */
		/*  then son argument c'esta la promise */
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	/* cycle de vie de la composant ,lors de la creation vas initialiser avec OnInit */
	ngOnInit(): void {
  		this.getHeroes();
	}

	onSelect(hero : Hero): void {
		this.selectedHero = hero;
	}

	
}

