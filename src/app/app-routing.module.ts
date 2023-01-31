import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { WorkComponent } from './work/work.component';
import { ProjectOneComponent } from './project-one/project-one.component';
import { ProjectTwoComponent } from './project-two/project-two.component';
import { ProjectThreeComponent } from './project-three/project-three.component';
import { ProjectFourComponent } from './project-four/project-four.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'work',
    component: WorkComponent
  },
  {
    path: 'roc_nation',
    component: ProjectOneComponent
  },
  {
    path: 'pulse_music_group',
    component: ProjectTwoComponent
  },
  {
    path: 'dick_clark_productions',
    component: ProjectThreeComponent
  },
  {
    path: 'culture_collective',
    component: ProjectFourComponent
  }, 
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
