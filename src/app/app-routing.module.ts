import { LoginPageComponent } from './login-page/login-page.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { AuthGuard } from './auth.guard';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupPageComponent } from './signup-page/signup-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'frontpage', component: FrontpageComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfilepageComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
