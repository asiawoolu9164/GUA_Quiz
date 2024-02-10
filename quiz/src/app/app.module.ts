import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { MyquizComponent } from './pages/myquiz/myquiz.component';
import { CreatequizComponent } from './pages/createquiz/createquiz.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { HistoryComponent } from './pages/history/history.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { PlayResultsComponent } from './pages/play-results/play-results.component';
import { CreatefinComponent } from './pages/createfin/createfin.component';
import { ScorecreateComponent } from './pages/scorecreate/scorecreate.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ForogtpassComponent } from './pages/forogtpass/forogtpass.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MyquizComponent,
    CreatequizComponent,
    NavbarComponent,
    HistoryComponent,
    ProfileComponent,
    QuizComponent,
    PlayResultsComponent,
    CreatefinComponent,
    ScorecreateComponent,
    SignupComponent,
    ForogtpassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
