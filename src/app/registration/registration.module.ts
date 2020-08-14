import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationRoutingModule } from './registration-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    ReactiveFormsModule
  ]
})
export class RegistrationModule { }
