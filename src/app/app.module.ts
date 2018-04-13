import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ViewClupComponent } from './components/view-clup/view-clup.component';
import { ClupDetailsComponent } from './components/clup-details/clup-details.component';
import { AddClupComponent } from './components/add-clup/add-clup.component';
import { AddMemberComponent } from './components/add-member/add-member.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { GetDataService } from './services/get-data.service';
import { scheduleMicroTask } from '@angular/core/src/util';
import { DetailsDirectiveDirective } from './directives/details-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    ViewClupComponent,
    ClupDetailsComponent,
    AddClupComponent,
    AddMemberComponent,
    DetailsDirectiveDirective
  ],
  imports: [
    HttpModule, BrowserModule, RouterModule.forRoot([
      {path: "add", component: AddClupComponent},
      {path:"ViewClup",component:ViewClupComponent},
      {path: "clupDetails/:id", component:ClupDetailsComponent}
    ])],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
