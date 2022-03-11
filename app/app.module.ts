import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { AssesmentComponent } from './assesment/assesment.component';
import { TestComponent } from './test/test.component';
import { AssesmentTestComponent } from './assesment-test/assesment-test.component';
import { CandidateComponent } from './candidate/candidate.component';
import { CampanyComponent } from './campany/campany.component';
import { AddEditCandidateComponent } from './candidate/add-edit-candidate/add-edit-candidate.component';
import { AddEditCampanyComponent } from './campany/add-edit-campany/add-edit-campany.component';
import { AssesmentService } from './Service/assesment.service';
import { CandidateServiceService } from './Service/candidate-service.service';
import { AssesmentAddEditComponent } from './assesment/assesment-add-edit/assesment-add-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    FooterComponent,
    TestComponent,
    AssesmentTestComponent,
    CandidateComponent,
    CampanyComponent,
    AssesmentComponent,
    AddEditCandidateComponent,
    AddEditCampanyComponent,
    AssesmentAddEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CandidateServiceService,AssesmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
