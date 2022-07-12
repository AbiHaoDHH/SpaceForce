/* tslint:disable: ordered-imports*/
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

/* Modules */
import {AppCommonModule} from '@common/app-common.module';
import {NavigationModule} from '@modules/navigation/navigation.module';

/* Components */
import * as errorComponents from './components';

/* Containers */
import * as errorContainers from './containers';

/* Guards */
import * as errorGuards from './guards';

/* Services */
import * as errorServices from './services';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
    ],
    providers: [...errorServices.services, ...errorGuards.guards],
    declarations: [...errorContainers.containers, ...errorComponents.components],
    exports: [...errorContainers.containers, ...errorComponents.components],
})
export class ErrorModule {
}
