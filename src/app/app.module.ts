import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './recycle/nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './recycle/footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { WorkComponent } from './work/work.component';
import { ProjectOneComponent } from './project-one/project-one.component';
import { ProjectTwoComponent } from './project-two/project-two.component';
import { ProjectThreeComponent } from './project-three/project-three.component';
import { ProjectFourComponent } from './project-four/project-four.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    ContactComponent,
    WorkComponent,
    ProjectOneComponent,
    ProjectTwoComponent,
    ProjectThreeComponent,
    ProjectFourComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
