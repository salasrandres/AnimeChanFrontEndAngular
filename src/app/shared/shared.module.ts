import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchComponent } from './search/search.component';
import { QuoteComponent } from './quote/quote.component';


@NgModule({
  declarations: [
    SearchComponent,
    QuoteComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SearchComponent,
    QuoteComponent
  ]
})
export class SharedModule { }
