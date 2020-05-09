import { NgModule } from '@angular/core';
import { InvestmentRoutingModule } from './investment-routing.module';
import { CommonModule } from '@angular/common';
import { InvestmentsComponent } from './investments/investments.component';

@NgModule(
    {
        imports: [
            CommonModule,
            InvestmentRoutingModule
        ],
        declarations: [InvestmentsComponent],
        exports: []
    }
)
export class InvestmentModule {}