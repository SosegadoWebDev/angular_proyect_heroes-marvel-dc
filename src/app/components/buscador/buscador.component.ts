import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HeroesService } from 'src/app/services/heroes.services';
// import { Router } from '@angular/router' //button router

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  heroes: any[] = []
  termino: string
  constructor(private activatedRoute: ActivatedRoute, private _heroesService: HeroesService) {

  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino']
      this.heroes = this._heroesService.buscarHeroes(params['termino'])
      console.log(this.heroes)
    })
  }
  // verHeroe(idx: number) { boton router
  //   // console.log(id)
  //   this.router.navigate(['/heroe', idx])
  // }

}
