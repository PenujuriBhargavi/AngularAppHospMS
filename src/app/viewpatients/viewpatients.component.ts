import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../Patient';
import { PatientserviceService } from '../patientservice.service';

@Component({
  selector: 'app-viewpatients',
  templateUrl: './viewpatients.component.html',
  styleUrls: ['./viewpatients.component.css']
})
export class ViewpatientsComponent implements OnInit {

  public patients: any = [];
  selectedId: number =0;

  constructor(private patientService: PatientserviceService, private router: Router) { }

  ngOnInit(): void {
    this.patientService.getPatients().subscribe(data => this.patients=data);
  }

  onDelete(patients: Patient) {
    this.selectedId = patients.patient_id;
    if(window.confirm('Are you sure, you want to delete?')) {
      this.patientService.deletePatient(this.selectedId).subscribe(data => {
        this.router.navigate(['/app-viewpatients'])
      })
    }
  }
}
