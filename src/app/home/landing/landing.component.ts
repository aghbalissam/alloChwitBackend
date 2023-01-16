import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  rests = this.dataService.listRestaurants;

  addressActive = true;

  meilleuresCat = [
    "Burgers",
    "Sandwichs",
    "Pizza",
    "Tacos",
    "Asiatique",
    "Pâtes",
    "Italien"
  ]

  Opportunites = [
    {
      title :'Emploi',
      image : '',
      shortDescription : `Vous cherchez un nouveau défi ?
      Si vous faites preuve d'ambition et d'humilité
      et aimez travailler en équipe, contactez-nous !`,
      link : ''
    },
    {
      title :'Devenir partenaire',
      image : '',
      shortDescription : `Grandissez avec Allo chwit !
      Boostez les ventes et accédez à de nouvelles
      opportunités grâce à notre technologie et
      à notre base d'utilisateurs !`,
      link : ''
    },
    {
      title :'Devenir coursier',
      image : '',
      shortDescription : `C'est vous le chef ! Livrez avec Allo chwit
      pour gagner des revenus compétitifs
      en toute flexibilité et liberté.`,
      link : ''
    }
  ]

  constructor(
    private dataService : DataService
  ) { }

  ngOnInit(): void {
  }

  getAdress()
  {
    console.log('hello');
    this.addressActive = true;
  }

}
