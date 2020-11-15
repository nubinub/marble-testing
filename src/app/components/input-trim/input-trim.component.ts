import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { distinctUntilChanged, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-input-trim',
  templateUrl: './input-trim.component.html',
})
export class InputTrimComponent implements OnInit {

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
    );
  }

}
