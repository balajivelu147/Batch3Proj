import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormLoginComponent } from './reactive-form-login/reactive-form-login.component';
import { AutocompleteComponent } from './reactive-form-login/autocomplete/autocomplete.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { DynamicReactFormComponent } from './dynamic-react-form/dynamic-react-form.component';
import { LoginComponent } from './login/login.component';
import { InvestmentModule } from './Investments/investments.module';


const routes: Routes = [
  {path: 'investment', loadChildren: 'src/app/Investments/investments.module#InvestmentModule'},
  { path: 'reactive-form-login', component: ReactiveFormLoginComponent}, //kebab casing
  { path: 'template-driven', component: TemplateDrivenFormComponent},
  { path: 'autocomplete', component: AutocompleteComponent},
  {path: 'dynamic-reactive-form', component: DynamicReactFormComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: 'login'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
