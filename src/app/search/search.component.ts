import {Component, OnInit} from '@angular/core';
import {GoogleBooksService} from "../shared/google-books.service";
import {Book} from "../shared/book";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private term:String='';
  

  constructor(private router:Router,
    private route:ActivatedRoute,
    private service:GoogleBooksService)
     {
          this.route.params.subscribe(params=>{
            console.log(params);

            if(params['term'])
            {
              this.term=params['term'];
              this.onSearch(params['term']);

            }
          })
  }

  doSearch() {
    this.router.navigate(['search', {term:this.term}]);
  }

  onSearch(term: string) {
    this.service.searchBooks(term);
  }

  ngOnInit() {
  }

}
