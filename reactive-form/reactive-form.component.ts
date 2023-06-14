import { Component, OnInit } from '@angular/core';
import { AsyncValidatorFn, FormArray, FormControl, FormGroup, NG_ASYNC_VALIDATORS, ValidationErrors, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  genders = ['male', 'female'];
  signUpForm!: FormGroup;
  restrictedNames = ['karthik', 'karthi']    // for custom validation
  constructor() { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      // username: new FormControl('',[Validators.required]),
      // email: new FormControl('',[Validators.required,Validators.email]),
      // gender: new FormControl('')

      // to create form group, we have use formGroup inside the another fromGroup 
      userData: new FormGroup({
        username: new FormControl('', [Validators.required, this.isRestrictedNames.bind(this)]),
        email: new FormControl('', {
          validators: [Validators.required, Validators.email],
          // asyncValidators: [this.isRestrictedEmails],
          updateOn: 'blur',
        }),
      })
      ,
      gender: new FormControl(''),
      hobbies: new FormArray([])    //FormArray means list of FormControls
    })
  }
  onSubmit() {
    console.log(this.signUpForm)
  }
  onAddHobby() {
    const control = new FormControl(null, [Validators.required]); //FormArray is used to add multiple form fields
    (<FormArray>this.signUpForm.get('hobbies')).push(control);  //here FormArray is used to array conversion
  }
  get hobbyControls() {
    return (<FormArray>this.signUpForm.get('hobbies')).controls
  }
  isRestrictedNames(control: FormControl): { [s: string]: boolean } { //this is custom validation with syncronous data
    if (this.restrictedNames.includes(control.value)) {
      return { nameIsRestricted: true }
    }
    return null;
  }
  // isRestrictedEmails(control: FormControl): ValidationErrors | null{ //this is custom validation with asynchronous data i.e., values from server
  //   let promise = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (control.value === 'test@gmail.com') {
  //         resolve({ emailIsRestricted: true });
  //       } else {
  //         resolve(null)
  //       }
  //     }, 2000)
  //   });
  //   return promise;
  // }
}
