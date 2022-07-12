/* tslint:disable: ordered-imports*/
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SBRouteData} from '@modules/navigation/models';

/* Containers */
import * as tablesContainers from './containers';

/* Guards */

/* Module */
import {TablesModule} from './tables.module';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        component: tablesContainers.TablesComponent,
        data: {
            title: 'Tables - SB Admin Angular',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Tables',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
];

@NgModule({
    imports: [TablesModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class TablesRoutingModule {
}
