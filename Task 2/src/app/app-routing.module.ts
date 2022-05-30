import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NumberComponent } from './number/number.component';

const routes: Routes = [
  {path:"", redirectTo:"/num", pathMatch:"full"},
  {path:"num",component:NumberComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
