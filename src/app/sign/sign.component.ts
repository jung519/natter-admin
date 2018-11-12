import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SignAuth } from '../../../common/interfaces/user';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html'
})
export class SignComponent implements OnInit {

  private readonly redirect: string;
  sign: SignAuth;

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.redirect = this.route.snapshot.queryParams['redirect'] || '/';
  }

  ngOnInit() {
    this.initInterfaceObject();
    if (!this.auth.isTokenExpired()) this.router.navigate(['/']);
  }

  initInterfaceObject() {
    this.sign = {
      email: '',
      password: '',
      signup_email: '',
      signup_pw: '',
      signup_pw_1: '',
      introduce: ''
    };
  }

  signIn() {
    this.auth.signIn(this.sign)
    .subscribe(() => {
      this.router.navigateByUrl(this.redirect);
    });
  }

  signInWithGoogle() {
    alert('go! google');
  }

}
