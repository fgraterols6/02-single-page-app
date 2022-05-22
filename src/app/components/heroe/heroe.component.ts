import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {

  heroe: any = {} ;

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService,
              private router: Router
  ) { 

    this.activatedRoute.params.subscribe( params => {
      let id = Number(params['id']);
      this.heroe = this._heroesService.getHeroe( id );
    });
  
  }

  goBack() {
    this.router.navigate(['/heroes']);
  }
}
