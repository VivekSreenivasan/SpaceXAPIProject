import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExchangeRatesComponent } from './Components/exchange-rates/exchange-rates.component';
import { PastLaunchesTableComponent } from './Components/past-launches-table/past-launches-table.component';
import { RoadsterInfoComponent } from './Components/roadster-info/roadster-info.component';

const routes: Routes = [
  {path:"home", component:ExchangeRatesComponent},
  {path:"past-launches", component: PastLaunchesTableComponent},
  {path:"roadster-info", component: RoadsterInfoComponent},
  {path: '',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
