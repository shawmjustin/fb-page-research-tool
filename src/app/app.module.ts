import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Reducers
import { reducers } from './store/reducers';

// Services
import { FacebookPostsService } from './store/services/facebook-posts.service';

// Effects
import { FacebookPostsEffects } from './store/effects/facebook-posts.effects';

import { AppComponent } from './app.component';
import { DataComponent } from './components/data/data.component';
import { PostRowComponent } from './components/data/post-row/post-row.component';

// Application routes
const appRoutes: Routes = [
  { path: '', component: DataComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    PostRowComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing: false}),
    HttpClientModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),    
  ],
  providers: [FacebookPostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }