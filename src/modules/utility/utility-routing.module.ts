/* tslint:disable: ordered-imports*/
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

/* Containers */
import * as utilityContainers from './containers';

/* Guards */

/* Module */
import {UtilityModule} from './utility.module';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        component: utilityContainers.VersionComponent,
    },
];

@NgModule({
    imports: [UtilityModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class UtilityRoutingModule {
}
