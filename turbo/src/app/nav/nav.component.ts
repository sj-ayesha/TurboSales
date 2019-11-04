import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';
import { AuthenticationService } from '../_services';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  appTitle: string = 'Turbo';
  public quantity;
  public cartLength = (localStorage.getItem('quantity'));
  user: SocialUser;
  loggedIn: boolean;
  currentUser: any;
  currentSocialUser: any;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService, private authService: AuthService)
    {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
      this.authenticationService.currentSocialUser.subscribe(x => this.currentSocialUser = x);
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
    document.getElementsByClassName("has-badge")[0].setAttribute("data-count",this.cartLength);
  }

  logout() {
      this.authenticationService.logout();
      this.router.navigate(['/signup']);
  }

  signOut(){
    this.authenticationService.logoutSocial();
  }

  toggleMenu() {
    let menuBox = document.getElementById('myNavbar');
    menuBox.classList.remove('in');
  }
}
