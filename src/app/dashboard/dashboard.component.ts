import {Component, OnInit, ViewChild} from '@angular/core';
import * as Chartist from 'chartist';
import {PatientService} from '../service/patient.service';
import {IcuService} from '../service/icu.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {ActivePatient} from '../model/active-patient.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild('table') table: MatTable<any>;

    activePatientModel: ActivePatient[] = new Array<ActivePatient>();

    dataSource: MatTableDataSource<ActivePatient>;
    totalActivePatientDataSource: MatTableDataSource<ActivePatient>;
    totalActiveIcuPatientDatasource: MatTableDataSource<ActivePatient>;
    totalPatientDataSource: MatTableDataSource<ActivePatient>;
    totalPatientStateHistoryDataSource: MatTableDataSource<ActivePatient>;
    totalIcuPatientDatasource: MatTableDataSource<ActivePatient>;

    displayedColumns: string[] = ['id', 'nameEn', 'contact', 'dob', 'bloodGroup', 'height', 'weight', 'action'];

    totalPatients: number;
    totalActiveIcuPatient: number;
    totalIcuState: number;
    totalIcuPatient: number;
    totalActivePatients: number;
    totalPatientStateHistory: number;
    totalReleaseIcuPatient: number;
    totalReleasePatirnt: number;

  constructor(
      private patientService: PatientService,
      private icuService: IcuService,
      private router : Router,
  ) { }
  startAnimationForLineChart(chart){
      let seq: any, delays: any, durations: any;
      seq = 0;
      delays = 80;
      durations = 500;

      chart.on('draw', function(data) {
        if(data.type === 'line' || data.type === 'area') {
          data.element.animate({
            d: {
              begin: 600,
              dur: 700,
              from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
              to: data.path.clone().stringify(),
              easing: Chartist.Svg.Easing.easeOutQuint
            }
          });
        } else if(data.type === 'point') {
              seq++;
              data.element.animate({
                opacity: {
                  begin: seq * delays,
                  dur: durations,
                  from: 0,
                  to: 1,
                  easing: 'ease'
                }
              });
          }
      });

      seq = 0;
  };
  startAnimationForBarChart(chart){
      let seq2: any, delays2: any, durations2: any;

      seq2 = 0;
      delays2 = 80;
      durations2 = 500;
      chart.on('draw', function(data) {
        if(data.type === 'bar'){
            seq2++;
            data.element.animate({
              opacity: {
                begin: seq2 * delays2,
                dur: durations2,
                from: 0,
                to: 1,
                easing: 'ease'
              }
            });
        }
      });

      seq2 = 0;
  };
  ngOnInit() {
      /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */

      const dataDailySalesChart: any = {
          labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
          series: [
              [12, 17, 7, 17, 23, 18, 38]
          ]
      };

     const optionsDailySalesChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
      }

      var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

      this.startAnimationForLineChart(dailySalesChart);


      /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

      const dataCompletedTasksChart: any = {
          labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
          series: [
              [230, 750, 450, 300, 280, 240, 200, 190]
          ]
      };

     const optionsCompletedTasksChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
      }

      var completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);

      // start animation for the Completed Tasks Chart - Line Chart
      this.startAnimationForLineChart(completedTasksChart);



      /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

      var datawebsiteViewsChart = {
        labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
        series: [
          [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

        ]
      };
      var optionswebsiteViewsChart = {
          axisX: {
              showGrid: false
          },
          low: 0,
          high: 1000,
          chartPadding: { top: 0, right: 5, bottom: 0, left: 0}
      };
      var responsiveOptions: any[] = [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      var websiteViewsChart = new Chartist.Bar('#websiteViewsChart', datawebsiteViewsChart, optionswebsiteViewsChart, responsiveOptions);

      //start animation for the Emails Subscription Chart
      this.startAnimationForBarChart(websiteViewsChart);
      this.getAllApis();
  }

  getAllApis(){
      this.getAllActiveIcuPatient();
      this.getAllIcuPatient();
      this.getAllIcuState();
      this.getAllPatients();
      this.getAllActivePatient();
      this.getAllReleasePatient();
      this.getPatientStateHistory();
      this.getReleaseIcuPatient();
  }

    // return list ///////////
      getAllPatients(){
          this.patientService.getAllPatients().subscribe(res=>{
              this.totalPatients = res.length;
              this.totalPatientDataSource = res;
          })
      }

    // return list
    getAllActivePatient(){
        this.patientService.getAllActivePatient().subscribe(res=>{
            this.totalActivePatients = res.length;
            this.totalActivePatientDataSource = res;
        })
    }

    // return object
    getAllReleasePatient(){
        this.patientService.getReleasePatientHispory().subscribe(res=>{
            this.totalReleasePatirnt = res.length;
        })
    }
    // return list
    getPatientStateHistory(){
        this.patientService.getAllPateintState().subscribe(res=>{
            this.totalPatientStateHistory = res.length;
        })
    }



    // return object
    getAllActiveIcuPatient(){
        this.icuService.getAllActiveIcuPatient().subscribe(res=>{
            console.log("active icu patient",res);
        })
    }

    // return list
    getAllIcuState(){
        this.icuService.getAllIcuState().subscribe(res=>{
            this.totalIcuState = res.length;
            console.log("total Icu State",res);
        })
    }

    // return list //////////
    getAllIcuPatient(){
        this.icuService.getAllIcuPatient().subscribe(res=>{
            this.totalIcuPatient = res.length;
            console.log("total Icu Patient",res);
        })
    }

    // return object
    getReleaseIcuPatient(){
        this.icuService.getReleaseIcuPatient().subscribe(res=>{
            this.totalReleaseIcuPatient = res.length;
            console.log("total Icu Patient",res);
        })
    }

    edit(uuid: any) {
        
    }

    goToPatientsListPage() {
      this.router.navigate(['/all-patient-list'])
    }

    goToActivePatientsListPage() {
        this.router.navigate(['/active-patient-list'])
    }

    goToICUPatientsListPage() {
        this.router.navigate(['/icu-patient-list'])
    }

    goToPatientStateListPage() {
        this.router.navigate(['/patient-state-history'])
    }

    goToICUStateListPage() {
        this.router.navigate(['/all-icu-state'])
    }


}
