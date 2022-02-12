import { Component, OnInit } from '@angular/core';
import {ActivePatient} from '../../model/active-patient.model';
import {PatientService} from '../../service/patient.service';
import {ActivatedRoute} from '@angular/router';
import {IcuStateParameter} from '../../model/icu-state-parameter.model';
import {IcuService} from '../../service/icu.service';

@Component({
  selector: 'app-icu-state-details',
  templateUrl: './icu-state-details.component.html',
  styleUrls: ['./icu-state-details.component.scss']
})
export class IcuStateDetailsComponent implements OnInit {

  pid = this.route.snapshot.params['id'];
  model: IcuStateParameter = new IcuStateParameter();
  constructor(
      private patientService : PatientService,
      private icuService : IcuService,
      private route: ActivatedRoute
  ) {  }

  ngOnInit(): void {
    this.getIcuStateDetails(this.pid)
  }

  getIcuStateDetails(pid){
    this.icuService.getIcuStateDetails(pid).subscribe(res=>{
      this.model = res;
      console.log(this.model)
    })
  }

  gotoBack() {
    window.history.back();
  }
}
