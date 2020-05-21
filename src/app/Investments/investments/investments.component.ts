import { Component, OnInit, OnDestroy } from '@angular/core';
import { YahooService } from 'src/shared/yahoo.service';
import { Observable, of, BehaviorSubject, Subject } from 'rxjs';
import { first, map, take, tap, takeWhile, takeUntil } from 'rxjs/operators';
import { RxjsUtilityService } from 'src/shared/rxjs-utility/rxjs.utility.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.scss'],
  providers: []
})
export class InvestmentsComponent implements OnInit, OnDestroy {

  constructor(private yahooService: YahooService,
    private rxjsUtilityService: RxjsUtilityService,
    private route: ActivatedRoute) { }
  yahooSample12: any;
  resultParam;
  incrementNumber: number = 1;
unsubsribe = new Subject();
  ngOnInit(): void {
  this.yahooSample12 =  of(this.route.snapshot.data.result);
  //this.yahooSample12 = this.yahooService.getYahooSampleInfo();
 // this.yahooService.getYahooSampleInfo(); // bad
  this.assignObservable();
  this.assignObservable();
  this.reacObservable();
  this.assignObservable();
  this.assignObservable();
  this.assignObservable();
  this.reacObservable();
  this.assignObservable();
  this.reacObservable();
  this.reacObservable();
  this.reacObservable();
  this.reacObservable();
  this.reacObservable();
  this.reacObservable();
  this.reacObservable();

  this.assignObservable();
  this.reacObservable();

  this.assignObservable();
  this.completeObservable();
    this.reacObservable(); 
    this.reacObservable(); 

    this.reacObservable(); 
    this.reacObservable(); 


  }

  reacObservable(): void {

  //  this.rxjsUtilityService.sampleSubject.pipe(
  //    //first(),
  //    //take(5),
  //      takeWhile(y => y < 5, true),
  //    // takeUntil(this.unsubsribe),
  //     tap(x => this.resultParam =   x)
  //   ).subscribe();
  this.rxjsUtilityService.sampleSubject.subscribe(x => console.log(x))
  }

  assignObservable(): void {
    this.incrementNumber = this.incrementNumber+1;
    this.rxjsUtilityService.updateSampleSubject(this.incrementNumber);
  }

  completeObservable(): void {
    this.rxjsUtilityService.completeSubject();
  }

  ngOnDestroy() {
    this.unsubsribe.unsubscribe();
  }

}
