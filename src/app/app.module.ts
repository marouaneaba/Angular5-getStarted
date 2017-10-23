import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HeroDetailComponent } from './hero-detail.component';
import { AppComponent } from './app.component';
import { HeroesComponent }     from './heroes.component';
import { HeroService }         from './hero.service';
import { RouterModule }   from '@angular/router';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
        {
          path: 'detail/:id',
          component: HeroDetailComponent
        },
        {
          path: '',
          redirectTo: '/dashboard',
          pathMatch: 'full'
        },
        {
          path: 'dashboard',
          component: DashboardComponent
        },
        {
          path: 'heroes',
          component: HeroesComponent
        }
      ])
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})

export class AppModule { }

