import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InitialInvestmentComponent } from './initial-investment/initial-investment.component';
import { PassiveInvestmentComponent } from './passive-investment/passive-investment.component';
import { InvestmentsComponent } from './investments/investments.component';
import { AuthGuarder } from 'src/shared/guards/canActivate.guards';


const routes: Routes = [
 { path: 'initial-investment',  resolve: { result: AuthGuarder}, component:InitialInvestmentComponent },
 { path: 'passive-investment', component: PassiveInvestmentComponent},
 { path: '', redirectTo:'', pathMatch:'full', 
 resolve: { result: AuthGuarder},
 component: InvestmentsComponent}
];

@NgModule({
  imports: [
      CommonModule,
      RouterModule.forChild(routes),

    ],
  exports: [RouterModule]
})
export class InvestmentRoutingModule { }
