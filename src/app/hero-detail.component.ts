/* pour définir un composant il faut importer toujours le Componenet symbole */
import { Component, Input } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})


export class HeroDetailComponent {

	/* hero c'est une propriété d' entrée */
	@Input() hero: Hero;
}
