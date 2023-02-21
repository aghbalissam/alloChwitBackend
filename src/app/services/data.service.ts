import { Injectable } from '@angular/core';
import listRest from 'src/app/categories';
import { from, Observable, tap, catchError, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
  

@Injectable({
  providedIn: 'root'
})
export class DataService {
  listRestaurants = listRest;
  uri_orders = "http://localhost:3000/alloChwit/api/orders/newOrder";
  uri_ = "http://localhost:3000/alloChwit/api/";

  constructor (
    private http: HttpClient
  ){}

  cartElements : {
    productName : string,
    productId : number,
    productPrice : number,
    productCount : number
  }[] = []


  // get all [rest & cof] 
  getlistRestaurants(city: string | null | undefined) : Observable<any[]>
  {
    return this.http.get<any[]>(`${this.uri_ + city}/restaurants`);
  }

  // get Restaurants Menu
  getRestaurantMenus(res: any) : Observable<any[]>
  {
    return this.http.get<any[]>(`${this.uri_}restaurants/menus/${res}`);
  }

  // post Order
  addOrders(orders: any)
  {
    return this.http.post(this.uri_orders, orders, {responseType: 'text'});
  }

  // search
  searchIn(searchTerm: string)
  {
    return this.http.get(`${this.uri_}search/${searchTerm}`,{responseType: 'json'});
  }

}


// get

function tab(arg0: (response: any) => void) {
  throw new Error('Function not implemented.');
}

