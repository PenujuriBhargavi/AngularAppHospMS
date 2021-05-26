import { NgModule } from '@angular/core';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OurdoctorsComponent } from './ourdoctors/ourdoctors.component';
import { PatientloginComponent } from './patientlogin/patientlogin.component';
import { DoctorloginComponent } from './doctorlogin/doctorlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { PatientregisterComponent } from './patientregister/patientregister.component';
import { PatientdashboardComponent } from './patientdashboard/patientdashboard.component';
import { DoctordashboardComponent } from './doctordashboard/doctordashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { BookappointmentComponent } from './bookappointment/bookappointment.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { RegisterdoctorComponent } from './registerdoctor/registerdoctor.component';
import { AddingdoctorComponent } from './addingdoctor/addingdoctor.component';
import { AddingpatientComponent } from './addingpatient/addingpatient.component';
import { ViewdoctorsComponent } from './viewdoctors/viewdoctors.component';
import { ViewpatientsComponent } from './viewpatients/viewpatients.component';
import { HttpClientModule } from '@angular/common/http';
import { EditDoctorComponent } from './edit-doctor/edit-doctor.component';
import { AppointmentHistoryComponent } from './appointment-history/appointment-history.component';
import { ShowAppointmentsComponent } from './show-appointments/show-appointments.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { AppointmentEditComponent } from './appointment-edit/appointment-edit.component';
import { ShowDoctorsComponent } from './show-doctors/show-doctors.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    OurdoctorsComponent,
    PatientloginComponent,
    DoctorloginComponent,
    AdminloginComponent,
    ErrorpageComponent,
    PatientregisterComponent,
    PatientdashboardComponent,
    DoctordashboardComponent,
    AdmindashboardComponent,
    BookappointmentComponent,
    FeedbackComponent,
    RegisterdoctorComponent,
    AddingdoctorComponent,
    AddingpatientComponent,
    ViewdoctorsComponent,
    ViewpatientsComponent,
    EditDoctorComponent,
    AppointmentHistoryComponent,
    ShowAppointmentsComponent,
    PatientEditComponent,
    AppointmentEditComponent,
    ShowDoctorsComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
