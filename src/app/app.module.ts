import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormLoginComponent } from './reactive-form-login/reactive-form-login.component';
import { AutocompleteComponent } from './reactive-form-login/autocomplete/autocomplete.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { DynamicReactFormComponent } from './dynamic-react-form/dynamic-react-form.component';
import { PassiveInvestmentComponent } from './Investments/passive-investment/passive-investment.component';
import { InitialInvestmentComponent } from './Investments/initial-investment/initial-investment.component';
import { LossComponent } from './FInancials/loss/loss.component';
import { ProfitComponent } from './FInancials/profit/profit.component';
import { MarginComponent } from './FInancials/margin/margin.component';
import { NavMenuComponent } from './layouts/nav-menu/nav-menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { scrollToOptionDirective } from 'src/shared/directives/scrollToOption.directive';
import { CommonModule } from '@angular/common';
import { ExponentialStrengthPipe } from 'src/shared/pipes/exponential.pipe';
import { I1, I2 } from 'src/shared/interceptors/interceptors';


import { MyPRacticeComponent } from './my-practice/my-practice.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // MatSelectModule,
    TemplateDrivenFormComponent,
    ReactiveFormLoginComponent,
    AutocompleteComponent,
    DynamicReactFormComponent,
    NavMenuComponent,
    scrollToOptionDirective,
    ExponentialStrengthPipe,
    MyPRacticeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatOptionModule,
  MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    AppRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    CommonModule
    
  ],
  exports: [],
   providers: [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: I1,
        multi: true
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: I2,
        multi: true
    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
