import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-initial-investment',
  templateUrl: './initial-investment.component.html',
  styleUrls: ['./initial-investment.component.scss']
})
export class InitialInvestmentComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  let routeResult =  this.route.snapshot.data.result;
  }


}
