import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter.component';
import { NumberCounterComponent } from './number-counter/number-counter.component';
import { AgeCounterComponent } from './age-counter/age-counter.component';

const routes: Routes = [
  {
    path: "", // localhost:4200/counter (this is the base path of module)
    component: CounterComponent, 
    children: [
      {path: "number", component: NumberCounterComponent}, // localhost:4200/counter/number
      {path: "age", component: AgeCounterComponent} // // localhost:4200/counter/age
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CounterRoutingModule { }
