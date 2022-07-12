/* tslint:disable: ordered-imports*/
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import * as authServices from '@modules/auth/services';
import {IconsModule} from '@modules/icons/icons.module';

/* Third Party */
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

/* Components */
import * as appCommonComponents from './components';
/* Containers */
import * as appCommonContainers from './containers';

/* Guards */
import * as appCommonGuards from './guards';

/* Services */
import * as appCommonServices from './services';

const thirdParty = [IconsModule, NgbModule];

@NgModule({
    imports: [CommonModule, RouterModule, ...thirdParty],
    providers: [...appCommonServices.services, ...authServices.services, ...appCommonGuards.guards],
    declarations: [...appCommonContainers.containers, ...appCommonComponents.components],
    exports: [...appCommonContainers.containers, ...appCommonComponents.components, ...thirdParty],
})
export class AppCommonModule {
}
