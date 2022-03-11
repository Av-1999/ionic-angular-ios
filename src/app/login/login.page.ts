import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  isopen = false; // boolean banner neogov
  signin: any = {
    email: '',
    password: ''
  };
  signup: any = {
    name: '',
    surname: '',
    email: '',
    password: ''
  };
  signupValidation: any = {
    name: '',
    surname: '',
    email: '',
    password: ''
  };
  signinValidation: any = {
    email: '',
    password: ''
  };
  constructor(
    private storage: Storage,
    private router: Router,
    private databaseService: DatabaseService
  ) {
    this.init();
  }

  init() {
    this.storage.create();
  }

  isLoginBannerOpen() {
    this.isopen = !this.isopen;
  };

  async signupSubmit() {
    this.signupValidation.name = '';
    this.signupValidation.surname = '';
    this.signupValidation.email = '';
    this.signupValidation.password = '';

    if (this.signup.name === '') {
      this.signupValidation.name = 'name is not valid';
    }
    if (this.signup.surname === '') {
      this.signupValidation.surname = 'surname is not valid';
    }
    if (this.signup.email === '') {
      this.signupValidation.email = 'email is not valid';
    }
    if (this.signup.password === '') {
      this.signupValidation.password = 'password is not valid';
    }
    if (this.signup.name !== '' && this.signup.surname !== '' && this.signup.email !== '' && this.signup.password !== '') {
      if (this.databaseService.users.find(e => e.email === this.signup.email)) {
        this.signupValidation.email = 'email already in use';
      } else {
        await this.storage.set('firstStart', true);
        await this.databaseService.users.push({ ...this.signup, id: 13, anonymous: false, progress: 0, });
        await this.storage.set('email', this.signup.email);
        this.router.navigate(['/known-page']);
      }
    }
  }

  async signinSubmit() {
    this.signinValidation.email = '';
    this.signinValidation.password = '';

    if (this.signin.email === '') {
      this.signinValidation.email = 'email is not valid';
    }
    if (this.signin.password === '') {
      this.signinValidation.password = 'password is not valid';
    }
    if (this.signin.email !== '' && this.signin.password !== '') {
      // auth here
      const user = this.databaseService.users.find(e => e.email === this.signin.email);
      if (user) {
        if (user.password === this.signin.password) {
          await this.storage.set('token', 'example');
          await this.storage.set('email', user.email);
          this.router.navigate(['/tabs/home']);
        } else {
          this.signinValidation.password = 'wrong password';
        }
      } else {
        this.signinValidation.email = 'there no one width this email';
      }
    }


  }




  ngOnInit() {
    console.log('login');
    this.isopen = true;
  };







  focusEmail(name: any) {
    document.getElementById(name).style.border = 'solid 2px goldenrod';
  };

  unFocusEmail(name: any) {
    document.getElementById(name).style.border = 'solid 1px gray';
  };



}
