import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {ActivePatient} from '../../model/active-patient.model';
import {PatientService} from '../../service/patient.service';
import {IcuService} from '../../service/icu.service';

@Component({
  selector: 'app-patient-state-history-list-page',
  templateUrl: './patient-state-history-list-page.component.html',
  styleUrls: ['./patient-state-history-list-page.component.scss']
})
export class PatientStateHistoryListPageComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('table') table: MatTable<any>;
  displayedColumns: string[] = ['id', 'nameEn', 'contact', 'dob', 'bloodGroup', 'height', 'weight', 'action'];

  dataSource: MatTableDataSource<ActivePatient>;
  private totalActivePatients: number;
  constructor(
      private patientService: PatientService,
      private icuService: IcuService,
  ) { }

  ngOnInit(): void {
    this.getPatientStateHistory();
  }

  // return list
  getPatientStateHistory(){
    this.patientService.getAllPateintState().subscribe(res=>{
      this.dataSource = res;
    })
  }

  edit(uuid: any) {

  }
}
