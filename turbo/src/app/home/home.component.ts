import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  success: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    // show success message on registration
    if (this.route.snapshot.queryParams['registered']) {
      this.success = 'Registration successful';
    }
 
  }

}
