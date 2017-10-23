/* pour définir un composant il faut importer toujours le Componenet symbole */
import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';
import { Hero } from './hero';

import { HeroService } from './hero.service';
import { Location }  from '@angular/common';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})


export class HeroDetailComponent implements OnInit {

	/* hero c'est une propriété d' entrée */
	@Input() hero: Hero;

	constructor(
	  private heroService: HeroService,
	  private route: ActivatedRoute,
	  private location: Location
	) {}


	ngOnInit(): void {

	/* a valeur du paramètre de route est convertie en un nombre avec l'opérateur JavaScript (+). */
	  this.route.paramMap
	    .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
	    .subscribe(hero => this.hero = hero);
	}

	goBack(): void {
	  this.location.back();
	}

}
