import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../_services';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  appTitle: string = 'Turbo';

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
}

  ngOnInit() {
    var myNav = document.getElementById("myNavbar");
    var menu = myNav.getElementsByClassName("nav-link");
    for (var i = 0; i < menu.length; i++) {
      menu[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
  }

  currentUser: any;


  logout() {
      this.authenticationService.logout();
      this.router.navigate(['/signup']);
  }

}
