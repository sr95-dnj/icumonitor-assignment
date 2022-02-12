import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {ActivePatient} from '../../model/active-patient.model';
import {PatientService} from '../../service/patient.service';
import {IcuService} from '../../service/icu.service';
import {IcuStateParameter} from '../../model/icu-state-parameter.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-all-icu-state',
  templateUrl: './all-icu-state.component.html',
  styleUrls: ['./all-icu-state.component.scss']
})
export class AllIcuStateComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('table') table: MatTable<any>;
  displayedColumns: string[] = ['id', 'nameEn', 'contact', 'dob', 'bloodGroup', 'action'];

  dataSource: MatTableDataSource<IcuStateParameter>;
  private totalActivePatients: number;
  constructor(
      private patientService: PatientService,
      private icuService: IcuService,
      private router: Router,
  ) { }

  ngOnInit(): void {
    this.getAllIcuState();
  }

  // return list
  getAllIcuState(){
    this.icuService.getAllIcuState().subscribe(res=>{
      this.dataSource = res;
    })
  }

  edit(uuid: any) {

  }

  gotoDetails(id){
    this.router.navigate(['/icu-state-details/' + id])
  }
}
