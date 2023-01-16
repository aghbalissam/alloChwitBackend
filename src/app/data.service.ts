import { Injectable } from '@angular/core';
import listRest from 'src/app/categories';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  listRestaurants = listRest;
  
  userAuth = false;

  cartElements : {
    productName : string,
    productId : number,
    productPrice : number,
    productCount : number
  }[] = [
    /*{
      productName : 'Product 1',
      productId : 12,
      productPrice : 25,
      productCount : 2
    }*/
  ]

  currentShop = 
  {
    name : 'aazdaz',
    time : 'dazdazd',
    shipping : 'dazdaz',
    rating : 'dazdzada'
  }

  userInfos = {
    name : 'Youssef Benjamine',
    email : 'youssefbenjamine@gmail.com',
    phoneNumber : '045457457',
    password :'Xazjkfajllk',
    image : 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }


  
}
