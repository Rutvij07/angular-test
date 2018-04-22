import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppComponent } from './app.component';
import { SuccessPageComponent } from './success-page/success-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [
  {
    path: '', component: WelcomeComponent
  },
  {
    path: 'success',component:SuccessPageComponent
  },
  {
    path: 'signup',component:SignUpComponent
  },
  {
    path: 'feature',
    loadChildren: './feature/feature.module#FeatureModule',
  }, 
  {
  path : '**',
  redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

