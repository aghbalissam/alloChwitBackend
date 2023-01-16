import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss']
})
export class CartModalComponent implements OnInit {

  cartElements = this.dataService.cartElements;

  constructor(
    private dataService : DataService
  ) { }

  ngOnInit(): void {

  }

}
