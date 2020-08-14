import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') form: any;

  public Username;
  public Password;

  model: {};
  constructor(private router: Router) { }

  ngOnInit() {
    this.model = {
      "email": "",
      "password": "",
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this.Username = localStorage.getItem("Username");
      this.Password = localStorage.getItem("Password");

      if (this.form.controls.email.value == this.Username && this.form.controls.password.value == this.Password) {
      // console.log("inside the Rouer:::", this.Username, this.Password)
      this.router.navigate(['/dashboard']);
      }else{
alert("Please enter valid email and password.");
      }
      // console.log("inside the login:::", this.Username, this.Password)
      // console.log("Email ::", this.form.controls.email.value);
      // console.log("Password ::", this.form.controls.password.value);
    }
  }

}
