import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-modal',
  templateUrl: './address-modal.component.html',
  styleUrls: ['../../../shared.scss','./address-modal.component.scss']
})

export class AddressModalComponent implements OnInit {

  mapPin =false;
  location = true; 
  searchBox = true;

  exampleList = 
  [
    'Rue 1',
    'Rue 2',
    'Rue 3',
    'Rue 4',
    'Rue 5',
    'Rue 6',
    'Rue 7',
    'Rue 8'
  ]

  constructor() { }

  ngOnInit(): void {
    
  }

  getCurrentPos()
  {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      // let long = Math.abs(position.coords.longitude);

      //latText.innerText = lat.toFixed(2);
      //longText.innerText = long.toFixed(2);
  
      console.log(lat);
      console.log(long);
    });
  }

  closePopUp()
  {
    this.location = this.mapPin = false;
  }


  searchAdress()
  {
    
  }

}
