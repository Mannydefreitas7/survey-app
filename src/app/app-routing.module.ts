import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { BoardComponent }  from './board/board.component';
import { FeaturesComponent } from './features/features.component';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
   { path: '', component: FeaturesComponent },
   { path: 'form', component: FormComponent },
   { path: 'board', component: BoardComponent },
   { path: 'chart', component: ChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
