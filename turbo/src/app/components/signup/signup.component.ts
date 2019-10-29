import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthService, FacebookLoginProvider, SocialUser, GoogleLoginProvider } from 'angularx-social-login';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../../_helpers/must-match.validator';

import { UserService, AuthenticationService } from '../../_services';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;
  error: string;

  namePattern = "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$";


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService, private authService: AuthService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }


  ngOnInit() {
    this.stylePage();

    this.registerForm = this.formBuilder.group({      
      firstName: ['', [Validators.required, Validators.pattern(this.namePattern)]],
      lastName: ['', [Validators.required, Validators.pattern(this.namePattern)]],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      console.log('invalid');
      return;
    }
    this.userService.register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          // if (this.authenticationService.currentUserValue) {
          //   // this.router.navigate(['/']);
          //   this.router.navigate(['/'], { queryParams: { registered: true } });
          // }
          this.router.navigate(['/'], { queryParams: { registered: true } });
        },
        error => {
          this.error = error;
          this.loading = false;
        });
  }

  stylePage() {
    const ghostButtons = document.querySelectorAll(".button__ghost");
    
    ghostButtons.forEach(function(button) {
      const formRightWrapper = document.querySelector(".form-wrapper__right");
      const formRightSignIn = document.querySelector(
        ".form-wrapper__right--sign-in"
      );
      const formRightSignUp = document.querySelector(
        ".form-wrapper__right--sign-up"
      );
      const formLeftSignIn = document.querySelector(
        ".form-wrapper__left--sign-in"
      );
      const formLeftSignUp = document.querySelector(
        ".form-wrapper__left--sign-up"
      );
      button.addEventListener("click", function() {
        formRightSignIn.classList.toggle("inactive");
        formRightSignUp.classList.toggle("inactive");
        formLeftSignIn.classList.toggle("inactive");
        formLeftSignUp.classList.toggle("inactive");
        formRightWrapper.classList.toggle("is-flipped");
      });
    });
    
  }

  signInWithFB(): void {
    this.authenticationService.loginSocial();
    this.router.navigate(['/']);
    document.getElementById('signUpIn').style.display = "none";
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signInWithGoogle(): void {
    this.authenticationService.loginSocial();
    this.router.navigate(['/']);
    document.getElementById('signUpIn').style.display = "none";
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
}

