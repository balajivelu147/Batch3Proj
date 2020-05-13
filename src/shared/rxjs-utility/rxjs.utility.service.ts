import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsUtilityService {

  constructor() { }

  public sampleSubject = new BehaviorSubject<number>(1);
  sampleSubject$ = this.sampleSubject.asObservable();

  updateSampleSubject(value: number): void {
     this.sampleSubject.next(value);
  }
}
