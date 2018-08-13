import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';

import { PersonComponent } from './person/person.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonCreateComponent } from './person-create/person-create.component';
import { PersonEditComponent } from './person-edit/person-edit.component';

const appRoutes: Routes = [
  {
    path: 'persons',
    component: PersonComponent,
    data: { title: 'Person List' }
  },
  {
    path: 'person-details/:id',
    component: PersonDetailComponent,
    data: { title: 'Person Details' }
  },
  {
    path: 'person-create',
    component: PersonCreateComponent,
    data: { title: 'Create Person' }
  },
  {
    path: 'person-edit/:id',
    component: PersonEditComponent,
    data: { title: 'Edit Person' }
  }
];
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PersonComponent,
    PersonDetailComponent,
    PersonCreateComponent,
    PersonEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    AuthenticationService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }