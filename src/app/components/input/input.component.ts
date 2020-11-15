import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
})
export class InputComponent implements OnInit {
  
  public control: FormControl = new FormControl();

  public value$: Observable<string> = new Observable<string>();

  constructor() { }

  ngOnInit(): void {
    this.value$ = this.control.valueChanges.pipe(
      startWith(''),
    );
  }

}
