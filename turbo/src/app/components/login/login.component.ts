import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthService, FacebookLoginProvider, SocialUser, GoogleLoginProvider } from 'angularx-social-login';

import { AuthenticationService } from '../../_services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error: string;
  user: SocialUser;
  loggedIn: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService, private authService: AuthService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    console.log('submitted')

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      console.log('invalid')
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
          document.getElementById('signUpIn').style.display = "none";
        },
        error => {
          this.error = error;
          this.loading = false;
        });
  }

  signInWithFB(): void {
    this.authenticationService.loginSocial();
    document.getElementById('signUpIn').style.display = "none";
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signInWithGoogle(): void {
    this.authenticationService.loginSocial();
    document.getElementById('signUpIn').style.display = "none";
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

}
