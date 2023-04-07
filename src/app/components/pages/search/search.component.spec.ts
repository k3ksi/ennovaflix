import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { ButtonComponent } from '../../button/button.component';
import {  FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResultSearchComponent } from '../../result-search/result-search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchComponent , ButtonComponent , ResultSearchComponent],
      imports : [FormsModule , ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
