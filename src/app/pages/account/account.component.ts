import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  userInfos = this.dataService.userInfos;
  passwordType : string = 'password';
  classEye : string = 'fa-solid fa-eye';

  constructor(
    private dataService : DataService
  ) { }

  ngOnInit(): void {
  }

  changePswTy()
  {
    console.log('hello');
    (this.passwordType == 'password') ? this.passwordType = 'text' :this.passwordType = 'password';
    (this.classEye == 'fa-solid fa-eye') ? this.classEye = 'fa-sharp fa-solid fa-eye-slash' :this.classEye = 'fa-solid fa-eye';
  }

}

