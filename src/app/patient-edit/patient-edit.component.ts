import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../Patient';
import { PatientserviceService } from '../patientservice.service';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css']
})
export class PatientEditComponent implements OnInit {

  public patient_id: any = this.aroute.snapshot.params['patient_id'];
  public patientData: any = {};
  public selectedId: any;
  constructor(public patientAPI: PatientserviceService,
    public aroute:ActivatedRoute,
    public router: Router) { }

  ngOnInit(): void {
    this.patientAPI.getPatient(this.patient_id).subscribe((data: any) =>{
      if(data && data.length){
      this.patientData = data[0];
      }
    })

    this.aroute.paramMap.subscribe(params => {
      this.selectedId = params.get('id');
    });
  }

  updatePatient() {
    this.patientAPI.updatePatient(this.patientData).subscribe(data =>
      this.router.navigate(['/app-viewpatients']));
  }
  onClick(patient: any){
    this.router.navigate(['/patient-edit',patient.patient_id]);
  }

  gotoPatients(patient: Patient) {
    this.router.navigate(['/app-viewpatients']);
  }

}
