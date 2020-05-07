import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // MatSelectModule,
    TemplateDrivenFormComponent,
    ReactiveFormLoginComponent,
    AutocompleteComponent,
    DynamicReactFormComponent
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
