import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {ActivePatient} from '../../model/active-patient.model';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {PatientService} from '../../service/patient.service';
import {IcuService} from '../../service/icu.service';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-active-patient-list-page',
  templateUrl: './active-patient-list-page.component.html',
  styleUrls: ['./active-patient-list-page.component.scss']
})
export class ActivePatientListPageComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('table') table: MatTable<any>;
  displayedColumns: string[] = ['id', 'nameEn', 'contact', 'dob', 'bloodGroup', 'height', 'weight', 'action'];

  dataSource: MatTableDataSource<ActivePatient>;
  private totalActivePatients: number;
  total: any;
  size: number = 5;
  page: number = 0;
  constructor(
      private patientService: PatientService,
      private icuService: IcuService,
      private router: Router,
  ) {
    this.getAllActivePatient();
  }

  ngOnInit(): void {
  }

  getAllActivePatient(){
    this.patientService.getAllActivePatient().subscribe(res=>{
      this.dataSource = res;
      this.total = res.length;

    })
  }

  edit(uuid: any) {
    
  }

  gotoDetails(id){
    this.router.navigate(['/patient-details/' + id])
  }

  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onChangePage(event: PageEvent) {
    this.size = +event.pageSize; // get the pageSize
    this.page = +event.pageIndex; // get the current page
    this.getAllActivePatient();
  }
}
