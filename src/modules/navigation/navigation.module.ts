/* tslint:disable: ordered-imports*/
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

/* Modules */
import {AppCommonModule} from '@common/app-common.module';

/* Components */
import * as navigationComponents from './components';

/* Containers */
import * as navigationContainers from './containers';

/* Guards */
import * as navigationGuards from './guards';

/* Layouts */
import * as appCommonLayouts from './layouts';

/* Services */
import * as navigationServices from './services';

@NgModule({
    imports: [CommonModule, RouterModule, AppCommonModule],
    providers: [...navigationServices.services, ...navigationGuards.guards],
    declarations: [
        ...navigationContainers.containers,
        ...navigationComponents.components,
        ...appCommonLayouts.layouts,
    ],
    exports: [
        ...navigationContainers.containers,
        ...navigationComponents.components,
        ...appCommonLayouts.layouts,
    ],
})
export class NavigationModule {
}
