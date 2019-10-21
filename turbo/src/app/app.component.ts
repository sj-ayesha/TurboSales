import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AOS } from 'aos';

import { AuthenticationService } from './_services';
import { AotSummaryResolver } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'turbo';

  // ngOnInit() {
  //   AOS.init(); 
  // }
}
