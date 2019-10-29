import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  submitted = false;
  error: string;
  showMsg: boolean = false;

  namePattern = "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$";

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern(this.namePattern)]],
      lastName: ['', [Validators.required, Validators.pattern(this.namePattern)]],
      emailAdd: ['', Validators.required],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  get f() { return this.contactForm.controls; }

  onSubmit() {

    this.addValidators(this.contactForm);
    console.log(this.contactForm);

    // stop the process here if form is invalid
    if (this.contactForm.invalid) {
      console.log('invalid')
      this.showMsg = false;
      this.submitted = false;
      return;
    }
    else {
      this.showMsg = true;
      this.submitted = true;
      // this.contactForm.markAsPristine();
      // this.contactForm.markAsUntouched();
      // this.contactForm.updateValueAndValidity();
      this.contactForm.reset();
      this.removeValidators(this.contactForm);
    }
  }

  public removeValidators(form: FormGroup) {
    for (const key in form.controls) {
      form.get(key).clearValidators();
      form.get(key).updateValueAndValidity();
    }
  }

  public addValidators(form: FormGroup) {
    for (const key in form.controls) {
      form.get(key).setValidators(this.contactForm[key]);
      form.get(key).updateValueAndValidity();
    }
  }

}
