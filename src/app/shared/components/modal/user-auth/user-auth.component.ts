import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent implements OnInit {
  userAuth = this.dataService.userAuth;

  userIn = false;
  userUp = true;
  operation = "Inscription"
  
  constructor(
    private dataService : DataService
  ) { }

  ngOnInit(): void {
  }

  closeModalUser()
  {
    //this.dataService.userAuth = false;
  }

  showBox(val: string)
  {
  // Optimize this Code [ Use the Object operation ] 

    if(val == 'up')
    {
      this.userIn = false;
      this.userUp = true;
      this.operation = "Inscription"
    }
    else
    {
      this.userIn = true;
      this.userUp = false;
      this.operation = "Connexion"
    }
  }

}
