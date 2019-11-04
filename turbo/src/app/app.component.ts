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

  ngOnInit() {
    AOS.init({
      duration: 2000
    }); 
  }
}
