
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  /* Angular vas créer une instance de Service "HeroService" */
  providers: [HeroService]
})


export class AppComponen implements OnInit {

		title = 'Tour of Heroes';
}