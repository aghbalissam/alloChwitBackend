import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import listRest from 'src/app/categories';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-single-restaurant',
  templateUrl: './single-restaurant.component.html',
  styleUrls: ['./single-restaurant.component.scss']
})

export class SingleRestaurantComponent implements OnInit {
   
  listRestaurants = this.dataService.listRestaurants; 

  slogan : string | null | undefined ;
  currentRestaurant : {name :string, time: string, shipping: string, rating: string, menus: Array<any> }= 
  { 
    name : '',
    time :'',
    shipping :'',
    rating :'',
    menus: []
  };

  menuslistFilter : Array<string> = [] 
  showMenu = false;
  productSelected : any = false;


  constructor(
    private route: ActivatedRoute,
    private dataService: DataService 
  ) { }

  ngOnInit(): void {
      this.slogan = this.route.snapshot.paramMap.get('slogan');
      this.findRestaurant();
  }

  findRestaurant()
  {
    let res = this.listRestaurants.find(restaurant => restaurant.slogan == this.slogan)
    if(res)
    {
      this.currentRestaurant = res;
      this.generateListMenu(res.menus);
    }
  }

  generateListMenu(list: Array<any>)
  {
    list.forEach(menu => {
      this.menuslistFilter.push(menu.title);
    })
  }

  updateSelectedProd(singleMenu: any)
  {
    singleMenu.total = singleMenu.price;
    singleMenu.quantity = 1;
    this.productSelected = singleMenu;
    // console.log(this.productSelected);
  }

  generateLinkSame(part: string)
  {
    // use angular methods to this functions 
    let element = document.getElementById(part);
    if(element) {
      element.scrollIntoView();
    }
  }

  searchInBox()
  {

  }

  /*filterMenu(filterName: string | undefined)
  {
    if(filterName != '')
    {
      this.menusList = [];
      this.menusList.push(this.currentRestaurant.menus.find(menu => menu.title == filterName));
    }
  }*/

}
