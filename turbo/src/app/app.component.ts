import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

import { AuthenticationService } from './_services';
import { AotSummaryResolver } from '@angular/compiler';
import {NgsRevealConfig} from 'ngx-scrollreveal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NgsRevealConfig]
})
export class AppComponent {
  title = 'turbo';
  // constructor(config: NgsRevealConfig) {
  //   // customize default values of ngx-scrollreveal directives used by this component tree
  //   config.duration = 5000;
  //   config.easing = 'cubic-bezier(0.645, 0.045, 0.355, 1)';
 
  //   //other options here
  // }

  ngOnInit() {
    AOS.init({
      duration: 2000
    }); 
  }
}
