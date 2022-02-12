import { Component, OnInit } from '@angular/core';
import {ActivePatient} from '../../model/active-patient.model';
import {PatientService} from '../../service/patient.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent implements OnInit {
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
    this.patientService.getPatientDetails(pid).subscribe(res=>{
      this.model = res;
      console.log(this.model)
    })
  }

    gotoBack() {
        window.history.back();
    }
}
