import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {ActivePatient} from '../../model/active-patient.model';
import {PatientService} from '../../service/patient.service';
import {IcuService} from '../../service/icu.service';
import {IcuPatient} from '../../model/icu-patient.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-icu-patient-list-page',
  templateUrl: './icu-patient-list-page.component.html',
  styleUrls: ['./icu-patient-list-page.component.scss']
})
export class IcuPatientListPageComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('table') table: MatTable<any>;
  displayedColumns: string[] = ['id', 'nameEn', 'contact', 'dob', 'bloodGroup', 'action'];

  dataSource: MatTableDataSource<IcuPatient>;
  private totalIcuPateint: number;
  constructor(
      private patientService: PatientService,
      private icuService: IcuService,
      private router: Router,
  ) { }

  ngOnInit(): void {
    this.getAllIcuPatient();
  }

  // return list
  getAllIcuPatient(){
    this.icuService.getAllIcuPatient().subscribe(res=>{
      this.dataSource = res;
    })
  }

  edit(uuid: any) {

  }

  gotoDetails(id){
    this.router.navigate(['/icu-patient-details/' + id])
  }
}
