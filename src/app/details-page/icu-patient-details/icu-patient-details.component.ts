import { Component, OnInit } from '@angular/core';
import {IcuStateParameter} from '../../model/icu-state-parameter.model';
import {PatientService} from '../../service/patient.service';
import {IcuService} from '../../service/icu.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IcuPatient} from '../../model/icu-patient.model';

@Component({
  selector: 'app-icu-patient-details',
  templateUrl: './icu-patient-details.component.html',
  styleUrls: ['./icu-patient-details.component.scss']
})
export class IcuPatientDetailsComponent implements OnInit {


  pid = this.route.snapshot.params['id'];
  model: IcuPatient = new IcuPatient();
  constructor(
      private patientService : PatientService,
      private icuService : IcuService,
      private route: ActivatedRoute,
      private router: Router,
  ) {  }

  ngOnInit(): void {
    this.getIcuStateDetails(this.pid)
  }

  getIcuStateDetails(pid){
    this.icuService.getIcuPatientDetails(pid).subscribe(res=>{
      this.model = res;
      console.log(this.model)
    })
  }

  gotoPatientParameter(parameterid: number) {
    this.router.navigate(['/icu-state-details/' + parameterid])
  }

  gotoBack() {
    window.history.back();
  }
}
