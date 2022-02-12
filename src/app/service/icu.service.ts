import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

const base_url = 'https://icumonitor.edusoftconsultants.com/api/'


@Injectable({
    providedIn: 'root'
})
export class IcuService{

    constructor(private httpClient: HttpClient) {

    }

    getAllIcuPatient() {

        const url: string = base_url + 'patienticustatehistory';
        return this.httpClient.get(url).pipe(map((res: any) => {
            return res;
        }));
    }

    getIcuPatientDetails(pid) {

        const url: string = base_url + 'patienticustatehistory/' + pid;
        return this.httpClient.get(url).pipe(map((res: any) => {
            return res;
        }));
    }

    getAllActiveIcuPatient() {

        const url: string = base_url + 'activeicupatients';
        return this.httpClient.get(url).pipe(map((res: any) => {
            return res;
        }));
    }

    getAllIcuState() {

        const url: string = base_url + 'icustateparameter';
        return this.httpClient.get(url).pipe(map((res: any) => {
            return res;
        }));
    }

    getIcuStateDetails(pid) {

        const url: string = base_url + 'icustateparameter/' + pid;
        return this.httpClient.get(url).pipe(map((res: any) => {
            return res;
        }));
    }
    getReleaseIcuPatient() {

        const url: string = base_url + 'releasedicupatients';
        return this.httpClient.get(url).pipe(map((res: any) => {
            return res;
        }));
    }

}
