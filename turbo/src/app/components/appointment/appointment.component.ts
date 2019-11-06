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

  namePattern = "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$";//Alphabets except special char & num
  emailPattern = "[^@]+@[^\.]+\..+";//must have @ .
  phonePattern = "^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]{8,12}$";//digit contains - + 8 to 12

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern(this.namePattern)]],
      lastName: ['', [Validators.required, Validators.pattern(this.namePattern)]],
      emailAdd: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      phone: ['', [Validators.required, Validators.pattern(this.phonePattern)]],
      message: ['', Validators.required]
    });
  }

  get f() { return this.contactForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
      console.log(this.submitted);
    }
    else {
      this.showMsg = true;
    }

    setTimeout(() => {
      this.showMsg = false;
      this.submitted = false;
      this.contactForm.reset();
    }, 2000);
  }

  close() {
    this.submitted = false;
    console.log(this.submitted);
  }


}
