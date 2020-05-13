import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsUtilityService {

  constructor() { }

  public sampleSubject = new BehaviorSubject<string>('1');
  sampleSubject$ = this.sampleSubject.asObservable();

  updateSampleSubject(value: string): void {
     this.sampleSubject.next(value);
  }
}
