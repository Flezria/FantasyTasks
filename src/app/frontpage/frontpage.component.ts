import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {

  uid: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.uid = this.authService.currentUserUID;
  }

  logout() {
    this.authService.logout();
  }

}
