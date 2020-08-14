import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  registration: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.registration = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required]),
    })

  }

  registrationSave() {
    if(this.registration.valid){
      console.log("this.registration", this.registration.value);
      localStorage.setItem("Username", this.registration.controls.username.value);
      localStorage.setItem("Password", this.registration.controls.password.value);

      this.router.navigate(['/login']);

    }
  }

}
