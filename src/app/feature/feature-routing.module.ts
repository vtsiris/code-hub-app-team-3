import { BugDashboardComponent } from './bug-dashboard/bug-dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BugsResolver } from './resolvers/bugs-resolver.service';
import { BugHandlerComponent } from './bug-handler/bug-handler.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: BugDashboardComponent, resolve: { bugs: BugsResolver } },
  { path: 'newbug', component: BugHandlerComponent },
  { path: 'editbug/:id', component: BugHandlerComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
