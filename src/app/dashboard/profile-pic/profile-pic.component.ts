import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-pic',
  templateUrl: './profile-pic.component.html',
  styleUrls: ['./profile-pic.component.css']
})
export class ProfilePicComponent implements OnInit {

  registrationEdit: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) { }

  public Username;
  public Password;
  ngOnInit() {
    this.registrationEdit = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })

    this.Username = localStorage.getItem("Username");
    this.Password = localStorage.getItem("Password");
    this.registrationEdit.controls.username.setValue(this.Username);
    this.registrationEdit.controls.password.setValue(this.Password);
  }

  registrationEditSave() {
    if(this.registrationEdit.valid){
      console.log("this.registrationEdit", this.registrationEdit.value);
      localStorage.setItem("Username", this.registrationEdit.controls.username.value);
      localStorage.setItem("Password", this.registrationEdit.controls.password.value);

      this.router.navigate(['/login']);

    }
  }
}
