import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CurrencyPageComponent} from './pages/currency/currency-page.component';
import {CurrencyRequestsHistoryPageComponent} from './pages/currency-requests-history/currency-requests-history-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'currency', pathMatch: 'full' },
  { path: 'currency', component: CurrencyPageComponent },
  { path: 'currency/requests-history', component: CurrencyRequestsHistoryPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
