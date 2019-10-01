import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../../services/heroes.services'
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  heroes: Heroe[] = []
  heroeId: number
  constructor(private _heroesService: HeroesService, private router: Router) {
  }
  ngOnInit() {
  }

  buscarHeroe(heroe: string) {
    heroe = heroe.toLowerCase()
    this.heroes = this._heroesService.getHeroes()
    // console.log(this.heroes)
    this.heroes.filter((e, index) => {
      if (e.nombre.toLowerCase() === heroe) {
        this.router.navigate(['/heroe', index])
      }
    })
  }
}
