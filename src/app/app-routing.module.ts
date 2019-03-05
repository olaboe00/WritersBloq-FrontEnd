import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeBaseComponent } from './components/home/home-base/home-base.component';
import { LoginBaseComponent } from './components/login/login-base/login-base.component';
import { RegisterBaseComponent } from './components/register/register-base/register-base.component';
import { SearchStoriesComponent } from './components/read/search-stories/search-stories.component';

const routes: Routes = [
  {path: '', component: HomeBaseComponent},
  {path: 'login', component: LoginBaseComponent},
  {path: 'register', component: RegisterBaseComponent},
  // {path: 'dashboard'},
  {path: 'stories', component: SearchStoriesComponent},
  // {path: 'stories/:storyId'},
  // {path: 'stories/:storyId/chapters', redirectTo: '/stories/:storyId'},
  // {path: 'stories/:storyId/chapters/:chapterId'}, 
  // {
  //   path: 'my-stories', 
  //   children: [
  //     {path: ''},
  //     {path: 'new'},
  //     {
  //       path: ':storyId',
  //       children: [
  //         {path: ''},
  //         {path: 'chapters', redirectTo: '/my-stories/:storyId'},
  //         {
  //           path: ':chapterId'
  //         }
  //       ]
  //     }
  //   ]
  // },
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
