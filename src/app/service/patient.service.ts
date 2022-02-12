import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

const base_url = 'https://icumonitor.edusoftconsultants.com/api/'


@Injectable({
    providedIn: 'root'
})
export class PatientService{

    constructor(private httpClient: HttpClient) {

    }

    getAllActivePatient() {

        const url: string = base_url + 'patient';
        return this.httpClient.get(url).pipe(map((res: any) => {
            return res;
        }));
    }

    getPatientDetails(pid) {

        const url: string = base_url + 'patient/' + pid;
        return this.httpClient.get(url).pipe(map((res: any) => {
            return res;
        }));
    }


    getAllPatients() {

        const url: string = base_url + 'patientadmission';
        return this.httpClient.get(url).pipe(map((res: any) => {
            return res;
        }));
    }

    getAdmitedPatients(pid) {

        const url: string = base_url + 'patientadmission' + '/'+ pid;
        return this.httpClient.get(url).pipe(map((res: any) => {
            return res;
        }));
    }
    getAllPateintState() {

        const url: string = base_url + 'patienticustatehistory';
        return this.httpClient.get(url).pipe(map((res: any) => {
            return res;
        }));
    }

    getReleasePatientHispory() {

        const url: string = base_url + 'releasedicupatients';
        return this.httpClient.get(url).pipe(map((res: any) => {
            return res;
        }));
    }

}
