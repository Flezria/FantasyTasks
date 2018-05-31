import { ProfileData } from './../models/profiledata.interface';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  profileData: ProfileData;
  signupForm = new FormGroup ({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    charactername: new FormControl('', Validators.required)
  });

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  signup() {
    this.profileData = {
      firstname: this.signupForm.value.firstname,
      lastname: this.signupForm.value.lastname,
      charactername: this.signupForm.value.charactername,
      level: 1,
      stamina: 1,
      knowledge: 1,
      currency: 10,
      items: "none"
    };

    this.authService.signup(this.signupForm.value.email, this.signupForm.value.password, this.profileData);
  }

}
