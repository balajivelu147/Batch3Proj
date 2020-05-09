import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-practice',
  templateUrl: './my-practice.component.html',
  styleUrls: ['./my-practice.component.scss']
})

export class MyPRacticeComponent implements OnInit {

  userForm = new FormGroup(
    {
      name: new FormControl('',[Validators.required, Validators.maxLength(10)]),
      age: new FormControl('', Validators.required)
    }
    
  )   
  constructor() { }

  ngOnInit(): void {
    
  }
  onFormSubmit(): void {
    console.log('Name:' + this.userForm.get('name').value);
  } 

}
