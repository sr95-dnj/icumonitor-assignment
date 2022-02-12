import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {ActivePatientListPageComponent} from '../../list-page/active-patient-list-page/active-patient-list-page.component';
import {AllPatientListPageComponent} from '../../list-page/all-patient-list-page/all-patient-list-page.component';
import {PatientIcuStateListPageComponent} from '../../list-page/patient-icu-state-list-page/patient-icu-state-list-page.component';
import {IcuPatientListPageComponent} from '../../list-page/icu-patient-list-page/icu-patient-list-page.component';
import {PatientStateHistoryListPageComponent} from '../../list-page/patient-state-history-list-page/patient-state-history-list-page.component';
import {AllIcuStateComponent} from '../../list-page/all-icu-state/all-icu-state.component';
import {PatientDetailsComponent} from '../../details-page/patient-details/patient-details.component';
import {AdmissionPatientDetailsComponent} from '../../details-page/admission-patient-details/admission-patient-details.component';
import {IcuStateDetailsComponent} from '../../details-page/icu-state-details/icu-state-details.component';
import {IcuPatientDetailsComponent} from '../../details-page/icu-patient-details/icu-patient-details.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'active-patient-list',        component: ActivePatientListPageComponent },
    { path: 'all-patient-list',        component: AllPatientListPageComponent },
    { path: 'icu-patient-list',        component: IcuPatientListPageComponent },
    { path: 'patient-icu-state-list',        component: PatientIcuStateListPageComponent },
    { path: 'patient-state-history',        component: PatientStateHistoryListPageComponent },
    { path: 'all-icu-state',        component: AllIcuStateComponent },
    { path: 'patient-details/:id',        component: PatientDetailsComponent },
    { path: 'admited-patient-details/:id',        component: AdmissionPatientDetailsComponent },
    { path: 'icu-state-details/:id',        component: IcuStateDetailsComponent },
    { path: 'icu-patient-details/:id',        component: IcuPatientDetailsComponent },
];
