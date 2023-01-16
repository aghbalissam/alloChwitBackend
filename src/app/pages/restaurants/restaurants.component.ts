import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';
import filters from 'src/app/filters';
 
@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {

  listRestaurants = this.dataService.listRestaurants;
  city : string | null | undefined;
  categories : string[] = [];
  types : string [] = [];
  filtersCat = filters;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService 
  ) { }

  ngOnInit(): void {
    this.city = this.route.snapshot.paramMap.get('city');
    this.generateList();
    this.generateCategories();
    this.generateTypes(); 
  }

  generateList():void
  {
    if(this.city)
    {
      this.listRestaurants = this.dataService.listRestaurants.filter(res => res.city == this.city);
    }
  }

  generateLink(slogan:string):string
  {
    return '/'+ this.city + '/restaurants/' + slogan;
  }

  generateTypes():void
  {
    this.listRestaurants.forEach(res => {
      if(!this.types.includes(res.type))
      this.types.push(res.type);
    })
  }

  generateCategories():void
  {
    this.listRestaurants.forEach(res => {
      res.categories.forEach(category => {
        if(!this.categories.includes(category))
        {
          console.log(category)
          this.categories.push(category);
        }
      })
    })
  }

  findImage(name : string)
  {
    let imgSrc = this.filtersCat.find(fil => fil.name == name)
    return imgSrc?.image;
  }

}
