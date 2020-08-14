import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import { UserComponent } from './user/user.component';
import { ProfilePicComponent } from './profile-pic/profile-pic.component';
import { CompanyModule } from '../company/company.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DashboardComponent, EmployeeComponent, UserComponent, ProfilePicComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CompanyModule,
    ReactiveFormsModule,
  ]
})
export class DashboardModule { }
