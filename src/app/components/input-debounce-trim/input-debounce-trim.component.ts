import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, map, distinctUntilChanged, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-input-debounce-trim',
  templateUrl: './input-debounce-trim.component.html',
})
export class InputDebounceTrimComponent implements OnInit {

  public control: FormControl = new FormControl();

  public value$: Observable<string> = new Observable<string>();

  constructor() { }

  ngOnInit(): void {
    this.value$ = this.control.valueChanges.pipe(
      startWith(''),
      map(
        (val) => val.trim() 
      ),
      distinctUntilChanged(),
      debounceTime(500),
    );
  }

}
