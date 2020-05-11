import { Component, OnInit } from '@angular/core';
import { YahooService } from 'src/shared/yahoo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.scss'],
  providers: []
})
export class InvestmentsComponent implements OnInit {

  constructor(private yahooService: YahooService) { }
  yahooSample: Observable<any>;

  ngOnInit(): void {
  this.yahooSample = this.yahooService.getYahooSampleInfo();
  this.yahooService.getYahooSampleInfo().subscribe(x => console.log(x)); // bad

  }

}
