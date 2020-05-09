import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormLoginComponent } from './reactive-form-login/reactive-form-login.component';
import { AutocompleteComponent } from './reactive-form-login/autocomplete/autocomplete.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { DynamicReactFormComponent } from './dynamic-react-form/dynamic-react-form.component';
import { LoginComponent } from './login/login.component';
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
