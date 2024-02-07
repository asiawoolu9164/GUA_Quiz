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
import { PlayResultsComponent } from './play-results/play-results.component';
import { CreatefinComponent } from './createfin/createfin.component';

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
    CreatefinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
