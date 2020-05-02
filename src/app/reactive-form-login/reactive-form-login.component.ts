import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-login',
  templateUrl: './reactive-form-login.component.html',
  styleUrls: ['./reactive-form-login.component.scss']
})
export class ReactiveFormLoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'userName': new FormControl('', Validators.required),
      'password': new FormControl('', [Validators.minLength(10),Validators.maxLength(15)])
    });
  }

  get loginVal() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.loginForm.value);

    // alert( JSON.stringify(this.loginForm.value));
  }


}
