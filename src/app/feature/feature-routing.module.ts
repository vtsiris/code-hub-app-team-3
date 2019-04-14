import { NewBugComponent } from './new-bug/new-bug.component';
import { BugDashboardComponent } from './bug-dashboard/bug-dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BugsResolver } from './resolvers/bugs-resolver.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: BugDashboardComponent, resolve: { bugs: BugsResolver } },
  { path: 'newbug', component: NewBugComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
