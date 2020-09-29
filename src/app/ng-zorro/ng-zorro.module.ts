// Imports
import { NgModule } from '@angular/core';

// Ng Zorro
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';

// Component Modules
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';

registerLocaleData(es);

const NG_ZORRO_COMPONENTS = [
    NzMenuModule,
    NzLayoutModule,
    NzButtonModule,
    NzIconModule,
    NzInputModule,
    NzFormModule,
    NzDividerModule,
    NzDrawerModule,
    NzSelectModule,
    NzTabsModule,
    NzCollapseModule,
    NzTableModule,
    NzInputNumberModule,
    NzModalModule,
    NzBadgeModule,
    NzCardModule,
    NzDatePickerModule,
    NzCalendarModule
];

@NgModule({
    imports: [...NG_ZORRO_COMPONENTS],
    exports: [...NG_ZORRO_COMPONENTS],
    providers: [{provide: NZ_I18N, useValue: es_ES }]
})
export class NgZorroModule{}
