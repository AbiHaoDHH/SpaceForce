/* tslint:disable: ordered-imports*/
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

/* Modules */
import {AppCommonModule} from '@common/app-common.module';
import {NavigationModule} from '@modules/navigation/navigation.module';

/* Components */
import * as utilityComponents from './components';

/* Containers */
import * as utilityContainers from './containers';

/* Guards */
import * as utilityGuards from './guards';

/* Services */
import * as utilityServices from './services';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
    ],
    providers: [...utilityServices.services, ...utilityGuards.guards],
    declarations: [...utilityContainers.containers, ...utilityComponents.components],
    exports: [...utilityContainers.containers, ...utilityComponents.components],
})
export class UtilityModule {
}
