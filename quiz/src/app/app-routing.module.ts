import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { MyquizComponent } from './pages/myquiz/myquiz.component';
import { CreatequizComponent } from './pages/createquiz/createquiz.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HistoryComponent } from './pages/history/history.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { PlayResultsComponent } from './play-results/play-results.component';
import { CreatefinComponent } from './createfin/createfin.component';

const routes: Routes = [
  {path:'login' ,component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'myquiz',component:MyquizComponent},
  {path:'createquiz',component:CreatequizComponent},
  {path: 'profile',component:ProfileComponent},
  {path: 'history',component:HistoryComponent},
  {path: 'quiz',component:QuizComponent},
  {path:  'results', component:PlayResultsComponent},
  {path: 'createfin', component:CreatefinComponent},
  {path:'**',redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
