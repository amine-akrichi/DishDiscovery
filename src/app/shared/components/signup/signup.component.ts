import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
signupForm!:FormGroup;
constructor(private formBuilder: FormBuilder, private _authService:AuthService, private _router: Router) {}

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

  signup() {
    console.log(this.signupForm.value);
    this._authService.signup(this.signupForm.value).subscribe(
      res => {
        console.log(res);
        sessionStorage.setItem('token', res.token);
        sessionStorage.setItem('username', this.signupForm.value.username);
        this._router.navigate(['/home']);
        
      },
      err => console.log(err)
    )
  }
}
