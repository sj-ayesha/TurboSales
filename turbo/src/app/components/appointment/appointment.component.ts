import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

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
    this.submitted = true;

    // stop the process here if form is invalid
    if (this.contactForm.invalid) {
      console.log('invalid')
      this.showMsg = false;
      return;
    }
    else {
      this.showMsg = true;
      this.contactForm.reset();
      this.submitted = false;
    }
  }


}
