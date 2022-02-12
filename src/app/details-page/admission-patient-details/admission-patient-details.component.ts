import { Component, OnInit } from '@angular/core';
import {ActivePatient} from '../../model/active-patient.model';
import {PatientService} from '../../service/patient.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-admission-patient-details',
  templateUrl: './admission-patient-details.component.html',
  styleUrls: ['./admission-patient-details.component.scss']
})
export class AdmissionPatientDetailsComponent implements OnInit {

  pid = this.route.snapshot.params['id'];
  model: ActivePatient = new ActivePatient();
  constructor(
      private patientService : PatientService,
      private route: ActivatedRoute
  ) {  }

  ngOnInit(): void {
    this.getAllActivePatient(this.pid)
  }

  getAllActivePatient(pid){
    this.patientService.getAdmitedPatients(pid).subscribe(res=>{
      this.model = res;
      console.log(this.model)
    })
  }

    gotoBack() {
        window.history.back();
    }
}
