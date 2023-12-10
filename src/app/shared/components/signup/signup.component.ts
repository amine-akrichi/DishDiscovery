import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
signupForm!:FormGroup;
constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstname : ["", [Validators.required, Validators.minLength(3)]],
      lastname :  ["", [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.required, Validators.email]],
      username: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.minLength(6)]], 
    },
    );
  }
}
