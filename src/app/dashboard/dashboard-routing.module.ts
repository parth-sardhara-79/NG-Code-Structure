import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { UserComponent } from './user/user.component';
import { ProfilePicComponent } from './profile-pic/profile-pic.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'employee',
    component: EmployeeComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'profile-pic',
    component: ProfilePicComponent,
  },
  {
    path: '**',
    component: DashboardComponent,
  },

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }
