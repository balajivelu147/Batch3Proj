import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FormControl, FormGroup, FormArray, Validators, ValidatorFn } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-dynamic-react-form',
  templateUrl: './dynamic-react-form.component.html',
  styleUrls: ['./dynamic-react-form.component.scss']
})
export class DynamicReactFormComponent implements OnInit {

  privilege: string[] = ['admin', 'customer', 'sales'];
  filteredPrivilegeItem: string[];
  state: FormControl;
  ParentFormGroup: FormGroup;
  loginForm: FormGroup;
  constructor() {

    this.ParentFormGroup = new FormGroup({ /// formGroup is a parent for all this page
      privilegeCtrl: new FormControl(),        /// scope of FormCOntrol is element level
      fieldsForPrivilege: new FormArray([]), /// this we can use to add things dynamically
      NewEMIValue: new FormControl('') 
    })

    this.loginForm = new FormGroup({
      // 'userName': new FormControl('', [Validators.required, this.dynamicValidator()]),
      'userName': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.minLength(10), Validators.maxLength(15)])
    });

    this.state = new FormControl();
    this.filteredPrivilegeItem = this.privilege;

    // for(let a=0; a===5; a++) {
    //   filteredPrivilegeItem
    // }
   // this.parent.fieldsForPrivilege.push(this.loginForm)
  }
  get parent() { return this.ParentFormGroup.controls; };
  get child() { return this.parent.fieldsForPrivilege as FormArray; };

  dynamicValidator(): ValidatorFn  {
    return this.loginForm.get('password').value === this.loginForm.get('passwordConfirm').value
    ? null : null;
  }

  ngOnInit(): void {
    this.state.valueChanges.pipe(
      startWith(''),
      map(stateInput => this.filteredPrivilegeItem = this.privilege.filter(state =>
        state.toLowerCase().indexOf(stateInput.toLowerCase()) !== -1))
    ).subscribe()
  }

  dynamicLoginCreator(value) {
    if (value === 'admin') {
      this.child.clear();
      this.child.push(this.loginForm);
    } else if(value === 'customer')
    {
      this.child.clear();

      // this.child.push( new FormGroup({
      //   'userName': new FormControl('qweqweqwewq', Validators.required),
      //   'password': new FormControl('qweqweweqw', [Validators.minLength(10), Validators.maxLength(15)])
      // }));
    }
    
  }


  onSubmit() {
    console.log(this.ParentFormGroup);
    this.ParentFormGroup.patchValue({'NewEMIValue': '5000'});
    console.log(this.ParentFormGroup);
    this.ParentFormGroup.reset();
    console.log(this.ParentFormGroup.value);
  }

}
