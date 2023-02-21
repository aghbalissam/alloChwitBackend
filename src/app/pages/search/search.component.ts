import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchTerm : string = "";
  partners !: any[];
  menus !: any[]; 

  constructor(
    private activatedRoute : ActivatedRoute,
    private router : Router,
    private dataService: DataService
  ) 
  {    
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.searchTerm = this.activatedRoute.snapshot.params['term']    
    this.search()
  }

  search()
  {
    this.dataService.searchIn(this.searchTerm).subscribe( (data : any) => {
      this.partners = data.partners
      // this.partners = data.partners
    });
  }

}
