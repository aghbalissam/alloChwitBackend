import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.scss']
})
export class QuickViewComponent implements OnInit {

  // get this object from service
  /*product= 
  {
    image : 'https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/fhxgyuc0i8rlbrh7mwst',
    name : 'Chicken Nuggets 4 pcs',
    price : 25.10,
    quantity : 1,
    total : 25.10,
    elementSup : undefined
  }; */

  @Input()
  product : any;

  //product : any = false;

  // get this object from service
  /*product = {
    image : 'https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/fhxgyuc0i8rlbrh7mwst',
    name : 'Chicken Nuggets 4 pcs',
    price : 25,
    quantity : 2,
    total : 25,
    elementSup : [
      {
        title :'item 1',
        items :[
          {
            productName : 'Product xxxx',
            productPrice : 10
          },
          {
            productName : 'Product yyyy',
            productPrice : 12
          }
        ]
      },
      {
        title :'item 2',
        items :[
          {
            productName : 'Product bbbbb',
            productPrice : 10
          },
          {
            productName : 'Product ddddd',
            productPrice : 12
          },
          {
            productName : 'Product jjjj',
            productPrice : 7
          }
        ]
      },
      {
        title :'item 3',
        items :[
          {
            productName : 'Product aaaaa',
            productPrice : 10
          },
          {
            productName : 'Product zzzzz',
            productPrice : 12
          }
        ]
      },
      {
        title :'item 4',
        items :[
          {
            productName : 'Product mmmm',
            productPrice : 10
          },
          {
            productName : 'Product ssss',
            productPrice : 12
          },
          {
            productName : 'Product rrrr',
            productPrice : 9
          }
        ]
      },
      {
        title :'item 5',
        items :[
          {
            productName : 'Product ffff',
            productPrice : 10
          },
          {
            productName : 'Product xxxx',
            productPrice : 12
          }
        ]
      },
      {
        title :'item 6',
        items :[
          {
            productName : 'Product oooo',
            productPrice : 10
          },
          {
            productName : 'Product pppp',
            productPrice : 12
          }
        ]
      }
    ]
  }*/

  constructor() {}

  ngOnInit(): void {
    // difference between @input [ Why don't work ]
    // *** console.log('price => ', this.product.price)
  }

  increaseQuantity()
  {
    this.product.quantity++;
    this.product.total += this.product.price;
  }

  decreaseQuantity()
  {
    this.product.quantity--;
    this.product.total -= this.product.price;
  }


  showPrice(event:Event, price: number)
  {
    let btn = event.target as HTMLElement
    btn.setAttribute('disabled', 'true');
    this.product.total += price;

    // Traitement des cas
  }


  changeValue()
  {
    this.product = false;  
  }




  // return two numbers 3.xx

}
