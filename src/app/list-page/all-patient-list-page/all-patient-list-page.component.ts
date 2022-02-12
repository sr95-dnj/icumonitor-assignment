import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {ActivePatient} from '../../model/active-patient.model';
import {PatientService} from '../../service/patient.service';
import {IcuService} from '../../service/icu.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-all-patient-list-page',
  templateUrl: './all-patient-list-page.component.html',
  styleUrls: ['./all-patient-list-page.component.scss']
})
export class AllPatientListPageComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('table') table: MatTable<any>;
  displayedColumns: string[] = ['id', 'nameEn', 'contact', 'dob', 'bloodGroup', 'weight', 'action'];

  dataSource: MatTableDataSource<ActivePatient>;
  private totalActivePatients: number;
  constructor(
      private patientService: PatientService,
      private icuService: IcuService,
      private router: Router,
  ) { }

  ngOnInit(): void {
    this.getAllPatients();
  }

  getAllPatients(){
    this.patientService.getAllPatients().subscribe(res=>{
      this.dataSource = res;
    })
  }

  edit(uuid: any) {

  }

  gotoDetails(id){
    this.router.navigate(['/admited-patient-details/' + id])
  }
}
