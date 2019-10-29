import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<any>;
    private currentUserSocialSubject: BehaviorSubject<any>;
    public currentUser: Observable<any>;
    public currentSocialUser: Observable<any>;
    user: SocialUser;
    loggedIn: boolean;
    returnUrl: string;

    constructor(private http: HttpClient, private authService: AuthService, private route: ActivatedRoute, private router: Router) {
        this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();

        this.currentUserSocialSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentSocialUser')));
        this.currentSocialUser = this.currentUserSocialSubject.asObservable();
    }

    public get currentUserValue() {
        return this.currentUserSubject.value || this.currentUserSocialSubject.value;
    }

    login(username, password) {
        return this.http.post<any>(`/users/authenticate`, { username, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    loginSocial() {
        this.authService.authState.subscribe((user) => {
            this.user = user;
            this.loggedIn = (user != null);
            if (user != null){
                localStorage.setItem('currentSocialUser', JSON.stringify(user));
                this.currentUserSocialSubject.next(user);
                this.router.navigateByUrl('/');
                return user;
            }
            else {
                this.router.navigateByUrl('/login');
            }

            // console.log(this.user);
          });
    }

    logoutSocial(){
        this.authService.signOut();
        localStorage.removeItem('currentSocialUser');
        this.currentUserSocialSubject.next(null);
        if (localStorage.getItem("currentUser") === null) {
            document.getElementById('signUpIn').style.display = "block";
        }
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        document.getElementById('signUpIn').style.display = "block";
    }
}