import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  signinForm!:FormGroup;
  constructor(private formBuilder: FormBuilder, private _authService: AuthService , private _router:Router) {}
  
    ngOnInit() {
      this.signinForm = this.formBuilder.group({
        username: ["", [Validators.required]],
        password: ["", [Validators.required, Validators.minLength(6)]], 
      },
      );
    }

    signin() {
      console.log(this.signinForm.value);
      this._authService.signin(this.signinForm.value).subscribe(
        res => {console.log(res);
        sessionStorage.setItem('token', res.token);
        sessionStorage.setItem('username', this.signinForm.value.username);
        this._router.navigate(['/..']);
      },
        err => console.log(err)
      )
    }
}
