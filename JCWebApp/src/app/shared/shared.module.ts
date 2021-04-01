import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { environment } from '@env/environment';
import { MaterialModule } from './material.module';

export const MY_FORMATS = {
    parse: {
        dateInput: 'DD/MM/YYYY',
    },
    display: {
        dateInput: 'DD/MM/YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'DD/MM/YYYY',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
    ],
    declarations: [
    ],
    exports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        MaterialModule,
        ReactiveFormsModule,
        RouterModule,
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders<SharedModule> {
        return {
            ngModule: SharedModule,
        };
    }
}