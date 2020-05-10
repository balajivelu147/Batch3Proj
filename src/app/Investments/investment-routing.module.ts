import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InitialInvestmentComponent } from './initial-investment/initial-investment.component';
import { PassiveInvestmentComponent } from './passive-investment/passive-investment.component';
import { InvestmentsComponent } from './investments/investments.component';


const routes: Routes = [
 { path: 'initial-investment', component:InitialInvestmentComponent },
 { path: 'passive-investment', component: PassiveInvestmentComponent},
 { path: '', redirectTo:'', pathMatch:'full', component: InvestmentsComponent}
];

@NgModule({
  imports: [
      CommonModule,
      RouterModule.forChild(routes),

    ],
  exports: [RouterModule]
})
export class InvestmentRoutingModule { }
