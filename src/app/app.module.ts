import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { RegComponent } from './reg/reg.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserInfoComponent } from './userInfo/userInfo.component';

const appRout: Routes = [
  { path: '', component: AuthComponent },
  { path: 'reg', component: RegComponent },
  { path: 'home', component: HomeComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    RegComponent,
    AuthComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    UserInfoComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRout)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
