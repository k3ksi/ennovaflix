import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SearchService, ContentFound, ContentArray } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
search$ = inject(SearchService);
results = this.search$.contentFound$;
model = new FormGroup({
  searchValue: new FormControl<string>('', [
    Validators.minLength(2),
    Validators.required,
  ])
});
search(){
  const searchValue = this.model.value.searchValue;
  if(searchValue){
    console.log(searchValue)
    this.search$.results(searchValue)
  }
}
}
