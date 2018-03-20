import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
const routes: Routes = [
  {path: '', loadChildren: './home/home.module#HomeModule'}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],


})
export class AppRoutingModule {}
