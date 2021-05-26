import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { DoctorloginComponent } from './doctorlogin/doctorlogin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OurdoctorsComponent } from './ourdoctors/ourdoctors.component';
import { PatientloginComponent } from './patientlogin/patientlogin.component';
import{ErrorpageComponent } from './errorpage/errorpage.component';
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
import { EditDoctorComponent } from './edit-doctor/edit-doctor.component';
import { AppointmentHistoryComponent } from './appointment-history/appointment-history.component';
import { ShowAppointmentsComponent } from './show-appointments/show-appointments.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { AppointmentEditComponent } from './appointment-edit/appointment-edit.component';
import { ShowDoctorsComponent } from './show-doctors/show-doctors.component';



const routes: Routes = [
   { path: '',   redirectTo: '/home', pathMatch: 'full' },
   { path: 'home', component: HomeComponent },
  
  { path: 'about', component: AboutComponent },
  { path: 'ourdoctors', component: OurdoctorsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'patientlogin', component: PatientloginComponent },
  { path: 'doctorlogin', component: DoctorloginComponent},
  { path: 'adminlogin', component: AdminloginComponent },
  { path: 'patientregister', component: PatientregisterComponent },
  { path: 'patientdashboard', component: PatientdashboardComponent},
  { path: 'doctordashboard', component: DoctordashboardComponent},
  { path: 'admindashboard', component: AdmindashboardComponent },
  { path: 'bookappointment', component: BookappointmentComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'registerdoctor', component: RegisterdoctorComponent },
  { path: 'addingdoctor', component: AddingdoctorComponent },
  { path: 'addingpatient', component: AddingpatientComponent },
  { path: 'viewdoctors', component: ViewdoctorsComponent },
  { path: 'app-viewpatients', component: ViewpatientsComponent},
  { path: 'edit-doctor/:doctor_id', component: EditDoctorComponent},
  { path: 'appointment-history', component: AppointmentHistoryComponent},
  { path: 'show-appointments', component: ShowAppointmentsComponent},
  { path: 'patient-edit/:patient_id', component: PatientEditComponent},
  { path: 'appointment-edit/:booking_id', component: AppointmentEditComponent},
  { path: 'show-doctors', component: ShowDoctorsComponent},
  

  { path: '**', component: ErrorpageComponent}
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
