import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, ReplaySubject, AsyncSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsUtilityService {

  constructor() { }

   //public sampleSubject = new BehaviorSubject<number>(0);
   //public sampleSubject = new Subject<number>();
   //public sampleSubject = new ReplaySubject<number>(3); // saves last 3 observed values
   public sampleSubject = new AsyncSubject<number>(); 

  sampleSubject$ = this.sampleSubject.asObservable();

  updateSampleSubject(value: number): void {
     this.sampleSubject.next(value);
  }

  completeSubject(): void {
    this.sampleSubject.complete();
  }
}
