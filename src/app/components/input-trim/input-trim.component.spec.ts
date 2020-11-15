import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestScheduler } from 'rxjs/testing';

import { InputTrimComponent } from './input-trim.component';

describe('InputTrimComponent', () => {
  let component: InputTrimComponent;
  let fixture: ComponentFixture<InputTrimComponent>;

  let scheduler: TestScheduler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ InputTrimComponent ]
    });
    fixture = TestBed.createComponent(InputTrimComponent);
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
    it('should trim the values', () => {
      scheduler.run(({expectObservable, hot}) => {
        const marbles         = '---a--b--c--d';
        const expectedMarbles = 'x--y-----z---';
        const values = {a: 't', b: 't ', c: 't e', d: 't e '};
        const expectedValues = {x: '', y: 't', z: 't e'};
        (component.control as any).valueChanges = hot(marbles, values);
        component.ngOnInit();
        expectObservable(component.value$).toBe(expectedMarbles, expectedValues);
      });
    });
  });
});
