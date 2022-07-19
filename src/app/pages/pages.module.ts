import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { RandomComponent } from './random/random.component';
import { QuotesComponent } from './quotes/quotes.component';
import { PagesRoutingModule } from './pages-routing.module';



@NgModule({
  declarations: [
    RandomComponent,
    QuotesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    
  ],
  exports: [
    PagesRoutingModule
  ]
})
export class PagesModule { }
