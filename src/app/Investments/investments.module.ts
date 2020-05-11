import { NgModule } from '@angular/core';
import { InvestmentRoutingModule } from './investment-routing.module';
import { CommonModule } from '@angular/common';
import { InvestmentsComponent } from './investments/investments.component';
import { YahooService } from 'src/shared/yahoo.service';

@NgModule(
    {
        imports: [
            CommonModule,
            InvestmentRoutingModule
        ],
        declarations: [InvestmentsComponent],
        exports: [],
        providers: [YahooService]
    }
)
export class InvestmentModule {}