import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormLoginComponent } from './reactive-form-login/reactive-form-login.component';
import { AutocompleteComponent } from './reactive-form-login/autocomplete/autocomplete.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { DynamicReactFormComponent } from './dynamic-react-form/dynamic-react-form.component';
import { MyPRacticeComponent } from './my-practice/my-practice.component';
import { LoginComponent } from './login/login.component';
import { InvestmentModule } from './Investments/investments.module';
import { AuthGuarder } from 'src/shared/Gaurds/canActive-guard ';


const routes: Routes = [
  {path: 'investment', loadChildren: 'src/app/Investments/investments.module#InvestmentModule'},
  { path: 'reactive-form-login',
   component: ReactiveFormLoginComponent,
    canActivate: [AuthGuarder]},  
  { path: 'template-driven', component: TemplateDrivenFormComponent},
  { path: 'autocomplete', component: AutocompleteComponent},
  { path: 'my-practice', component:  MyPRacticeComponent},
  {path: 'dynamic-reactive-form', component: DynamicReactFormComponent,
  canActivate: [AuthGuarder]},
  {path: 'login', 
  canDeactivate: [AuthGuarder],
  component: LoginComponent},
  {path: '**', redirectTo: 'login'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
