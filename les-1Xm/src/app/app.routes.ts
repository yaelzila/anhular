import { Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { ContactComponent } from '../contact/contact.component';
import { VolunteerListComponent } from '../volunteer-list/volunteer-list.component';
import { InitComponent } from './init/init.component';
import { VolunteerManagerComponent } from '../volunteer-manager/volunteer-manager.component';
import {SchoolComponent} from '../app/school/school.component';
import {MarksComponent} from '../app/marks/marks.component';
import {StudentComponent} from '../app/student/student.component';
import {TeacherComponent} from '../app/teacher/teacher.component';

export const routes: Routes = [

    // {path: 'about', component: AboutComponent},
    // {path: 'home-page', component: HomePageComponent},
    // {path: 'contact', component: ContactComponent},
    // {path: 'volunteer', component: VolunteerListComponent},
    // {path: 'manager/:id', component: VolunteerManagerComponent},
    // {path: '', component: InitComponent},
    {path:'', component:SchoolComponent},
    {path:'marks',component:MarksComponent},
    {path:'student', component:StudentComponent},
    {path:'teacher',component:TeacherComponent}
];
