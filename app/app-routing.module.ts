import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssesmentTestComponent } from './assesment-test/assesment-test.component';

import { CampanyComponent } from './campany/campany.component';
import {TestComponent} from './test/test.component';
import { CandidateComponent } from './candidate/candidate.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AssesmentComponent } from './assesment/assesment.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  {path: 'assesment_test',component:AssesmentTestComponent},
  { path: 'candidate', component:CandidateComponent},
  { path: 'campany', component:CampanyComponent},
  {path: 'test', component:TestComponent},
  {path:'assesment', component:AssesmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
