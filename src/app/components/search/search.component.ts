import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  termino: string = ''
  heroes: any[] = [];

  constructor(  private router: Router,
                private activatedRoute: ActivatedRoute,
                private _heroesService: HeroesService
    ) { 
    this.activatedRoute.params.subscribe(param => {
      this.termino = param['termino'];
      this.heroes = this._heroesService.buscarHeroes( this.termino );
    });
  }

  ngOnInit(): void {
  }

  verHeroe( idx ) {
    this.router.navigate(['/heroe', idx])
  }
}
