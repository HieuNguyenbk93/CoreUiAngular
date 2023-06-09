import { Routes } from "@angular/router";
import { DashboardComponent } from "src/app/dashboard/dashboard.component";
import { UserProfileComponent } from "src/app/user-profile/user-profile.component";

export const AdminLayoutRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user', component: UserProfileComponent}
]
