import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  signinForm!:FormGroup;
  constructor(private formBuilder: FormBuilder) {}
  
    ngOnInit() {
      this.signinForm = this.formBuilder.group({
        username: ["", [Validators.required]],
        password: ["", [Validators.required, Validators.minLength(6)]], 
      },
      );
    }
}
