import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestScheduler } from 'rxjs/testing';

import { InputDebounceTrimComponent } from './input-debounce-trim.component';

describe('InputDebounceTrimComponent', () => {
  let component: InputDebounceTrimComponent;
  let fixture: ComponentFixture<InputDebounceTrimComponent>;
  let scheduler: TestScheduler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ InputDebounceTrimComponent ]
    });
    fixture = TestBed.createComponent(InputDebounceTrimComponent);
    component = fixture.componentInstance;
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  describe('#new', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
  
  describe('#ngOnInit', () => {
    it('should trim the values and emit after 500ms when the value has changes', () => {
      scheduler.run(({expectObservable, hot}) => {
        const marbles         = 'a--b--c 500ms  --d';
        const expectedMarbles = '------  500ms x---';
        const values = {a: 't', b: 'th', c: 'the', d: 'the '};
        const expectedValues = {x: 'the'};
        (component.control as any).valueChanges = hot(marbles, values);
        component.ngOnInit();
        expectObservable(component.value$).toBe(expectedMarbles, expectedValues);
      });
    });
  });
});
