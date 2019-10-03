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
  heroe: any
  heroeId:number
  constructor(private _heroesService: HeroesService, private router: Router) {
  }
  ngOnInit() {
  }

  // buscarHeroe(nombreHeroe: string) {
  //   nombreHeroe = nombreHeroe.toLowerCase()
  //   this.heroes = this._heroesService.getHeroes()
    
  //   this.heroe = this.heroes.find((heroe, index) => {
  //     this.heroeId = index
  //     return nombreHeroe === heroe.nombre.toLowerCase()
  //   })
  //   if(this.heroe) {
  //     this.router.navigate(['/heroe', this.heroeId])
  //   }
  // }

  buscarHeroe(termino:string) {
    this.router.navigate(['/buscador', termino])
  }
}
