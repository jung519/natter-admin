import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }


  signOut() {
    if (confirm('로그아웃 하냐?')) {
      localStorage.removeItem('access_token');
      this.router.navigate(['/']);
    }
  }

}
