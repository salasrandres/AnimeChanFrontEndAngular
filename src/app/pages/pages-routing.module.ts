import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomComponent } from './random/random.component';
import { QuotesComponent } from './quotes/quotes.component';

const routes: Routes = [
  { path: 'random', component: RandomComponent },
  { path: 'quotes', component: QuotesComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
