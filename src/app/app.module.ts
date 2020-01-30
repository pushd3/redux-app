import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomFormComponent } from './custom-form/custom-form.component';
import { ShareDetailsComponent } from './share-details/share-details.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UserEffects } from './store/effects';
import { reducer } from './store/reducer'

const appRoutes: Routes = [
  { path: 'custom-form', component: CustomFormComponent },
  { path: 'share-details', component: ShareDetailsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CustomFormComponent,
    ShareDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    StoreModule.forRoot({ users: reducer }),
    EffectsModule.forRoot([UserEffects]),

    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
