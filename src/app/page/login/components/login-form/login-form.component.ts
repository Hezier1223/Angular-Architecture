import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../login.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  validateForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private loginService: LoginService,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  submitForm(): void {
    // for (const i in this.validateForm.controls) {
    //   this.validateForm.controls[i].markAsDirty();
    //   this.validateForm.controls[i].updateValueAndValidity();
    // }
  }


  login() {
    this.loginService.login().subscribe((val) => {
      console.log(val);
      this.authService.isLoggedIn = true;
      this.authService.token = val['data'];
      const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/dashboard';
      this.router.navigate([redirect]).then();
    });
  }

}
