import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {ActivePatient} from '../../model/active-patient.model';
import {PatientService} from '../../service/patient.service';
import {IcuService} from '../../service/icu.service';
import {IcuStateParameter} from '../../model/icu-state-parameter.model';
import {IcuPatient} from '../../model/icu-patient.model';

@Component({
  selector: 'app-patient-icu-state-list-page',
  templateUrl: './patient-icu-state-list-page.component.html',
  styleUrls: ['./patient-icu-state-list-page.component.scss']
})
export class PatientIcuStateListPageComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('table') table: MatTable<any>;
  displayedColumns: string[] = ['id', 'nameEn', 'contact', 'dob', 'bloodGroup', 'height', 'weight', 'action'];

  dataSource: MatTableDataSource<IcuPatient>;
  constructor(
      private patientService: PatientService,
      private icuService: IcuService,
  ) { }

  ngOnInit(): void {
    this.getPatientIcuStateHistory();
  }

  // return list
  getPatientIcuStateHistory(){
    this.patientService.getAllPateintState().subscribe(res=>{
      this.dataSource = res;
    })
  }

  edit(uuid: any) {

  }
}
