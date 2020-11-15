import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestScheduler } from 'rxjs/testing';

import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  let scheduler: TestScheduler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ InputComponent ]
    });
    fixture = TestBed.createComponent(InputComponent);
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
    it('should emit the same value when value changes', () => {
      scheduler.run(({expectObservable, hot}) => {
        const marbles         = '---a--b--c';
        const expectedMarbles = 'w--x--y--z';
        const values = {a: 't', b: 'th', c: 'the'};
        const expectedValues = {w: '', x: 't', y: 'th', z: 'the'};
        (component.control as any).valueChanges = hot(marbles, values);
        component.ngOnInit();
        expectObservable(component.value$).toBe(expectedMarbles, expectedValues);
      });
    });
  });
});
