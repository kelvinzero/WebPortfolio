import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing/landing-page/landing-page.component';
import { HeaderComponent } from './pages/components/header/header.component';
import {MatListModule, MatToolbarModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { AboutMeComponent } from './pages/landing/about-me/about-me.component';
import { MyExperienceComponent } from './pages/landing/my-experience/my-experience.component';
import { MyProjectsComponent } from './pages/landing/my-projects/my-projects.component';
import { MyEducationComponent } from './pages/landing/my-education/my-education.component';
import { ContactMeComponent } from './pages/landing/contact-me/contact-me.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    AboutMeComponent,
    MyExperienceComponent,
    MyProjectsComponent,
    MyEducationComponent,
    ContactMeComponent  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatSidenavModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
