import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-search',
  templateUrl: './result-search.component.html',
  styleUrls: ['./result-search.component.scss'],
})
export class ResultSearchComponent {
  @Input() results: any;
}
